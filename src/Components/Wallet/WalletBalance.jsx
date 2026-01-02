import { useContext, useEffect } from "react";
import { IoIosWallet } from "react-icons/io";
import { Link } from "react-router-dom";
import { GameContext } from "../../context/GameContext";

const WalletBalance = () => {
  const {fetchUserInfo,user}=useContext(GameContext);
 
  useEffect(()=>{
    fetchUserInfo();
  },[])
  return (
    <div className="bg-backgroundWhite">
      <div className="pt-10 pb-16">
        <div className="pt-6 pb-2 text-white bg-red text-center">
          <IoIosWallet size={40} className="w-30 m-auto" />
          <span className="text-3xl font-semibold">৳{user?.balance.toFixed(0,2)}</span>
          <p className="text-sm font-normal">Total balance</p>
        </div>

        {/* menu */}
        <div className="px-2 sm:px-4 py-4">
          <div className="px-2 py-4 rounded-md bg-white space-y-4">
            <div className="flex justify-around gap-1 items-center">
              <div className="text-center">
                <span className="text-base font-semibold">৳{user?.balance.toFixed(0,2)}</span>
                <p className="text-sm font-normal">Main wallet</p>
              </div>
              <div className="text-center">
                <span className="text-base font-semibold">৳0.00</span>
                <p className="text-sm font-normal">3rd party wallet</p>
              </div>
            </div>
            <button className="py-2 px-2 rounded-full text-white text-xl font-semibold bg-red w-full">
              Main wallet transfer
            </button>
            <div className="flex justify-around gap-1">
              <Link to={"/deposit"}>
                <div className="">
                  <img
                    className="w-12 h-12 m-auto"
                    src="https://hgzy.org/assets/png/rechargeIcon-e515aee4.png"
                    alt=""
                  />
                  <p className="text-sm w-12 text-center text-text">Deposit</p>
                </div>
              </Link>
              <Link to={"/withdraw"}>
                <div className="">
                  <img
                    className="w-12 h-12 m-auto"
                    src="https://hgzy.org/assets/png/widthdrawBlue-80197e64.png"
                    alt=""
                  />
                  <p className="text-sm w-12 text-center text-text">Withdraw</p>
                </div>
              </Link>
              <Link>
                <div className="">
                  <img
                    className="w-12 h-12 m-auto"
                    src="https://hgzy.org/assets/png/rechargeHistory-b5a853c0.png"
                    alt=""
                  />
                  <p className="text-sm w-12 text-center text-text">
                    Deposit history
                  </p>
                </div>
              </Link>
              <Link>
                <div className="">
                  <img
                    className="w-12 h-12 m-auto"
                    src="https://hgzy.org/assets/png/withdrawHistory-fb2bafcf.png"
                    alt=""
                  />
                  <p className="text-sm w-12 text-center text-text">
                    Withdrawal history
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="px-2 sm:px-4 grid grid-cols-3 gap-2.5 pb-16">
          <div className="px-4 py-5 text-center text-sm font-normal bg-white rounded-md">
            <span className="text-black">0.00</span>
            <p className="text-text">Lottery</p>
          </div>
          <div className="px-4 py-5 text-center text-sm font-normal bg-white rounded-md">
            <span className="text-black">0.00</span>
            <p className="text-text">TB_Chess</p>
          </div>
          <div className="px-4 py-5 text-center text-sm font-normal bg-white rounded-md">
            <span className="text-black">0.00</span>
            <p className="text-text">JDB</p>
          </div>
          <div className="px-4 py-5 text-center text-sm font-normal bg-white rounded-md">
            <span className="text-black">0.00</span>
            <p className="text-text">DG</p>
          </div>
          <div className="px-4 py-5 text-center text-sm font-normal bg-white rounded-md">
            <span className="text-black">0.00</span>
            <p className="text-text">CMD</p>
          </div>
          <div className="px-4 py-5 text-center text-sm font-normal bg-white rounded-md">
            <span className="text-black">0.00</span>
            <p className="text-text">SaBa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletBalance;
