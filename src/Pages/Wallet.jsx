import BottomNavigationBar from "../Components/BottomNavigationBar/BottomNavigationBar";
import WalletBalance from "../Components/Wallet/WalletBalance";
import WalletTop from "../Components/Wallet/WalletTop";

const Wallet = () => {
  return (
    <div className="bg-sideBg min-h-screen">
      <div className="w-full max-w-[480px] mx-auto bg-backgroundWhite">
        <WalletTop />
        <WalletBalance />
        <BottomNavigationBar />
      </div>
    </div>
  );
};

export default Wallet;
