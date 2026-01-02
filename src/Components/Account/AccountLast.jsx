import React,{useContext, useEffect, useState} from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";


import { CiPower } from "react-icons/ci";
import AccountLastFeatures from "./AccountLastFeatures";
import AccountLastNotification from "./AccountLastNotification";
import AccountLastNewFeatures from "./AccountLastNewFeatures";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../context/GameContext";

const AccountLast = ({ language }) => {
    const {fetchUserInfo,user}=useContext(GameContext);
  
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear all localStorage data
    navigate("/"); // Navigate to home
  };
   useEffect(()=>{
    fetchUserInfo();
   },[])

  return (
    <div className="mt-32 md:mt-16 px-2  ">
      {/* safe */}
      <div className="flex items-center gap-2 justify-center">
        <AiOutlineSafety className="text-5xl text-accountYellow" />
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3 className="font-bold">
               {language==='en'?"Safe":"নিরাপদ"} 
                </h3>
            <div className="flex items-center">
              <p className="font-bold rounded-full bg-accountYellow px-1 text-white">
                ৳{user?.balance.toFixed(0,2)}
              </p>
              <FaAngleRight />
            </div>
          </div>

          <p className=" leading-tight text-sm pt-2 ">

          {language==='en'?"The daily interest rate is 0.1%, and the income is calculated\nonce every 1 minutes.":"দৈনিক সুদের হার ০.১%, এবং আয় প্রতি ১ মিনিটে\nএকবার গণনা করা হয়।"} 
            
          </p>
        </div>
      </div>
      {/* features */}
      <AccountLastFeatures language={language} />

      {/* Account notification */}
      <AccountLastNotification language={language}/>

      {/* new Features */}
      <h3 className="pt-10">
            {language==='en'?"Service Center":"সেবা কেন্দ্র"}
        </h3>
      <AccountLastNewFeatures language={language}/>
      <div className="px-6 ">
        {/* Logout Button */}
      <button
        onClick={() => setShowLogoutModal(true)}
        className="w-full flex py-1 justify-center text-xl gap-1 items-center border border-red text-red rounded-full"
      >
        <CiPower className="text-2xl" />
        {language === "en" ? "Log out" : "সাইন আউট"}
      </button>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {language === "en" ? "Confirm Logout" : "লগআউট নিশ্চিত করুন"}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === "en"
                ? "Are you sure you want to log out?"
                : "আপনি কি লগআউট করতে চান?"}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                {language === "en" ? "Cancel" : "বাতিল"}
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-[#ff4757] text-white rounded-md hover:bg-[#ff4757]"
              >
                {language === "en" ? "Logout" : "লগআউট"}
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default AccountLast;