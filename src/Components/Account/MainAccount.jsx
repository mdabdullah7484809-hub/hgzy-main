import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import AccountHeader from "./AccountHeader";
import AccountLast from "./AccountLast";


const MainAccount = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className="bg-white pb-44">
            <AccountHeader/>
            <AccountLast language={language}/>
        </div>
    );
};

export default MainAccount;