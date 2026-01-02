import { useContext, useEffect } from "react";
import enFlag from "../assets/en-4c6eba8e.png"; // English flag
import bnFlag from "../assets/bd-de258be1.png"; // Bangladeshi flag
import { LanguageContext } from "../Components/Context/LanguageContext";
import LanguageHeader from "../Components/Language/LanguageHeader";

const Language = ({ setIsLangModalOpen }) => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []); 
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className="bg-sideBg  ">
      <div className="w-full max-w-[480px] mx-auto bg-backgroundWhite">
        <LanguageHeader language={language}/>
        <div
          onClick={() => {
            setIsLangModalOpen(false);
          }}
          className=" min-h-screen"
        >
          <div className="bg-white p-6 rounded-lg  w-full ">
            <div
              className="flex items-center justify-between p-3 rounded-md cursor-pointer "
              onClick={() => {
                setLanguage("en");
                setIsLangModalOpen(false);
              }}
            >
              <div className="flex">
                <img src={enFlag} alt="English" className="w-6 h-6 mr-2" />
                <span>English</span>
              </div>
              <input
                type="checkbox"
                className="mr-2 w-5 h-5"
                checked={language === "en"}
                onChange={() => {
                  setLanguage("en");
                  setIsLangModalOpen(false);
                }}
              />
            </div>

            <div
              className="flex items-center justify-between p-3  rounded-md cursor-pointer  mt-2"
              onClick={() => {
                setLanguage("bn");
                setIsLangModalOpen(false);
              }}
            >
              <div className="flex">
                <img src={bnFlag} alt="বাংলা" className="w-6 h-6 mr-2" />
                <span>বাংলা</span>
              </div>

              <input
                type="checkbox"
                className="mr-2 w-5 h-5 rounded-full"
                checked={language === "bn"}
                onChange={() => {
                  setLanguage("bn");
                  setIsLangModalOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
