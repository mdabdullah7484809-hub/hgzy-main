import { useContext, useState } from "react";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { LanguageContext } from "../Context/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";
const RegisterContents = () => {
  const base_url="https://wingobd.onrender.com"
  const navigate=useNavigate();
  const texts = {
    en: {
      title: "Login",
      username: "Username",
      password: "Password",
      login: "Log in",
      close: "Close",
      changeLang: "EN",
      signUp: "Register",
    },
    bn: {
      title: "প্রবেশ করুন",
      username: "ইউজারনেম",
      password: "পাসওয়ার্ড",
      login: "প্রবেশ করুন",
      close: "বন্ধ করুন",
      changeLang: "BN",
      signUp: "নিবন্ধন",
    },
  };
  const { language } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState("phone"); // Default: Phone Login
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
    passwordTwo: "",
    countryCode: "+880", // Default country code
    invitationCode: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (e) => {
    setFormData({ ...formData, countryCode: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone) {
      return toast.error("Phone number is required");
    }
    if (!formData.password || formData.password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }
    if (formData.password !== formData.passwordTwo) {
      return toast.error("Passwords do not match");
    }
    
    try {
      axios.post(`${base_url}/auth/register`, formData)
      .then((res)=>{
        if(res.data.success){
          navigate("/login")
          toast.success("Registration successful!");
        }else{
          toast.error(res.data.message);
        }
      }).catch((err)=>{
        console.log(err)
      })
     
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="bg-lightWhite pb-5">
      <Toaster/>
      <div className="bg-red text-white p-6">
        <h3 className="text-white">{texts[language].signUp}</h3>
        <p className="whitespace-pre-wrap text-sm leading-tight">
          {language === "en"
            ? "Please register by phone number or email"
            : "ফোন নম্বর বা ইমেল দ্বারা নিবন্ধন করুন"}
        </p>
      </div>
      <div className="max-w-md mx-auto px-4 md:px-0 mt-2 rounded-md">
        {/* Tabs */}
        <div className="flex  mb-4">
          <div
            className={`w-full py-2 flex flex-col items-center text-lg ${
              activeTab === "phone"
                ? "border-b-2 border-red text-red"
                : "text-gray font-medium"
            }`}
            onClick={() => setActiveTab("phone")}
          >
            <IoMdPhonePortrait className="w-6 h-6" />
            <button>
              {language === "en"
                ? "Register Your Phone"
                : "আপনার ফোন নিবন্ধন করুন"}
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <IoMdPhonePortrait className="w-6 h-6 text-red" />
            <h3 className="text-black">
              {language === "en" ? "Phone Number" : "ফোন নম্বর"}
            </h3>
          </div>

          <div className="flex items-center gap-2 mb-3">
            {/* Country Code Selector */}
            <select
              value={formData.countryCode}
              onChange={handleCountryChange}
              className="p-2 border rounded-md bg-white"
            >
              <option className="bg-red text-white" value="+880">
                {" "}
                +880 (BD)
              </option>
              <option className="bg-red text-white" value="+91">
                {" "}
                +91 (IN)
              </option>
              <option className="bg-red text-white" value="+1">
                {" "}
                +1 (US)
              </option>
              <option className="bg-red text-white" value="+44">
                {" "}
                +44 (UK)
              </option>
              <option className="bg-red text-white" value="+61">
                {" "}
                +61 (AUS)
              </option>
            </select>

            {/* Phone Number Input */}
            <input
              type="text"
              name="phone"
              placeholder={
                language === "en"
                  ? "Please enter the Phone Number"
                  : "ফোন নম্বর লিখুন"
              }
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 ">
              <FaLock className="w-6 h-6 text-red" />
              <h3 className="text-black">
                {language === "en" ? "Set Password" : "পাসওয়ার্ড সেট করুন"}
              </h3>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle type
                name="password"
                placeholder={language === "en" ? "Set Password" : "পাসওয়ার্ড সেট করুন"}
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border  rounded-md bg-white" // Space for icon
              />

              {/* Toggle Icon */}
              <span
                className="absolute right-3 top-2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <BiSolidShow className="w-6 h-6" />
                ) : (
                  <BiSolidHide className="w-6 h-6" />
                )}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <FaLock className="w-6 h-6 text-red" />
              <h3 className="text-black">
                {language === "en"
                  ? "Confirm Password"
                  : "পাসওয়ার্ড নিশ্চিত করুন"}
              </h3>
            </div>

            <div className="relative">
              <input
                type={showPasswordTwo ? "text" : "password"} // Toggle type
                name="passwordTwo"
                placeholder={language === "en"
                    ? "Confirm Password"
                    : "পাসওয়ার্ড নিশ্চিত করুন"}
                value={formData.passwordTwo}
                onChange={handleChange}
                className="w-full p-2 border  rounded-md bg-white" // Space for icon
              />

              {/* Toggle Icon */}
              <span
                className="absolute right-3 top-2 cursor-pointer text-gray-500"
                onClick={() => setShowPasswordTwo(!showPasswordTwo)}
              >
                {showPasswordTwo ? (
                  <BiSolidShow className="w-6 h-6" />
                ) : (
                  <BiSolidHide className="w-6 h-6" />
                )}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex">
              <IoMdPhonePortrait className="w-6 h-6 text-red" />
              <h3 className="text-black">
                {language === "en" ? "Invite Code" : "আমন্ত্রণ কোড"}
              </h3>
            </div>
            <input
              type="text"
              name="invitationCode"
              id="invitationCode"
              value={formData.invitationCode}
              onChange={handleChange}
              placeholder={
                language === "en"
                  ? "Please enter the Invitation Code"
                  : "অনুগ্রহ করে আমন্ত্রণ কোড লিখুন"
              }
              className="w-full p-2 border rounded-md  bg-white"
            />
          </div>

          <div className="flex">
            <input className="mr-2 w-5 h-5" type="checkbox" name="" id="" />
            <p className="text-black">
              {language === "en"
                ? "I have read and agree"
                : "আমি পড়েছি এবং একমত "}
            </p>
          </div>

          <button
            type="submit"
            className="w-full  border bg-red text-white py-2 rounded-full"
          >
            {texts[language].signUp}
          </button>
          <button
            type="submit"
            className="w-full flex gap-4 justify-center  border border-red text-red py-2 rounded-full"
          >
            <p className="text-black">
              {language === "en"
                ? "I have an account"
                : "আমার একটি একাউন্ট আছে "}
            </p>
            <Link to="/login">
              <button>{language === "en" ? "Login" : "লগ - ইন করতে "}</button>
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterContents;
