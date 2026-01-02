import { RxCaretLeft } from "react-icons/rx";
import { Link } from "react-router-dom";

const WalletTop = () => {
  return (
    <div className="text-white bg-red py-2 max-w-[480px] m-auto fixed top-0 w-full">
      <div className="flex justify-between items-center">
        <Link to="/">
          <div className="px-1">
            <RxCaretLeft size={30} />
          </div>
        </Link>
        <h2 className="mr-10 text-2xl font-semibold text-center">Wallet</h2>
        <div className=""></div>
      </div>
    </div>
  );
};

export default WalletTop;
