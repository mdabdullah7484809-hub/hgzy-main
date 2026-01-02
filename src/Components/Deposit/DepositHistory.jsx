import React,{useState,useEffect,useContext} from "react";
import { MdFileCopy } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import empty from "../../../public/empty.png";
import { ImBook } from "react-icons/im";
import { FaTimes } from "react-icons/fa";
import axios from "axios"
import toast,{Toaster} from "react-hot-toast";
import { MdOutlineContentCopy } from "react-icons/md";
import { GameContext } from "../../context/GameContext";
const DepositHistory = () => {
  const base_url = import.meta.env.VITE_API_KEY_Base_URL;
  const [inputValue, setInputValue] = useState("");
  const [agentNumber, setAgentNumber] = useState("01621125250");
  const [payerNumber, setPayerNumber] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [transaction_id,set_transaction_id]=useState("");
  const user_info=JSON.parse(localStorage.getItem("user"));
  
const handleAgentCopy = () => {
   navigator.clipboard.writeText(agentNumber);
   setCopySuccess(true); // Show check icon on copy
   setTimeout(() => setCopySuccess(false), 2000); // Hide check icon after 2 seconds
 };
  const [selectedAmount, setSelectedAmount] = useState(null); // Track selected amount

  const handleClick = (num) => {
    setInputValue(num); // Set input to the clicked amount
    setSelectedAmount(num); // Set selected amount
  };

  const handleClear = () => {
    setInputValue("");
    setSelectedAmount(null); // Reset selected amount when cleared
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Handle custom input value
    setSelectedAmount(null); // Deselect predefined amount when typing custom amount
  };

 // State to manage the active payment method and channel
 const [activePayment, setActivePayment] = useState("");
 const [activeChannel, setActiveChannel] = useState("");

 // Payment options array
 const paymentMethods = [
   { name: "Nagad", image: "https://ossimg.crhhh.com/bdtgame/payNameIcon/payNameIcon2_202305271853108ybn.png" },
   { name: "bKash", image: "https://ossimg.crhhh.com/bdtgame/payNameIcon/payNameIcon_20230527185226qqyl.png" },
   { name: "Rocket", image: "https://ossimg.crhhh.com/bdtgame/payNameIcon/payNameIcon_20230527185659ww9g.png" },
   { name: "Upay", image: "https://ossimg.crhhh.com/bdtgame/payNameIcon/payNameIcon_20230527185720wrmf.png" },
   { name: "USDT BONUS", image: "https://ossimg.crhhh.com/bdtgame/payNameIcon/payNameIcon_20230606184906negf.jpg" },
 ];

 // Channel options array
 const channels = [
   { name: "EPayBDT-NAGAD", balance: "300 - 25K" },
   { name: "DeePayBDT-NAGAD", balance: "100 - 50K" },
   { name: "AEEPayBDT-NAGAD", balance: "300 - 25K" },
   { name: "CashPayBDT-nagad", balance: "300 - 25K" },
 ];
  // Handle form submission

  const handleSubmit = async () => {
    // Check if required data is available
    if (!activePayment) {
      toast.error("Please select a payment method.");
      return;
    }
  
    if (!inputValue && !selectedAmount) {
      toast.error("Please select or enter a deposit amount.");
      return;
    }
  
    if (!payerNumber) {
      toast.error("Please enter your wallet number.");
      return;
    }
  
    if (!transaction_id) {
      toast.error("Please enter the transaction ID.");
      return;
    }
  
    if (!agentNumber) {
      toast.error("Please enter the agent number.");
      return;
    }
  
    if (!user_info?.phoneNumber) {
      toast.error("Please enter your phone number.");
      return;
    }
  
    // Prepare the data for submission
    const data = {
      paymentMethod: activePayment,
      depositAmount: inputValue || selectedAmount,
      userWalletNumber: payerNumber,
      transactionId: transaction_id,
      merchant_name: "merchant-name",
      agent_number: agentNumber,
      customer_number: user_info.phoneNumber,
      customer_id:user_info._id,
    };
  
    try {
      toast.loading("Processing deposit...");
  
      // Send the POST request to create a new deposit using axios
      const response = await axios.post(`${base_url}/user/create-deposit`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      toast.dismiss();
  
      if (response.data.success) {
        toast.success("Deposit created successfully!");
        console.log("Deposit created successfully:", response.data.deposit);
        // Optionally, redirect the user or update the UI
      } else {
        toast.error(response.data.message);
        console.error("Error creating deposit:", response.data.message);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("An error occurred while creating the deposit.");
      console.error("Error:", error);
    }
  };
  const { fetchDepositById, depositData, loading, error,fetchUserInfo,user } = useContext(GameContext);

  useEffect(() => {
    fetchDepositById();
  }, []);
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
              <p className="text-white text-base font-medium">Balance</p>
            </div>
            <div className="mt-2 text-white flex items-center gap-1">
              <span>
                <TbCurrencyTaka size={28} />
              </span>
              <p className="text-xl font-bold">{user.balance?.toFixed(0,2)}</p>
            </div>
          </div>
        </div>
 {/* Payment Methods */}
 <div className="grid grid-cols-3 gap-4">
        {paymentMethods.map((payment, index) => (
          <div
            key={index}
            className={`px-2 py-4  duration-300  cursor-pointer text-center rounded-md ${
              activePayment === payment.name ? "bg-red text-white" : "bg-white text-black hover:bg-red hover:text-white"
            }`}
            onClick={() => setActivePayment(payment.name)}
          >
            <img className="w-8 m-auto" src={payment.image} alt={payment.name} />
            <p className="text-sm font-normal">{payment.name}</p>
          </div>
        ))}
      </div>

      {/* Channel Options */}
      <div className="bg-white p-4 rounded-md space-y-4">
        <div className="flex items-center gap-1 mb-4">
          <MdFileCopy size={24} className="text-red" />
          <p className="text-lg sm:text-xl font-semibold text-black">Select Channel</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {channels.map((channel, index) => (
            <div
              key={index}
              className={`px-2 py-4 text-base font-normal cursor-pointer duration-300 rounded-md ${
                activeChannel === channel.name ? "bg-red text-white" : "bg-white hover:bg-red hover:text-white"
              }`}
              onClick={() => setActiveChannel(channel.name)}
            >
              <p>{channel.name}</p>
              <p>{channel.balance}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-4 rounded-md space-y-4">
      <div className="flex items-center gap-1 mb-4">
        <MdFileCopy size={24} className="text-red" />
        <p className="text-lg sm:text-xl font-semibold text-black">
          Deposit Amount
        </p>
      </div>
      <div className="bg-white  rounded-md space-y-4">
      <p className="text-[14px] font-semibold text-black">
                Agent Number
              </p>
  
            <div className="relative">
              <input
                type="text"
                value={agentNumber}
                className="bg-[whitesmoke] rounded-[5px]  py-2  px-[5px] w-full outline-none"
              />
              <button
                onClick={handleAgentCopy}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {copySuccess ? (
                  <span className="text-green-500">✔</span>
                ) : (
                  <MdOutlineContentCopy size={20} />
                )}
              </button>
            </div>
          </div>
  
          {/* Payer Number field */}
          <div className="bg-white rounded-md space-y-4">
          <p className="text-[14px] font-semibold text-black">
                Account Number
              </p>
  
            <input
              type="text"
              value={payerNumber}
              onChange={(e) => setPayerNumber(e.target.value)}
              className="bg-[whitesmoke] rounded-[5px]  py-2  px-[5px] w-full outline-none"
              placeholder="Enter Your Number"
            />
          </div>
              {/* Payer Number field */}
              <div className="bg-white rounded-md space-y-4">
          <p className="text-[14px] font-semibold text-black">
                Transaction ID
              </p>
  
            <input
              type="text"
              value={transaction_id}
              onChange={(e) => set_transaction_id(e.target.value)}
              className="bg-[whitesmoke] rounded-[5px]  py-2  px-[5px] w-full  outline-none"
              placeholder="Transaction ID"
            />
          </div>
      <div>
        <div className="grid grid-cols-3 gap-3 text-red">
          {[200, 500, 1000, 1500, 2000, 2500].map((num, index) => (
            <div
              key={index}
              className={`p-1 text-base text-center font-semibold border border-slate-300 rounded-lg cursor-pointer 
                ${selectedAmount === num ? "bg-red border-blue-500 text-white" : ""}`} // Active background
              onClick={() => handleClick(num)} // Update inputValue when clicked
            >
              {num}
            </div>
          ))}
        </div>

        {/* Custom Amount Input Field */}
        <div className="relative mt-3">
          {/* Taka Icon (left side) */}
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <TbCurrencyTaka />
          </span>

          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange} // Handle custom amount change
            placeholder="Enter custom amount"
            className="bg-backgroundWhite py-1.5 px-10 w-full rounded-lg outline-none"
          />

          {/* Close Icon (right side) */}
          {inputValue && (
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={handleClear} // Clear the input field
            >
              <FaTimes />
            </span>
          )}
        </div>
      </div>

      <button  className="p-1.5 text-base font-medium text-gray bg-slate-300 w-full rounded-full"  onClick={handleSubmit}>
        Deposit
      </button>
    </div>
        <div className="flex items-center gap-1 mb-4">
          <ImBook size={24} className="text-red" />
          <p className="text-lg sm:text-xl font-semibold text-black">
            Recharge instructions
          </p>
        </div>

        <div className="text-gray text-sm font-normal bg-white p-4 rounded-md border border-indigo-200 space-y-2.5">
          <p>
            If the transfer time is up, please fill out the deposit form again.
          </p>
          <p>
            The transfer amount must match the order you created, otherwise the
            money cannot be credited successfully.
          </p>
          <p>
            If you transfer the wrong amount, our company will not be
            responsible for the lost amount!
          </p>
          <p>
            Note: do not cancel the deposit order after the money has been
            transferred.
          </p>
        </div>

        <div className="bg-white p-4 rounded-md">
      <div className="flex items-center gap-1 mb-4">
        <MdFileCopy size={28} className="text-red" />
        <p className="text-lg sm:text-xl font-semibold text-black">
          Deposit History
        </p>
      </div>

      {loading ? (
        <p className="text-center">Loading deposit details...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : depositData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border border-[#d1d8e0] text-left">
            <thead>
              <tr className="bg-gray-100 text-[13px] text-nowrap">
                <th className="p-2 border border-[#d1d8e0] ">Payment Method</th>
                <th className="p-2 border border-[#d1d8e0] ">Deposit Amount</th>
                <th className="p-2 border border-[#d1d8e0] ">User Wallet</th>
                <th className="p-2 border border-[#d1d8e0] ">Transaction ID</th>
                <th className="p-2 border border-[#d1d8e0] ">Status</th>
                <th className="p-2 border border-[#d1d8e0] ">Order ID</th>
                <th className="p-2 border border-[#d1d8e0] ">Created At</th>
              </tr>
            </thead>
            <tbody>
              {
                depositData.map((data)=>{
                  return(
                    <tr className="hover:bg-gray-50 text-[13px] text-nowrap">
                    <td className="p-2 border border-[#d1d8e0] ">{data.paymentMethod}</td>
                    <td className="p-2 border border-[#d1d8e0] ">{data.depositAmount}</td>
                    <td className="p-2 border border-[#d1d8e0] ">{data.userWalletNumber}</td>
                    <td className="p-2 border border-[#d1d8e0] ">{data.transactionId}</td>
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

export default DepositHistory;
