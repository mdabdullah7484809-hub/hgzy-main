import { Link } from "react-router-dom";

const ActivityMenu = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="bg-red text-white">
        <div className="py-3 px-2 sm:px-4">
          <h2 className="mb-1.5 text-xl font-semibold">Activity</h2>
          <p className="text-sm font-normal">
            Please remember to follow the event page
          </p>
          <p className="text-sm font-normal">
            We will launch user feedback activities from time to time
          </p>
        </div>
      </div>

      {/* menu */}
      <div className="px-2 sm:px-4 py-4 flex justify-around gap-1">
        <Link>
          <div className="">
            <img
              className="w-12 h-12 m-auto"
              src="https://hgzy.org/assets/png/activityReward-66772619.png"
              alt=""
            />
            <p className="text-sm w-12 text-center text-text">Activity Award</p>
          </div>
        </Link>
        <Link>
          <div className="">
            <img
              className="w-12 h-12 m-auto"
              src="https://hgzy.org/assets/png/BettingRebate-17d35455.png"
              alt=""
            />
            <p className="text-sm w-12 text-center text-text">Betting rebate</p>
          </div>
        </Link>
        <Link>
          <div className="">
            <img
              className="w-12 h-12 m-auto"
              src="https://hgzy.org/assets/png/superJackpot-ecb648b4.png"
              alt=""
            />
            <p className="text-sm w-12 text-center text-text">Super Jackpot</p>
          </div>
        </Link>
        <Link>
          <div className="">
            <img
              className="w-12 h-12 m-auto"
              src="https://hgzy.org/assets/png/memberGift-a0182789.png"
              alt=""
            />
            <p className="text-sm w-12 text-center text-text">
              New member gift package
            </p>
          </div>
        </Link>
      </div>

      {/* gift */}
      <div className="px-2 sm:px-4 flex gap-3">
        <div className="w-1/2 bg-white rounded-md">
          <img
            src="https://hgzy.org/assets/png/signInBanner-33f86d3f.png"
            alt=""
          />
          <div className="p-3">
            <h2 className="text-base font-bold">Gifts</h2>
            <p className="text-sm text-text">
              Enter the redemption code to receive gift rewards
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-white">
          <img
            src="https://hgzy.org/assets/png/giftRedeem-45917887.png"
            alt=""
          />
          <div className="p-3">
            <h2 className="text-base font-bold">Attendance bonus</h2>
            <p className="text-sm text-text">
              The more consecutive days you sign in, the higher the reward will
              be.
            </p>
          </div>
        </div>
      </div>

      {/* recharge */}
      <div className="bg-backgroundWhite">
        <div className="px-2 py-3 sm:px-4">
          <Link>
            <div className="bg-white rounded-xl overflow-hidden">
              <img
                src="https://ossimg.crhhh.com/bdtgame/banner/Banner_20230602143510f1uq.png"
                alt=""
              />
              <h2 className="text-base font-bold p-3">
                💰Recharge and Get Daily Check-in Bonus💰
              </h2>
            </div>
          </Link>
        </div>
      </div>

      {/* ⭐️Member */}
      <div className="px-2 py-3 sm:px-4">
        <Link>
          <div className="bg-white rounded-xl overflow-hidden">
            <img
              className="rounded-t-xl"
              src="https://ossimg.crhhh.com/bdtgame/banner/Banner_20230602171031a2i1.png"
              alt=""
            />
            <h2 className="text-base font-bold p-3">
              ⭐️Member Activities Winning Streak⭐️
            </h2>
          </div>
        </Link>
      </div>

      {/* ⭐️Member */}
      <div className="px-2 py-3 sm:px-4">
        <Link>
          <div className="bg-white rounded-xl overflow-hidden">
            <img
              className="rounded-t-xl"
              src="https://ossimg.crhhh.com/bdtgame/banner/Banner_20240224214037dpcn.png"
              alt=""
            />
            <h2 className="text-base font-bold p-3">
              🔴 Youtube Creative Video 🔴
            </h2>
          </div>
        </Link>
      </div>

      {/* ⭐️Member */}
      <div className="px-2 py-3 sm:px-4">
        <Link>
          <div className="bg-white rounded-xl overflow-hidden">
            <img
              className="rounded-t-xl"
              src="https://ossimg.crhhh.com/bdtgame/banner/Banner_2023061718193883yp.jpg"
              alt=""
            />
            <h2 className="text-base font-bold p-3">
              ⭐️Aviator High Betting Award⭐️
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ActivityMenu;
