const EarningChart = ({ rank, image, username, amount }) => {
  return (
    <div className="py-1.5 px-2.5 sm:px-4 bg-white rounded-md">
      <div className="w-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 sm:gap-5">
          <span className="text-text font-semibold">{rank}</span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <img
              className="w-12 h-12 rounded-full"
              src={image}
              alt={username}
            />
            <p className="text-base text-text font-semibold">{username}</p>
          </div>
        </div>

        <div className="px-1 w-40 text-lg font-semibold text-center rounded-full text-white bg-amountBG">
          ৳{amount.toLocaleString("en-US")}
        </div>
      </div>
    </div>
  );
};

export default EarningChart;
