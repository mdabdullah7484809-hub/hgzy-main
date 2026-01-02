import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const WalletMethod = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-sideBg min-h-screen">
      <div className="w-full max-w-[480px] mx-auto bg-backgroundWhite min-h-screen">
        <div className="flex bg-white py-2 text-black  items-center">
          <span onClick={() => navigate(-1)}>
            {" "}
            {/* Navigate to previous page */}
            <FaAngleLeft className="w-6 h-6" />
          </span>
          <span className="mx-auto text-xl ">E-WalletPayment method</span>
        </div>
        <div className="mt-3 p-2 flex flex-col items-center justify-center bg-white rounded-lg">
          <Link to="/ewallet">
            <div className="p-3 rounded-sm border border-dashed text-gray border-gray">
              <FaPlus />
            </div>
          </Link>
          <p className="text-gray text-sm">Add Payment Method</p>
        </div>
<Link to="/ewallet">
        <div className=" w-full max-w-[480px] fixed text-center py-2 font-bold  bg-red bottom-0">
          Add Payment Method
        </div>
        </Link>
      </div>
    </div>
  );
};

export default WalletMethod;
