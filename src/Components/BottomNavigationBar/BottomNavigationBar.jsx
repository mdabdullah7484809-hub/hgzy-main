import { Link } from "react-router-dom";
import { Home, Activity, Wallet, User } from "lucide-react";
import { IoDiamond } from "react-icons/io5";

const BottomNavigationBar = () => {
  const user=JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      <div className="max-w-[480px] m-auto fixed bottom-0 w-full bg-white flex justify-around items-center rounded-t-2xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
        {/* Home */}
        <Link
          to="/"
          className="flex flex-col items-center text-red-500 cursor-pointer"
        >
          <Home size={24} />
          <span className="text-xs font-medium">Home</span>
        </Link>

        {/* Activity */}
        <Link
          to={user ? "/activity":"/login"}
          className="flex flex-col items-center text-gray-500"
        >
          <Activity size={24} />
          <span className="text-xs font-medium">Activity</span>
        </Link>

        {/* Center Button */}
        <div className="relative">
          <Link
           to={user ? "/promotion":"/login"}
            className="w-16 h-16 bg-red-400 text-white bg-red rounded-full flex justify-center items-center shadow-md -translate-y-6 border-4"
          >
            <IoDiamond size={28} />

            <span className="absolute text-black bottom-[-16px] left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-500">
              Promotion
            </span>
          </Link>
        </div>

        {/* Wallet */}         
           <Link to={user ? "/wallet":"/login"}  className="flex flex-col items-center text-gray-500">
          <Wallet size={24} />
          <span className="text-xs font-medium">Wallet</span>
        </Link>

        {/* Account */}
        <Link to={user ? "/account":"/login"}  className="flex flex-col items-center text-gray-500">
          <User size={24} />
          <span className="text-xs font-medium">Account</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
