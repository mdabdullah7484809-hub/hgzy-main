import ActivityHeader from "../Components/Activity/ActivityHeader";
import ActivityMenu from "../Components/Activity/ActivityMenu";
import BottomNavigationBar from "../Components/BottomNavigationBar/BottomNavigationBar";

const Activity = () => {
  return (
    <div className="bg-sideBg min-h-screen">
      <div className="w-full max-w-[480px] mx-auto bg-backgroundWhite">
        <ActivityHeader />
        <ActivityMenu />
        <BottomNavigationBar />
      </div>
    </div>
  );
};

export default Activity;
