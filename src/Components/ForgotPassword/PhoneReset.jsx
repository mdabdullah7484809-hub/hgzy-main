import { useContext, useState } from "react";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { LanguageContext } from "../Context/LanguageContext";

const PhoneReset = () => {
  
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
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="bg-lightWhite pb-5">
      <div className="bg-red text-white p-6">
        <h3 className="text-white">{language === "en"
                ? "Forgot Password"
                : "পাসওয়ার্ড ভুলে যান"}</h3>
        <p className="whitespace-pre-wrap text-sm leading-tight">
          {language === "en"
            ? "Please retrieve/change your password through your mobile phone number or email"
            : "অনুগ্রহ করে আপনার মোবাইল ফোন নম্বর বা ইমেলের মাধ্যমে আপনার পাসওয়ার্ড পুনরুদ্ধার/পরিবর্তন করুন"}
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
                ? "Phone Reset"
                : "ফোন রিসেট"}
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
                {language === "en" ? "New Password" : "নতুন পাসওয়ার্ড"}
              </h3>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle type
                name="password"
                placeholder={language === "en" ? "New Password" : "নতুন পাসওয়ার্ড"}
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white" // Space for icon
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
                  ? "New Confirm Password"
                  : "নতুন পাসওয়ার্ড নিশ্চিত করুন"}
              </h3>
            </div>

            <div className="relative">
              <input
                type={showPasswordTwo ? "text" : "password"} // Toggle type
                name="passwordTwo"
                placeholder="Password"
                value={formData.passwordTwo}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-white" // Space for icon
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
                {language === "en" ? "Verification Code " : "যাচাইকরণ কোড"}
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
                  ? "Please enter the Confirmation Code"
                  : "যাচাইকরণ কোড"
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
            {language === "en"
                ? "Reset"
                : "রিসেট "}
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default PhoneReset;
