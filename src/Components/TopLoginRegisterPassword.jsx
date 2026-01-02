import { useNavigate } from "react-router-dom";
import enFlag from "../assets/en-4c6eba8e.png"; // English flag
import bnFlag from "../assets/bd-de258be1.png"; // Bangladeshi flag
import { FaAngleLeft } from "react-icons/fa6";
import mainLogoWhite from "../assets/h5setting_202402261158228q1k.png";
import { useContext, useState } from "react";
import { LanguageContext } from "./Context/LanguageContext";
import Language from "../Pages/Language";

const TopLoginRegisterPassword = () => {
  const navigate = useNavigate(); // useNavigate hook
const [isLangModalOpen, setIsLangModalOpen] = useState(false);
const {  language, setLanguage } = useContext(LanguageContext);
const texts = {
  en: {
    title: "Login",
    username: "Username",
    password: "Password",
    login: "Log in",
    close: "Close",
    changeLang: "EN",
    signUp:"Register"
  },
  bn: {
    title: "প্রবেশ করুন",
    username: "ইউজারনেম",
    password: "পাসওয়ার্ড",
    login: "প্রবেশ করুন",
    close: "বন্ধ করুন",
    changeLang: "BN",
    signUp:"নিবন্ধন"
  },
};
  return (
    <div className="sticky top-0">
      <div className="flex bg-red text-white justify-between items-center">
        <span onClick={() => navigate(-1)}> {/* Navigate to previous page */}
          <FaAngleLeft className="w-6 h-6" />
        </span>
        <img src={mainLogoWhite} alt="" className="w-28" />

        {/* Language Change Button */}
        <button
          className="px-3 py-1 rounded-md text-sm flex items-center"
          onClick={() => setIsLangModalOpen(true)}
        >
          <img
            src={language === "en" ? enFlag : bnFlag}
            alt={language === "en" ? "En" : "Bn"}
            className="w-6 h-6 mr-2"
          />
          {texts[language].changeLang}
        </button>
      </div>

      {/* Language Selection Modal */}
      {isLangModalOpen && (
        <div
          onClick={() => {
            setIsLangModalOpen(false);
          }}
          className="fixed inset-0 flex items-end bg-black bg-opacity-50 z-9999"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[480px] mx-auto">
            <div
              className="flex items-center justify-between p-3 rounded-md cursor-pointer "
              onClick={() => {
                setLanguage("en");
                setIsLangModalOpen(false);
              }}
            >
              <div className="flex">
                <img src={enFlag} alt="English" className="w-6 h-6 mr-2" />
                <span>EN</span>
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
                <span>BD</span>
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
      )}
      <div className="hidden">
        <Language
        setIsLangModalOpen={setIsLangModalOpen}
        setLanguage={setLanguage}
        enFlag={enFlag}
        bnFlag={bnFlag}
        language={language}
        />
      </div>
    </div>
  );
};

export default TopLoginRegisterPassword;
