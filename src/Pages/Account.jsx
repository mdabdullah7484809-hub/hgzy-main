
import MainAccount from "../Components/Account/MainAccount";
import BottomNavigationBar from "../Components/BottomNavigationBar/BottomNavigationBar";


const Account = () => {
    
    return (
        <div className="bg-sideBg min-h-screen ">
              <div className="w-full max-w-[480px] mx-auto bg-backgroundWhite">
                <MainAccount/>
                
                <BottomNavigationBar />
              </div>
            </div>
    );
};

export default Account;