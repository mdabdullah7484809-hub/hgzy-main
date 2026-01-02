import { FaWallet } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const EwalletForms = ({
  handleSubmit,
  fullName,
  setFullName,
  accountNumber,
  setAccountNumber,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(""); // Final selected payment type
  const [tempPayment, setTempPayment] = useState("Rocket"); // Temporary selection inside modal

  return (
    <div className="max-w-md mx-auto px-3 lg:px-0 ">
      <div className="flex gap-2 items-center font-bold text-xl">
        <FaWallet className="text-blue-700 text-2xl" />
        E-Wallet
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 py-4">
        {/* Payment Type Field */}
        <div>
          <label className="block pb-2">Choose Type</label>
          <div
            className="flex items-center justify-between cursor-pointer bg-white p-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            <span className={selectedPayment ? "" : "text-gray"}>
      {selectedPayment || "Please Choose"}
    </span>
            <span className="text-gray">
              <FaAngleDown />
            </span>
          </div>
        </div>

        {/* Full Name Field */}
        <div>
          <label className="block pb-2">Full Name</label>
          <input
            type="text"
            placeholder="Please Enter Full Name"
            className="bg-white w-full p-2 rounded"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Account Number Field */}
        <div>
          <label className="block pb-2">Account Number</label>
          <input
            type="text"
            placeholder="Please Enter Account Number"
            className="bg-white w-full p-2 rounded"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
      </form>

      {/* Modal for Payment Selection */}
      {isModalOpen && (
        <div onClick={() => {
            setIsModalOpen(false);
          }} className="fixed inset-0 flex items-end w-full justify-center bg-black bg-opacity-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white  shadow-lg w-full h-[50%] max-w-[480px] mx-auto">
            {/* Confirm & Cancel Buttons */}
            <div className="flex justify-between px-6 py-2 ">
             
              <button
                className=" "
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                className=" text-red "
                onClick={() => {
                  setSelectedPayment(tempPayment); // Confirmed payment type
                  setIsModalOpen(false);
                }}
                disabled={!tempPayment} // Disable if no option is selected
              >
                Confirm
              </button>
            </div>
            

            {/* Scrollable List with Hidden Scrollbar */}
            <div className="max-h-56 overflow-y-scroll no-scrollbar space-y-2">
              {[
                "bKash",
                "Rocket",
                "Nogod",
                "Upay",
                "SureCash",
                "MyCash",
                "OK Wallet",
                "Tap",
                "Paytm",
              ].map((method) => (
                <button
                  key={method}
                  className={`block w-full text-center p-2 transition-all duration-300 
                  ${
                    tempPayment === method
                      ? "opacity-100 text-black font-bold text-lg"
                      : "opacity-50 text-gray-500"
                  }`}
                  onClick={() => setTempPayment(method)}
                >
                  {method}
                </button>
              ))}
            </div>

            
          </div>
        </div>
      )}
    </div>
  );
};

export default EwalletForms;
