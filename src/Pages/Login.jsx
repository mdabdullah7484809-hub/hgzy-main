import { useContext } from "react";
import LoginTabs from "../Components/Login/LoginTabs";
import { LanguageContext } from "../Components/Context/LanguageContext";
import TopLoginRegisterPassword from "../Components/TopLoginRegisterPassword";

const Login = () => {
  const { language } = useContext(LanguageContext);

  // const [language, setLanguage] = useState("en"); // Default English
  
  // const [isIopenRegister,setIsOpenRegister] = useState();
  // Texts for both languages
  const texts = {
    en: {
      title: "Login",
      username: "Username",
      password: "Password",
      login: "Log in",
      close: "Close",
      changeLang: "EN",
      signUp: "Register",
    },
    bn: {
      title: "প্রবেশ করুন",
      username: "ইউজারনেম",
      password: "পাসওয়ার্ড",
      login: "প্রবেশ করুন",
      close: "বন্ধ করুন",
      changeLang: "BN",
      signUp: "নিবন্ধন",
    },
  };

  return (
    
      <div className="max-w-[480px] bg-lightWhite  mx-auto min-h-screen ">
        <TopLoginRegisterPassword />

        <LoginTabs texts={texts} language={language} />
      </div>
    
  );
};

export default Login;
