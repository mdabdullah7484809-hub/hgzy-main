import { useState } from "react";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";
const LoginTabs = ({ language, texts }) => {
  const base_url="https://wingobd.onrender.com"
  const navigate=useNavigate();
  const [activeTab, setActiveTab] = useState("phone"); // Default: Phone Login
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
    countryCode: "+880", // Default country code
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (e) => {
    setFormData({ ...formData, countryCode: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const loginData =
        activeTab === "phone"
          ? { phone: formData.phone, password: formData.password }
          : { email: formData.email, password: formData.password };

      const response = await axios.post(`${base_url}/auth/login`, loginData);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user",JSON.stringify(response.data.user));
        toast.success("Login successful!");
        navigate("/")
      } else {
        toast.error(response.data.message || "Login failed!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-lightWhite  pb-14">
      <Toaster/>
        <div className="bg-red text-white p-6">
            <h3 className="text-white">{texts[language].title}</h3>
            <p className="whitespace-pre-wrap text-sm leading-tight">{language === "en" ? "Please log in with your phone number or email\nIf you forget your password, please contact customer service" : "আপনার ফোন নম্বর বা ইমেল দিয়ে লগ ইন করুন \nআপনি যদি আপনার পাসওয়ার্ড ভুলে যান, অনুগ্রহ করে গ্রাহক পরিষেবার সাথে যোগাযোগ করুন"}</p>
        </div>
      <div className="px-4 md:px-0  md:max-w-md mx-auto mt-2 rounded-md">
        {/* Tabs */}
        <div className="flex  mb-4">
          <div
            className={`w-1/2 py-2 flex flex-col items-center text-lg ${
              activeTab === "phone"
                ? "border-b-2 border-red text-red"
                : "text-gray font-medium"
            }`}
            onClick={() => setActiveTab("phone")}
          >
            <IoMdPhonePortrait className="w-6 h-6" />
            <button>{language === "en" ? "Phone Login" : "ফোন নম্বর"}</button>
          </div>
          <div
            className={`w-1/2 py-2 flex flex-col items-center text-lg ${
              activeTab === "email"
                ? "border-b-2 border-red text-red"
                : "text-gray font-medium"
            }`}
            onClick={() => setActiveTab("email")}
          >
            <IoIosMail className="w-6 h-6"/>
            <button>
              
              {language === "en" ? "Email Login" : "ইমেইল লগইন"}
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
          {activeTab === "phone" ? (
            <>
            <div className="flex">
            <IoMdPhonePortrait className="w-6 h-6 text-red" />  
            <h3 className="text-black">{language === "en" ? "Phone Number" : "ফোন নম্বর"}</h3>
            </div>
              

              <div className="flex items-center gap-2 mb-3">
                {/* Country Code Selector */}
                <select
                  value={formData.countryCode}
                  onChange={handleCountryChange}
                  className="p-2 border rounded-md bg-white"
                >
                  <option className="bg-red text-white" value="+880"> +880 (BD)</option>
                  <option className="bg-red text-white" value="+91"> +91 (IN)</option>
                  <option className="bg-red text-white" value="+1"> +1 (US)</option>
                  <option className="bg-red text-white" value="+44"> +44 (UK)</option>
                  <option className="bg-red text-white" value="+61"> +61 (AUS)</option>
                </select>

                {/* Phone Number Input */}
                <input
                  type="text"
                  name="phone"
                  placeholder={language === "en" ? "Please enter the Phone Number" : "ফোন নম্বর লিখুন"}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md bg-white"
                />
              </div>
            </>
          ) : (
            <>
            <div className="flex">
            <IoIosMail className="w-6 h-6 text-red" />  
            <h3 className="text-black">{language === "en" ? "Mail" : "মেইল"}</h3>
            </div>
              <input
                type="email"
                name="email"
                placeholder={language === "en" ? "Please input your email" : "আপনার ইমেইল লিখুন"}
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-white rounded-md mb-3"
              />
            </>
          )}
          <div className="flex">
          <FaLock className="w-6 h-6 text-red"/>
          <h3 className="text-black">{language === "en" ? "Password" : "পাসওয়ার্ড"}</h3>
          </div>

          <div className="relative">
      <input
        type={showPassword ? "text" : "password"} // Toggle type
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 bg-white    rounded-md mb-3 pr-10" // Space for icon
      />

      {/* Toggle Icon */}
      <span
        className="absolute right-3 top-2 cursor-pointer text-gray-500"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <BiSolidShow className="w-6 h-6" /> : <BiSolidHide className="w-6 h-6" />}
      </span>
    </div>

    <div className="flex">
        <input className="mr-2 w-5 h-5" type="checkbox" name="" id="" />
        <p className="text-black">{language === "en" ? "Remember Password" : "পাসওয়ার্ড মনে"}</p>
    </div>

          <button
            type="submit"
            className="w-full  bg-sideBg text-white py-2 rounded-full"
          >
            {texts[language].title}
          </button>
          <Link to="/register">
           <button type="submit" className="w-full bg-sideBg text-white py-2 rounded-full" disabled={loading}>
            রেজিস্ট্রেশন করুন 
           </button>
          </Link>

          
          <div className="grid grid-cols-2 justify-items-center">
          <Link to="/forgot">
          <button className="flex flex-col items-center">
          <FaLock className="w-12 h-12 text-red"/>
          
          <h3 className="text-black">{language === "en" ? "Forget Password" : "পাসওয়ার্ড ভুলে যান"}</h3>
          
          </button>
          </Link>
          
          <div className="flex flex-col items-center">
          <RiCustomerService2Fill className="w-12 h-12 text-red"/>  
          <h3 className="text-black">{language === "en" ? "Customer Service" : "গ্রাহক সেবা"}</h3>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginTabs;
