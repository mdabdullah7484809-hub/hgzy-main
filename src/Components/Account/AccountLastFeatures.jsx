import { FaFantasyFlightGames } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiLuggageDepositLine } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";

const AccountLastFeatures = ({ language }) => {
  const features = [
    {
      icon: <FaFantasyFlightGames />,
      title: { en: "Game History", bn: "গেম ইতিহাস" },
      text: { en: "My Game history", bn: "আমার গেম ইতিহাস" },
    },
    {
      icon: <AiOutlineTransaction />,
      title: { en: "Transaction", bn: "লেনদেন" },
      text: { en: "My transaction history", bn: "আমার লেনদেনের ইতিহাস" },
    },
    {
      icon: <RiLuggageDepositLine />,
      title: { en: "Deposit", bn: "ডিপোজিট" },
      text: { en: "My Deposit History", bn: "আমার জমার ইতিহাস" },
    },
    {
      icon: <BiMoneyWithdraw />,
      title: { en: "Withdraw", bn: "উত্তোলন" },
      text: { en: "My Withdraw History", bn: "আমার উত্তোলনের ইতিহাস" },
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 py-4  rounded-lg">
      {features.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-center gap-1 p-1  bg-white rounded-lg shadow-md"
        >
          <span className="text-3xl text-red">{item.icon}</span>
          <div className="flex flex-col">
            <h3 className="text-sm">{item.title[language]}</h3>
            <p className="text-xs text-gray">{item.text[language]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountLastFeatures;
