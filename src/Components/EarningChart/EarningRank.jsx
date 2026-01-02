import earningImage from "../../assets/EarningImage.png";
import no1Image from "../../assets/no1.png";
import no2Image from "../../assets/no2.png";
import no3Image from "../../assets/no3.png";
import crown1 from "../../assets/crown1-3912fd85.png";
import crown2 from "../../assets/crown2-c8aced52.png";
import crown3 from "../../assets/crown3-2ca02146.png";

const EarningRank = ({ userData }) => {
  const noImages = [no1Image, no2Image, no3Image];
  const crownImages = [crown1, crown2, crown3];
  const topThree = userData.slice(0, 3); // প্রথম ৩ জন ইউজার নেয়া

  // পজিশন সেট করার জন্য অবজেক্ট
  const positions = [
    {
      top: "-top-20",
      left: "left-1/2 transform -translate-x-1/2",
      border: "border-green-500",
      size: "w-20 h-20",
      rankBottom: "-bottom-5",
    }, // Rank 1 (মাঝখানে)
    {
      top: "-top-10",
      left: "left-5",
      border: "border-yellow-500",
      size: "w-16 h-16",
      rankBottom: "-bottom-4",
    }, // Rank 2 (বামে)
    {
      top: "-top-10",
      right: "right-5",
      border: "border-blue-500",
      size: "w-16 h-16",
      rankBottom: "-bottom-4",
    }, // Rank 3 (ডানে)
  ];

  return (
    <div className="relative mt-24 flex justify-center items-center w-full h-full ">
      <img src={earningImage} alt="Background" className="w-full   object-cover" />

      {/* Dynamic Image Rendering */}
      {topThree.map((user, index) => (
        <div
          key={user.rank}
          className={`absolute ${positions[index].top} ${positions[index].left || positions[index].right}`}
        >
          {/* Crown Badge (Top of Image) */}
          <img
            src={crownImages[index]}
            alt={`Crown ${user.rank}`}
            className={`absolute left-0 -top-6 w-12 h-12`}
          />

          {/* User Image */}
          <img
            src={user.image}
            alt={user.username}
            className={`${positions[index].size} rounded-full border-4 ${positions[index].border}`}
          />

          {/* Rank Badge (Bottom of Image) */}
          <img
            src={noImages[index]}
            alt={`Rank ${user.rank}`}
            className={`absolute ${positions[index].rankBottom} left-1/2 transform -translate-x-1/2`}
          />

          {/* User Name & Amount */}
          <div className={`absolute  ${index===0?"translate-y-full":"translate-y-1/2 "} ${index===1?'pr-3 md:pr-0':""} ${index===2?"pl-3 md:pl-0":""} left-1/2 -translate-x-1/2 text-center py-1 md:py-2 text-white  rounded-md `}>
            <h2 className="text-xs font-bold mb-1 md:mb-3">{user.username}</h2>
            <p className="text-xs md:text-sm p-1 rounded-full bg-gray">${user.amount.toFixed(2)}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default EarningRank;
