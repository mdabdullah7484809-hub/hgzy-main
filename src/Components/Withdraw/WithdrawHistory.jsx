import { MdFileCopy } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import empty from "../../../public/empty.png";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import toast,{Toaster} from "react-hot-toast";
import axios from "axios";
import { GameContext } from "../../context/GameContext";

const WithdrawHistory = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [walletNumber, setWalletNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("E-Wallet");
  const user_info=JSON.parse(localStorage.getItem("user"))
    const {fetchUserInfo,user,fetchwithdrawById,withdrawal,loading,error}=useContext(GameContext);
  
  const selectAmount = (amount) => {
    setSelectedAmount(amount);
  };
  useEffect(()=>{
    fetchUserInfo();
    fetchwithdrawById();
  },[])
  const handleWithdraw = async () => {
    if (!selectedAmount || !walletNumber) {
      toast.error("Please enter amount and wallet number");
      return;
    }

    try {
      const response = await axios.post(`https://wingobd.onrender.com/user/withdraw`, {
        paymentMethod,
        amount: selectedAmount,
        walletNumber,
        customer_id:user_info._id
      });

      toast.success("Withdrawal request created successfully!");
      setSelectedAmount("");
      setWalletNumber("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong. Try again later.");
    }
  };

  return (
    <div className="bg-backgroundWhite">
      <Toaster/>
      <div className="pt-12 pb-4 px-2 sm:px-4 py-4 space-y-4">
        <div className="relative">
          <img
            src="https://hgzy.org/assets/png/TotalAssetsBg-81d648d4.png"
            alt=""
          />
          <div className="absolute top-5 left-5">
            <div className="flex items-center gap-1.5">
              <img
                className="w-5"
                src="https://hgzy.org/assets/png/balance-e39ce400.png"
                alt=""
              />
              <p className="text-white text-base font-medium">
                Available balance
              </p>
            </div>
            <div className="mt-2 text-white flex items-center gap-1">
              <span>
                <TbCurrencyTaka size={28} />
              </span>
              <p className="text-xl font-bold">{user?.balance.toFixed(0,2)}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {["E-Wallet", "USDT"].map((method) => (
            <button
              key={method}
              className={`px-6 py-7 text-center rounded-md transition-colors duration-300 ${paymentMethod === method ? "bg-red text-white" : "bg-white hover:bg-red hover:text-white"}`}
              onClick={() => setPaymentMethod(method)}
            >
              {method}
            </button>
          ))}
        </div>

        <Link>
          <div className="mt-3 p-2 flex flex-col items-center justify-center bg-white rounded-lg">
            <Link to="/method">
              <div className="p-3 rounded-sm border border-dashed text-gray border-gray">
                <FaPlus />
              </div>
            </Link>
            <p>Add</p>
          </div>
        </Link>

        <div className="bg-white p-4 rounded-md space-y-4">
          <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="w-full px-6 py-2 bg-gray-100 rounded-full border border-[#d1d8e0] outline-none"
              placeholder="Wallet Number"
              value={walletNumber}
              onChange={(e) => setWalletNumber(e.target.value)}
            />

            <div className="grid grid-cols-3 gap-2">
              {[500, 1000, 5000, 10000].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`px-4 py-2 rounded-md transition-colors duration-300 ${selectedAmount == amount ? "bg-red text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                  onClick={() => selectAmount(amount)}
                >
                  ৳{amount}
                </button>
              ))}
            </div>

            <input
              type="text"
              className="w-full px-6 py-2 bg-gray-100 rounded-full border border-[#d1d8e0] outline-none mt-2"
              placeholder="Enter amount"
              value={selectedAmount}
              onChange={(e) => setSelectedAmount(e.target.value)}
            />

            <div className="text-red text-sm font-medium flex justify-between items-center gap-1">
              <p className="font-normal">Withdrawable balance৳0.00</p>
              <span className="px-6 border border-red rounded-xl">All</span>
            </div>
            <div className="text-gray text-sm font-medium flex justify-between items-center gap-1">
              <p className="font-normal">Withdrawal amount received</p>
              <span className="text-red">৳{selectedAmount || "0.00"}</span>
            </div>

            <button
              type="button"
              onClick={handleWithdraw}
              className="w-full p-2 text-base font-semibold text-white bg-red rounded-full"
            >
              Withdraw
            </button>
          </form>
        </div>

        <div className="">
          <div className="flex items-center gap-1 mb-4">
            <MdFileCopy size={28} className="text-red" />
            <p className="text-xl font-semibold text-black">Withdrawal history</p>
          </div>
      
            {loading ? (
              <p className="text-center">Loading deposit details...</p>
            ) : error ? (
              <p className="text-center text-red-500">Error: {error}</p>
            ) : withdrawal.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border border-[#d1d8e0] text-left">
                  <thead>
                    <tr className="bg-gray-100 text-[13px] text-nowrap">
                      <th className="p-2 border border-[#d1d8e0] ">Payment Method</th>
                      <th className="p-2 border border-[#d1d8e0] ">Withdraw Amount</th>
                      <th className="p-2 border border-[#d1d8e0] ">User Wallet</th>
                      <th className="p-2 border border-[#d1d8e0] ">Status</th>
                      <th className="p-2 border border-[#d1d8e0] ">Order ID</th>
                      <th className="p-2 border border-[#d1d8e0] ">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      withdrawal.map((data)=>{
                        return(
                          <tr className="hover:bg-gray-50 text-[13px] text-nowrap">
                          <td className="p-2 border border-[#d1d8e0] ">{data.paymentMethod}</td>
                          <td className="p-2 border border-[#d1d8e0] ">{data.amount}</td>
                          <td className="p-2 border border-[#d1d8e0] ">{data.walletNumber}</td>
                          <td className="p-2 border  border-[#d1d8e0]  capitalize">{data.status}</td>
                          <td className="p-2 border border-[#d1d8e0] ">{data.orderId}</td>
                          <td className="p-2 border border-[#d1d8e0] ">
                            {new Date(data.createdAt).toLocaleString()}
                          </td>
                        </tr>
                        )
                      })
                    }
                   
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center">
                <img className="w-64 m-auto" src={empty} alt="No data" />
                <p className="text-gray-500 mt-2">No deposit history available.</p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawHistory;
