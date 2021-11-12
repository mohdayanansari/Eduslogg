import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// eslint-disable-next-line
import "swiper/css/bundle";
// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

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

  //   console.log(cardData);

  return (
    <div className="relative w-full mb-8 overflow-hidden">
      <h1 className="mb-20 text-2xl font-bold text-center text-black uppercase text-opacity-70 md:text-4xl">
        Trending
      </h1>
      <Swiper effect={"cards"} grabCursor={true} className=" mySwiper">
        {cardData.map((item, index) => {
          return (
            <>
              <SwiperSlide>
                <img src={item.profileURL} alt="card" />
                <div>
                  <h1 className="text-2xl font-bold text-white md:text-4xl">
                    {item.name}
                  </h1>
                  <p className="text-base font-normal text-white text-opacity-70">
                    {item.location}
                  </p>
                  <p className="mt-5 text-xl font-light ">{item.description}</p>
                </div>
              </SwiperSlide>
            </>
          );
        })}
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
