import { useContext,useState,useEffect} from "react";
import EarningChart from "../Components/EarningChart/EarningChart";
import EarningRank from "../Components/EarningChart/EarningRank";
import HomeTabs from "../Components/HomeTabs/HomeTabs";
import Marquee from "../Components/Marquee";
import SliderBanner from "../Components/SliderBanner/SliderBanner";
import WinningInformation from "../Components/WinningInformation/WinningInformation";
import { GameContext } from "../context/GameContext";
import splash_img from "../assets/start.png"
import logo from "../assets/h5setting_202402261158175271.png"
const winners = [
  {
    name: "BOS*** YL",
    profilePic: "https://hgzy.org/assets/png/7-00479cfa.png",
    gameImg:
      "https://ossimg.crhhh.com/bdtgame/lotterycategory/lotterycategory_20230725010909y1nq.png",
    amount: 16.0,
  },
  {
    name: "ALI*** VAI",
    profilePic: "https://i.pravatar.cc/100?img=2",
    gameImg:
      "https://ossimg.crhhh.com/bdtgame/lotterycategory/lotterycategory_20230725010909y1nq.png",
    amount: 120.5,
  },
  {
    name: "SAF*** BOY",
    profilePic: "https://i.pravatar.cc/100?img=3",
    gameImg:
      "https://ossimg.crhhh.com/bdtgame/lotterycategory/lotterycategory_20230725010909y1nq.png",
    amount: 75.25,
  },
  {
    name: "BOS*** YL",
    profilePic: "https://hgzy.org/assets/png/7-00479cfa.png",
    gameImg:
      "https://ossimg.crhhh.com/bdtgame/lotterycategory/lotterycategory_20230725010909y1nq.png",
    amount: 160.1,
  },
];

// Static Data Example
const userData = [
  {
    rank: 1,
    image: "https://hgzy.org/assets/png/4-12a0d0c5.png",
    username: "DS******BY",
    amount: 1303640768.36,
  },
  {
    rank: 2,
    image: "https://hgzy.org/assets/png/7-00479cfa.png",
    username: "BOS*** YL",
    amount: 478032240.0,
  },
  {
    rank: 3,
    image: "https://hgzy.org/assets/png/5-ab77b716.png",
    username: "M***vai",
    amount: 378032240.0,
  },
  {
    rank: 4,
    image: "https://hgzy.org/assets/png/1-a6662edb.png",
    username: "Bra***ner",
    amount: 878032240.0,
  },
  {
    rank: 5,
    image: "https://hgzy.org/assets/png/16-cf8e1441.png",
    username: "SHA***DIN",
    amount: 178032240.0,
  },
];
const home = () => {
  const {all_games}=useContext(GameContext);
// ----------------loading-screne---------------------
const [isLoading, setIsLoading] = useState(true);
const [showPopup, setShowPopup] = useState(false);

const handleConfirm = () => {
  localStorage.setItem("announcementConfirmed", "true");
  setShowPopup(false);
};
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center    h-[100vh]  z-[1000]">
      <div className="bg-gradient-to-t from-neutral-800 to-indigo-600 w-full flex justify-center items-center flex-col gap-[20px] max-w-[480px] mx-auto min-h-screen">

      <img
          src={splash_img}
          alt="Loading..."
          className="w-full max-w-[400px] mx-auto"
        />
        <h1 className="text-[25px] font-[600] text-white uppercase leading-[20px]">Welcome to wingobd</h1>
        <h1 className=" text-white font-[600] text-[22px]">www.wingobd.com</h1>
      </div>
       
      </div>
    );
  }

  return (
    <div className="bg-backgroundWhite ">
      <SliderBanner />
{/* Marquee */}
<Marquee/>
      {/* HomeTabs */}
      <HomeTabs />
   {/* Popup Announcement */}
   {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md text-center">
            <h2 className="bg-[#FC6B66] text-white text-lg font-bold py-2 rounded-t">
              Announcement
            </h2>
            <p className="text-gray-800 my-2">
              Dear Valuable Member, <br />
              Be part of our HGZY to get updated with spectacular events, good
              news, and various announcements. Thank you for supporting HGZY all
              the way and keep spreading #HGZY.
            </p>
            <p className="text-black font-bold">
              Our new and upgraded VIP GOLD REWARD for the month of 01 FEBRUARY
              2025 - 31 MARCH 2025. Get a chance to win GOLD by inviting friends
              within 2 months. Click the link below for more information.
            </p>
          <div className="p-[10px]">
          <button
              onClick={handleConfirm}
              className="px-[20px] mt-4 py-2 bg-[#FC6B66] text-white font-bold rounded-lg"
            >
              Confirm
            </button>
          </div>
          </div>
        </div>
      )}
      {/* Winning Information */}
      <div className="px-2.5 sm:px-4 space-y-2">
        <h2 className="pl-1 text-lg font-medium border-l-2 border-red">
          Winning information
        </h2>
        {winners.map((winner, index) => (
          <WinningInformation key={index} winner={winner} />
        ))}
      </div>

      {/* earning chart */}
      <div className="px-2.5 sm:px-4 space-y-2 pb-20">
        
        <h2 className="pl-1  text-lg font-medium border-l-2 border-red">
          Today{"'"}s earnings chart
        </h2>
        <div className="">

        
        <EarningRank userData={userData}/>
        </div>
        {userData.map((user, index) => (
          <EarningChart key={index} {...user} />
        ))}
      </div>
    </div>
  );
};

export default home;
