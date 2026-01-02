import BottomNavigationBar from "../Components/BottomNavigationBar/BottomNavigationBar";
import PromotionMainPart from "../Components/Promotion/PromotionMainPart";
import PromotionTop from "../Components/Promotion/PromotionTop";

const Promotion = () => {
  return (
    <div className="bg-sideBg min-h-screen">
      <div className="w-full max-w-[480px] mx-auto bg-backgroundWhite">
        <PromotionTop />
        <PromotionMainPart />
        <BottomNavigationBar />
      </div>
    </div>
  );
};

export default Promotion;
