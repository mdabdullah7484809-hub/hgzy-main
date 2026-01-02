const WinningInformation = ({ winner }) => {
  return (
    <div className="py-1.5 px-2.5 sm:px-4 bg-white rounded-md">
      <div className="w-full flex items-center justify-between gap-2">
        <div className="w-2/5 flex items-center gap-1.5 sm:gap-1.5">
          <img
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-full"
            src={winner.profilePic}
            alt={winner.name}
          />
          <p className="text-sm sm:text-base font-medium">{winner.name}</p>
        </div>

        <div className="w-3/5 flex items-center gap-1.5 sm:gap-2">
          <img
            className="w-16 h-12 sm:w-20 sm:h-14 px-2 py-1 bg-gradient-to-b from-red to-red rounded-xl"
            src={winner.gameImg}
            alt="Game"
          />
          <div className="text-base text-center">
            <p className="font-bold">Receive ৳{winner.amount}</p>
            <p className="text-[#768096] text-[12px] font-bold">
              Winning amount
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinningInformation;
