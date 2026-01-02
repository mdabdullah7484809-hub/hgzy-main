import { FaChevronRight } from "react-icons/fa6";
import { IoGiftSharp } from "react-icons/io5";
import { GiGamepad } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const AccountLastNotification = ({ language }) => {
  const data = [
    {
      id: 1,
      icon: <IoIosNotifications />,
      text: { en: "Notification", bn: "নোটিফিকেশন" },
    },
    {
      id: 2,
      icon: <IoGiftSharp />,
      text: { en: "Gifts", bn: "উপহার" },
    },
    {
      id: 3,
      icon: <GiGamepad />,
      text: { en: "Game Statistics", bn: "গেম পরিসংখ্যান" },
    },
    {
      id: 4,
      icon: <MdLanguage />,
      text: { en: "Language", bn: "ভাষা" },
      link: "/language", // লিংক যোগ করা হয়েছে
    },
  ];

  return (
    <div>
      {data.map((item, index) => {
        const content = (
          <div className="flex items-center justify-between bg-gray-200 p-3 rounded-lg shadow-md">
            {/* Left Side: Icon + Text */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl text-red">{item.icon}</span>
              <p className="text-gray-900 font-medium">{item.text[language]}</p>
            </div>
            {index === 0 ? (
              <div className="flex items-center space-x-1 md:space-x-2">
                <p className="text-white text-xs rounded-full bg-red px-2  md:text-sm">
                  10
                </p>
                <FaChevronRight className="text-gray text-lg" />
              </div>
            ) : index === 3 ? (
              <div className="flex items-center space-x-1 md:space-x-2">
                <p className="text-white text-xs rounded-full bg-red px-2 py-1 md:text-sm">
                  {language === "en" ? "English" : "বাংলা"}
                </p>
                <FaChevronRight className="text-gray text-lg" />
              </div>
            ) : (
              <FaChevronRight className="text-gray text-lg" />
            )}
          </div>
        );

        // যদি লিংক থাকে, তাহলে <Link> ট্যাগে র‍্যাপ করবো
        return item.link ? (
          <Link key={item.id} to={item.link}>
            {content}
          </Link>
        ) : (
          <div key={item.id}>{content}</div>
        );
      })}
    </div>
  );
};

export default AccountLastNotification;
