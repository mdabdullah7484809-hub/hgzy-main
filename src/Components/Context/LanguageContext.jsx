import { createContext, useState} from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("bn");
  const [translations, setTranslations] = useState({});

  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations,setTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
