import mainLogo from "../../assets/h5setting_202402261158175271.png";
import { FaChevronDown } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { LanguageContext } from '../Context/LanguageContext';
// import { useContext } from 'react';
const Header = () => {
  // const {  language } = useContext(LanguageContext);

  return (
    <div className="p-2 sticky flex justify-between">
      <img src={mainLogo} alt="" className="w-24" />

      <div className="flex gap-3 items-center">
        {/* <Link to="/login">
            <span
            // onClick={() => setIsOpen(true)}
            className='text-red bg-pink  p-1  rounded-md'><FaChevronDown /></span>
            </Link> */}
        <Link to="/login">
          <button className="text-red bg-pink p-1 rounded-md">
            <FaChevronDown />
          </button>
        </Link>
        <span className="text-red   rounded-md">
          <FaDownload />
        </span>
      </div>
    </div>
  );
};

export default Header;
