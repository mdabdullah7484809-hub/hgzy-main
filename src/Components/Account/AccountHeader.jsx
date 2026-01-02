import image from "../../assets/1-a6662edb.png";
import { FaRegCopy, FaWallet } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiLuggageDepositLine, RiVipCrownFill } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { LanguageContext } from "../Context/LanguageContext";
import { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext";

const AccountHeader = () => {
  const { language } = useContext(LanguageContext);
    const {fetchUserInfo,user}=useContext(GameContext);
  useEffect(()=>{
    fetchUserInfo();
  },[])
  const content = {
    yesterdayCommission: {
      en: "Yesterday's Total Commission",
      bn: "গতকালের মোট কমিশন",
    },
    upgradeMessage: {
      en: "Upgrade the level to increase commission income",
      bn: "কমিশন আয় বাড়াতে লেভেল আপগ্রেড করুন",
    },
    lastLogin: {
      en: "Last login: 2025-03-27 16:02:41",
      bn: "সর্বশেষ লগইন: ২০২৫-০৩-২৭ ১৬:০২:৪১",
    },
    totalBalance: { en: "Total Balance", bn: "মোট ব্যালেন্স" },
    menuItems: [
      {
        icon: <FaWallet />,
        text: { en: "Wallet", bn: "ওয়ালেট" },
        link: "/wallet",
      },
      {
        icon: <RiLuggageDepositLine />,
        text: { en: "Deposit", bn: "ডিপোজিট" },
        link: "/deposit",
      },
      {
        icon: <BiMoneyWithdraw />,
        text: { en: "Withdraw", bn: "উত্তোলন" },
        link: "/withdraw",
      },
      {
        icon: <RiVipCrownFill />,
        text: { en: "VIP", bn: "ভিআইপি" },
        link: "/",
      },
    ],
  };

  return (
    <div className="relative">
      <div className="py-6 px-6 flex  gap-2 bg-red pb-[40%]">
        <img src={image} alt="" className="rounded-full w-[20%]" />
        <div className="flex text-white gap-1 flex-col items-start justify-center">
          <p className="text-lg">MEMBERNNGGOUGM</p>
          <button className="rounded-full p-1 px-3 flex items-center gap-2 text-white text-xs bg-accountYellow">
            <p>UID |</p>
            <p>1000251</p>
            <span>
              <FaRegCopy />
            </span>
          </button>
          <p className="text-xs">{content.lastLogin[language]}</p>
        </div>
      </div>

      <div className="w-[94%] absolute text-xs md:text-sm top-28 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl space-x-1 rounded-lg">
        <div className="flex flex-col px-4 pt-5 pb-16">
          <h3 className="text-lg">{content.totalBalance[language]}</h3>
          <p className="font-bold">৳{user?.balance.toFixed(0,2)}</p>
          <div className="mt-4 flex justify-between flex-row gap-4 p-4 bg-gray-100 rounded-lg">
            {content.menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="flex flex-col items-center bg-white rounded-lg transition"
              >
                <span className="text-red text-2xl">{item.icon}</span>
                <span className="text-">{item.text[language]}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;
