import { useContext, useEffect, useRef, useState } from "react";
import tab1 from "../../assets/gamecategory_20230725010810ntvi.png";
import tab2 from "../../assets/gamecategory_20230725010843wkhh.png";
import tab3 from "../../assets/gamecategory_20230725010848q8ha.png";
import tab4 from "../../assets/tab4.png";
import tab5 from "../../assets/tab5.png";
import tab6 from "../../assets/tab6.png";
import tab7 from "../../assets/tab7.png";
import tab8 from "../../assets/tab8.png";
import tab1Bg from '../../assets/tab1Bg.png';
import tab2Bg from '../../assets/tab1Bg.png';
import tab3Bg from '../../assets/tab1Bg.png';
import tab4Bg from '../../assets/third_bg-dfa325e7.png'
import tab7Bg from '../../assets/fish_bg-bf0b060b.png';
import tab8Bg from '../../assets/game_mini_bg-c04fcbbd.png' ;
import tab1Content1 from '../../assets/49.png';
import tab1Content2 from '../../assets/51.png';
import tab1ContentTwo1 from '../../assets/800.png';
import tab1ContentTwo2 from '../../assets/148.png';

import tab2Content1 from "../../assets/lotterycategory_20230725010909y1nq.png";
import tab4Content1 from '../../assets/vendorlogo_20230725011057w3iu.png';
import tab3Content1 from '../../assets/tab3Image1.png';
import tab3Content2 from '../../assets/tab3Image2.png';
import tab3Content3 from '../../assets/tab3Image3.png';
import tab5Content1 from '../../assets/tab5Image.png';
import tab2Content2 from "../../assets/lotterycategory2.png";

import tab7Content1 from '../../assets/1.png';
import tab7Content2 from '../../assets/119.png';
import tab8Content1 from '../../assets/902.png';
import tab8Content2 from '../../assets/900.png';
import { LanguageContext } from "../Context/LanguageContext";
 import TabsContents from "./TabsContents";
import { GameContext } from "../../context/GameContext";

const HomeTabs = () => {
    const { language } = useContext(LanguageContext);
    const [activeTab, setActiveTab] = useState(3);
    const {fetchAllGames,popular_game,plartform_game,all_games, lottery_games,
      electric_games,
      sports_games,
      casino_games,
      chesss_games,
      fish_games,
      game}=useContext(GameContext)
    useEffect(()=>{
        fetchAllGames();
    },[])
    const contentRef = useRef(null);
    const tabNames = {
        en: ["Popular", "Lottery", "Slots", "Sports", "Casino", "Rummy", "Fishing", "Original"],
        bn: ["জনপ্রিয়", "লটারি", "বৈদ্যুতিক", "স্পোর্টস", "ক্যাসিনো গেম", "দাবা", "মাছ শিকার", "গেমস"],
    };
    const tabs = [
        { id: 1, image: tab1, bgImage: tab1Bg, contentBg:popular_game, contentTwoBg:plartform_game
            
        },
        { id: 2, image: tab2, bgImage: tab2Bg ,
            ccontentBg: [tab3Content1, ]},
        { id: 3, image: tab3, bgImage: tab3Bg,contentBg:electric_games
            
         },
        { id: 4, image: tab4, bgImage: tab4Bg ,
            contents: [
                {
                    title: "CMD",
                    tittleTwo:'',
                    description: {
                        en: "| Sports\nCMD Sports",
                        bn: "| স্পোর্টস\nসিএমডিএসপোর্টস"
                    },
                    image: tab4Content1
                },
                
            ]
        },
        { id: 5, image: tab5, bgImage: tab4Bg,contents: [
            {
                title: "EVO",
                description: {
                    en: "| Casino\n Evo Casino         ",
                    bn: "| ক্যাসিনো গেম\nEVO সত্যিকারের মানুষ"
                },
                image: tab5Content1
            },
            
        ] },
        { id: 6, image: tab6, bgImage: tab4Bg },
        { id: 7, image: tab7, bgImage: tab7Bg ,contentBg:fish_games},
        { id: 8, image: tab8, bgImage: tab8Bg,contentBg:game},
    ];
    console.log(tabs[0].contentTwoBg)
    const handleTabClick = (id) => {
        setActiveTab(id);
        setTimeout(() => {
            contentRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 200);
    };
    
    return (
        <div className="md:p-5 p-3  text-xs md:text-base whitespace-nowrap ">
            {/* First 3 Tabs (Grid 3 cols with gap) */}
            <div className="grid grid-cols-3   md:gap-4  mb-4 relative">
                {tabs.slice(0, 3).map((tab, index) => (
                    <div 
                        key={tab.id} 
                        className={`p-4   w-full   cursor-pointer bg-cover bg-center relative`} 
                        style={{ backgroundImage: `url(${tab.bgImage}) ` }}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <img src={tab.image} alt={tabNames[language][index]} className="w-20 h-20    left-1/2 transform -translate-x-1/2 absolute  -top-2" />
                        <p className={`text-center ${index===2? "" : ""}  mt-14 text-white font-bold`}>{tabNames[language][index]}</p>
                    </div>
                ))}
            </div>
            
            {/* Next 3 Tabs (Flex, no gap) */}
            <div className="flex mb-4">
                {tabs.slice(3, 6).map((tab, index) => (
                    <div 
                        key={tab.id} 
                        className="md:p-4 py-4 flex-1 rounded-lg cursor-pointer  bg-cover bg-center" 
                        style={{ backgroundImage: `url(${tab.bgImage})` }}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <div className="border-r  border-white border-opacity-20">

                        
                        <img src={tab.image} alt={tabNames[language][index + 3]} className="w-16 h-16 mx-auto" />
                        <p className="text-center  mt-2 text-white font-bold">{tabNames[language][index + 3]}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Last 2 Tabs (Grid 2 cols) */}
            <div className="grid grid-cols-2 rounded-md gap-4 mb-4">
                {tabs.slice(6).map((tab, index) => (
                    <div 
                        key={tab.id} 
                        className="md:p-4 py-2  cursor-pointer bg-cover bg-center" 
                        style={{ backgroundImage: `url(${tab.bgImage})` }}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <div className="flex   md:gap-0 ">

                        
                        <img src={tab.image} alt={tabNames[language][index + 6]} className="w-16 h-16 mx-auto " />
                        <p className="text-center mx-auto  mt-8 text-white font-bold">{tabNames[language][index + 6]}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Content Section */}
            <TabsContents
             contentRef={contentRef}
             activeTab={activeTab}
             tabNames={tabNames}
             language={language}
             tabs={tabs}
             handleTabClick={handleTabClick}
             />
              
        </div>
    );
};

export default HomeTabs;