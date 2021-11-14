import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// eslint-disable-next-line
import "swiper/css/bundle";
// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";
import { Heading } from "..";

// install Swiper modules
SwiperCore.use([EffectCards]);

const Slider = () => {
  const [cardData, setCardData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/institutes");

      const data = await res.json();
      setCardData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="relative w-full mb-8 overflow-hidden">
      <h1 className="mb-10 text-2xl font-bold text-center text-black uppercase text-opacity-70 md:text-4xl">
        Trending
      </h1>
      <div className="flex justify-center">
        <Swiper effect={"cards"} grabCursor={true} className=" mySwiper">
          {cardData.map((item, index) => {
            return (
              <>
                <SwiperSlide>
                  <div className="grid grid-cols-1 gap-2 md:gap-5 md:grid-cols-7 ">
                    <div className="h-full md:col-span-3 ">
                      <img
                        src={`http://127.0.0.1:8000${item.photo}`}
                        alt="card"
                        className="object-cover h-full rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="md:col-span-4">
                      <h1 className="text-2xl font-bold text-white md:text-4xl">
                        {item.name}
                      </h1>
                      <p className="text-base font-normal text-white text-opacity-70">
                        {item.location}
                      </p>
                      <p className="mt-5 text-xl font-light ">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
