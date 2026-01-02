import { FaFilterCircleDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PromotionTop = () => {
  return (
    <div className="text-black bg-white py-2 max-w-[480px] m-auto fixed top-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div className=""></div>
        <h2 className="ml-10 text-2xl font-medium text-center">Agency</h2>
        <Link to="/">
          <div className="px-1 text-red">
            <FaFilterCircleDollar size={26} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PromotionTop;
