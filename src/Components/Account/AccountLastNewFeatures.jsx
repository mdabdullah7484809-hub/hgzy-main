import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

const AccountLastNewFeatures = ({ language }) => {
  const featuresTwo = [
    { icon: <IoMdSettings />, titleEn: "Settings", titleBn: "সেটিংস" },
    { icon: <RiFeedbackLine />, titleEn: "Feedback", titleBn: "মতামত" },
    { icon: <IoIosNotifications />, titleEn: "Notification", titleBn: "নোটিফিকেশন" },
    { icon: <RiCustomerService2Fill />, titleEn: "24/7 customer service", titleBn: "7*24 গ্রাহক সেবা" },
    { icon: <FaBookOpen />, titleEn: "Beginner's Guide", titleBn: "শুরুর নির্দেশিকা" },
    { icon: <CgDetailsMore />, titleEn: "About us", titleBn: " সম্পর্কিত" },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 pb-6  rounded-lg">
        
      {featuresTwo.map((item, index) => (
        <div
          key={index}
          className="flex flex-col text-gray py-1 items-center bg-white rounded-lg shadow-md"
        >
          <span className="text-3xl text-red">{item.icon}</span>
          <h3 className="text-center text-xs md:text-sm mt-2">
            {language === "bn" ? item.titleBn : item.titleEn}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default AccountLastNewFeatures;
