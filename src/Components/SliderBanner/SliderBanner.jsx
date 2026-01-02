import React,{useState,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import axios from "axios";
const SliderBanner = () => {
  const slides = [
    {
      id: 1,
      img: "https://ossimg.crhhh.com/bdtgame/banner/Banner_20240224202317c3iq.png",
    },
    {
      id: 2,
      img: "https://ossimg.crhhh.com/bdtgame/banner/Banner_20240302190750hgfc.png",
    },
    {
      id: 3,
      img: "https://ossimg.crhhh.com/bdtgame/banner/Banner_202402242120567r6x.png",
    },
    {
      id: 4,
      img: "https://ossimg.crhhh.com/bdtgame/banner/Banner_202306171819486mih.jpg",
    },
    {
      id: 4,
      img: "https://ossimg.crhhh.com/bdtgame/banner/Banner_20240224212449xcqb.png",
    },
  ];
  const [banners, setBanners] = useState([]);

  // Fetch banners from API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        console.log("hello")
        const response = await axios.get("https://wingobd.onrender.com/admin/banners"); // Update with your API endpoint
        setBanners(response.data.filenames || []); // Set filenames as banners
        console.log(response)
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);
  return (
    <div className="px-2.5 sm:px-4 w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
      >
        {banners.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={`https://wingobd.onrender.com/images/${slide}`}
              alt={`Slide ${slide.id}`}
              className="w-full h-44 sm:h-48 object-fill rounded-xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderBanner;
