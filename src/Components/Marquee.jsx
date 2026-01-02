import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RxSpeakerLoud } from "react-icons/rx";// News icon
import { FaFireAlt } from "react-icons/fa";
import { LanguageContext } from "./Context/LanguageContext";

const MarqueeVertical = () => {
    const { language } = useContext(LanguageContext);
    const lines = [
        " Attention! ! ! To all HGZY,",
        " Currently, our customer service only uses LIVE CHAT.",
        " WE DON'T HAVE A TELEGRAM ACCOUNT.",
        " LIVE CHAT is available on our website.",
        " Any other platform claiming to be us is NOT HGZY customer service.",
        " Do not provide personal data or transactions outside the app/website.",
        " Be careful of impersonators acting on behalf of HGZY.",
        " Thank You!"
      ];
      

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden h-12 flex items-center bg-gray-100 px-4 rounded-md shadow-md">
      {/* Animated News Icon */}
      <motion.div 
        className="mr-3 text-red text-2xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <RxSpeakerLoud /> 
      </motion.div>

      <div className="h-12 flex  flex-col justify-center relative w-full overflow-hidden">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={index === currentIndex ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className={`absolute w-full text-xs leading-tight md:text-sm font-semibold text-marqueeText ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            {line}
          </motion.div>
        ))}
      </div>
      <button className="flex items-center border border-red rounded-full px-2 text-sm text-red gap-1">
      <FaFireAlt className="w-3 h-3 text-red"/>
      {language === 'en'? "more":"আরও"}
      </button>
    </div>
  );
};

export default MarqueeVertical;
