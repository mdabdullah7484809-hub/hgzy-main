import WithdrawHistory from "../Components/Withdraw/WithdrawHistory";
import WithdrawTop from "../Components/Withdraw/WithdrawTop";

const Withdraw = () => {
  return (
    <div className="bg-sideBg min-h-screen">
      <div className="w-full max-w-[480px] mx-auto bg-backgroundWhite">
        <WithdrawTop />
        <WithdrawHistory />
      </div>
    </div>
  );
};

export default Withdraw;
