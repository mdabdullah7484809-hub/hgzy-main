const PromotionHeader = ({ language, sectionsData, itemsData }) => {
  const sections = sectionsData[language];
  const items = itemsData[language];
  return (
    <div className=" relative">
      <div className="pt-4 flex text-white pb-[40%]  bg-red flex-col items-center justify-center">
        <p className="text-lg">0</p>
        <button className="rounded-full p-1 bg-white text-red">
          {language === "en"
            ? "Yesterday's Total Commission"
            : "গতকালের মোট কমিশন"}
        </button>
        <p className="text-xs">
          {language === "en"
            ? "Upgrade the level to increase commission income "
            : "কমিশন আয় বাড়াতে লেভেল আপগ্রেড করুন"}
        </p>
      </div>
      <div className="flex absolute text-xs md:text-sm top-28 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl justify-center space-x-1  rounded-lg">
        {sections.map((section, index) => (
          <div
            key={index}
            className="cursor-pointer whitespace-nowrap   shadow-md bg-white"
          >
            <h3 className="bg-red text-white text-center p-2 ">{section}</h3>
            <div className="space-y-2 mt-2 pb-2 px-4 md:px-12">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    idx === 3 ? "whitespace-normal " : ""
                  } items-center`}
                >
                  <p className="font-semibold">0</p>
                  <p className="text-gray-700 text-center">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionHeader;
