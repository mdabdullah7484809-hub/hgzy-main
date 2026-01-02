import {
    FaRegCopy,
    FaMoneyBill,
    FaDatabase,
    FaUserPlus,
    FaChartLine,
    FaHandHoldingUsd,
  } from "react-icons/fa";
  import { FaChevronRight } from "react-icons/fa6";
  import { SiAdobepremierepro } from "react-icons/si";
  
  const PromotionLast = ({ language }) => {
    // Items for left and right sections with EN & BN logic
    const itemsOne = {
      en: ["This Week", "Direct Subordinate"],
      bn: ["এই সপ্তাহ", "সরাসরি অধীনস্থ"],
    };
  
    const itemsTwo = {
      en: ["Total Commission", "Total number of subordinates in the team"],
      bn: ["মোট কমিশন", "দলের অধীনস্থদের মোট সংখ্যা"],
    };
  
    // Data array with language logic
    const data = [
      { id: 1, icon: <FaRegCopy />, text: { en: "Copy invitation code", bn: "আমন্ত্রণ কোড কপি করুন" } },
      { id: 2, icon: <FaDatabase />, text: { en: "Subordinate data", bn: "অধীনস্থদের তথ্য" } },
      { id: 3, icon: <FaMoneyBill />, text: { en: "Commission detail", bn: "কমিশনের বিবরণ" } },
      { id: 4, icon: <FaUserPlus />, text: { en: "Invitation rules", bn: "আমন্ত্রণের নিয়মাবলী" } },
      { id: 5, icon: <FaChartLine />, text: { en: "Agent the customer service", bn: "এজেন্ট কাস্টমার সার্ভিস" } },
      { id: 6, icon: <FaHandHoldingUsd />, text: { en: "Rebate Ratio", bn: "রিবেট অনুপাত" } },
    ];
  
    return (
      <div>
        <div className="mt-[160px] md:mt-[30%] px-[10%]">
          <button className="text-white p-2 rounded-full w-full bg-red">
            {language === "bn" ? "আমন্ত্রণ লিংক" : "INVITATION LINK"}
          </button>
        </div>
        
        <div className="flex flex-col space-y-2 text-xs md:text-base p-4">
          {data.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between bg-gray-200 p-3 rounded-lg shadow-md">
              {/* Left Side: Icon + Text */}
              <div className="flex items-center space-x-3">
                <span className="text-3xl text-red">{item.icon}</span>
                <p className="text-gray-900 font-medium">{item.text[language]}</p>
              </div>
              {index === 0 ? (
                <div className="flex items-center space-x-1 md:space-x-2">
                  <p className="text-gray text-xs md:text-sm">678954456678</p>
                  <FaRegCopy className="text-gray text-lg" />
                </div>
              ) : (
                <FaChevronRight className="text-gray text-lg" />
              )}
            </div>
          ))}
        </div>
  
        {/* Promotion Data */}
        <div>
          <div className="flex items-center gap-1 p-4">
            <SiAdobepremierepro className="text-red w-8 h-8" />
            <h3 className="font-bold">
              {language === "bn" ? "প্রচার তথ্য" : "Promotion Data"}
            </h3>
          </div>
  
          <div className="flex text-xs md:text-sm justify-center space-x-4 rounded-lg p-4">
            {/* Left Column */}
            <div className="space-y-2 px-4 md:px-14">
              {itemsOne[language].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <p className="font-semibold">0</p>
                  <p className="text-gray-700 text-center">{item}</p>
                </div>
              ))}
            </div>
  
            {/* Right Column */}
            <div className="space-y-2 border-l px-4 md:px-12">
              {itemsTwo[language].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <p className="font-semibold">0</p>
                  <p className="text-gray-700 text-center">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PromotionLast;
  