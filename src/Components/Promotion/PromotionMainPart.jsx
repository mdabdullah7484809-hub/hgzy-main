import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import PromotionHeader from "./PromotionHeader";
import PromotionLast from "./PromotionLast";

const PromotionMainPart = () => {
  const { language } = useContext(LanguageContext);
  const sectionsData = {
    en: ["Direct Subordinate", "Team Subordinate"],
    bn: ["সরাসরি অধীনস্থ", "দলের অধীনস্থ"],
  };

  const itemsData = {
    en: [
      "Number of Text",
      "Number of Deposit",
      "Deposit Amount",
      "Number of People Making First Deposit",
    ],
    bn: [
      "বার্তার সংখ্যা",
      "ডিপোজিট সংখ্যা",
      "ডিপোজিট পরিমাণ",
      "প্রথম ডিপোজিট করা মানুষের সংখ্যা",
    ],
  };

  return (
    <div className="bg-backgroundWhite pt-12 pb-24">
      <PromotionHeader
        language={language}
        sectionsData={sectionsData}
        itemsData={itemsData}
      />
      <PromotionLast language={language} />

      <div className="bg-white min-h-screen pb-32 ">
        <PromotionHeader
          language={language}
          sectionsData={sectionsData}
          itemsData={itemsData}
        />
        <PromotionLast language={language} />
      </div>
    </div>
  );
};

export default PromotionMainPart;
