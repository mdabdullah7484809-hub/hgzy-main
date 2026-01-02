import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
// import Ewallet from "../Components/EwalletMethod/Ewallet";
import { useState } from "react";
import EwalletForms from "../Components/EwalletMethod/EwalletForms";

const EwalletMethod = () => {
  const [paymentType, setPaymentType] = useState("");
  const [fullName, setFullName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      PaymentType: paymentType,
      FullName: fullName,
      AccountNumber: accountNumber,
    });
  };
  const navigate = useNavigate();
  return (
    <div className="bg-sideBg min-h-screen">
      <div className="w-full max-w-[480px] mx-auto bg-backgroundWhite min-h-screen">
        <div className="flex bg-white  py-2 text-black  items-center">
          <span onClick={() => navigate(-1)}>
            {" "}
            {/* Navigate to previous page */}
            <FaAngleLeft className="w-6 h-6" />
          </span>
          <span className="mx-auto text-xl ">E-WalletPayment method</span>
        </div>

        

        <div className="w-full max-w-[480px] fixed text-center py-2 font-medium bg-gray bottom-0">
          <button
            onClick={handleSubmit}
            
          >
            Save
          </button>
        </div>
        <div className="">
          <EwalletForms
            setPaymentType={setPaymentType}
            handleSubmit={handleSubmit}
            setIsModalOpen={setIsModalOpen}
            paymentType={paymentType}
            fullName={fullName}
            setFullName={setFullName}
            accountNumber={accountNumber}
            setAccountNumber={setAccountNumber}
            isModalOpen={isModalOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default EwalletMethod;
