import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

const LanguageHeader = ({language}) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex bg-red py-2 text-white  items-center">
                    <span onClick={() => navigate(-1)}> {/* Navigate to previous page */}
                      <FaAngleLeft className="w-6 h-6" />
                    </span>
                    <span className="mx-auto">
                        {language==='en'?"language":"ভাষা"}
                    </span>
                  </div>
        </div>
    );
};

export default LanguageHeader;