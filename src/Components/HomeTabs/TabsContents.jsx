import { Link, useNavigate } from "react-router-dom";

const TabsContents = ({ contentRef, activeTab, tabNames, language, tabs }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleGameClick = (game) => {
    if (!user) {
      alert("Please login to play the game.");
      return;
    }
    if (!game.liveUrl && user) {
      alert("Game not available.");
      return;
    } else {
      navigate(`/games/${game._id}`);
    }
  };
  return (
    <div ref={contentRef} className="mt-10  bg-gray-200 rounded-lg">
      {activeTab ? (
        <div className="grid grid-cols-1  gap-4">
          {/* Recommendation part */}
          {tabs[activeTab - 1]?.contentTwoBg?.length > 0 && (
            <div className="  rounded-lg">
              <h3 className="text-xl border-l-2 p-1 p-1 mb-2 border-red font-bold text-black">
                {language === "en"
                  ? "Platform Recommendation"
                  : "প্ল্যাটফর্ম সুপারিশ"}
              </h3>

              <div
                className={`grid ${
                  activeTab === 3 ? "grid-cols-3 gap-2" : "grid-cols-3"
                }`}
              >
                {tabs[activeTab - 1].contentTwoBg.map((imgSrc, index) => (
                  <img
                    key={index}
                    onClick={() => handleGameClick(imgSrc)}
                    src={`https://wingobd.onrender.com/images/${imgSrc.imagePath}`}
                    alt={`Content ${index + 1}`}
                    className={`${
                      activeTab === 3
                        ? "bg-red rounded-xl h-[90%]"
                        : "border-red border rounded-md w-[90%] "
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* main part */}
          <div className="">
            <h3 className="text-xl border-l-2 p-1 mb-2 border-red font-bold text-black">
              {tabNames[language][activeTab - 1]}
            </h3>

            {[1, 3, 7, 8].includes(activeTab) &&
              tabs[activeTab - 1]?.contentBg.length > 0 && (
                <div
                  className={`grid ${
                    activeTab === 3 ? "grid-cols-3 gap-2 " : "grid-cols-3"
                  }`}
                >
                  {tabs[activeTab - 1].contentBg.map((imgSrc, index) => (
                    <img
                      key={index}
                      onClick={() => handleGameClick(imgSrc)}
                      src={`https://wingobd.onrender.com/images/${imgSrc.imagePath}`}
                      alt={`${imgSrc}`}
                      className={` ${
                        activeTab === 3
                          ? "bg-red rounded-xl h-[90%]"
                          : "border-red border rounded-md w-[90%] h-[70%]"
                      }`}
                    />
                  ))}
                </div>
              )}
            {[2, 4, 5, 6].includes(activeTab) &&
              tabs[activeTab - 1]?.contents && (
                <div className="flex flex-col gap-2">
                  {tabs[activeTab - 1]?.contents.map((content, index) => (
                    <div
                      key={index}
                      className="flex bg-red px-4 py-2 text-white rounded-2xl flex-row justify-between"
                    >
                      <div>
                        <h3 className="text-xl">{content.title}</h3>
                        {content.description?.[language] ? (
                          <p className="text-sm whitespace-pre-wrap py-2">
                            {content.description[language]}
                          </p>
                        ) : (
                          <p>null</p> // Show "null" if no description
                        )}
                      </div>
                      <img
                        src={content.image}
                        alt="Content Image"
                        className="w-24 h-24"
                      />
                    </div>
                  ))}
                </div>
              )}
          </div>

          {/* <div className="relative bg-cover bg-center p-5 rounded-lg" style={{ backgroundImage: `url(${tabs[activeTab - 1].bgImage})` }}>
                            

                            <p className="text-white">Content for {tabNames[language][activeTab - 1]}</p>

                            <img src={tabs[activeTab - 1].image} alt="" className="w-24 h-24 absolute bottom-2 right-2" />
                        </div> */}
        </div>
      ) : (
        <p className="text-lg text-gray-500">একটি ট্যাব ক্লিক করুন </p>
      )}
    </div>
  );
};

export default TabsContents;
