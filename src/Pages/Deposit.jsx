import DepositHistory from "../Components/Deposit/DepositHistory";
import DepositTop from "../Components/Deposit/DepositTop";

const Deposit = () => {
  return (
    <div className="bg-sideBg min-h-screen">
      <div className="w-full max-w-[480px] mx-auto bg-backgroundWhite">
        <DepositTop />
        <DepositHistory />
      </div>
    </div>
  );
};

export default Deposit;
