import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const CategoriesCard = () => {
  const Card = () => {
    return (
      <div className="rounded-xl py-3 px-3 flex bg-white w-fit">
        <div className="bg-primary mr-2 rounded flex items-center justify-center w-9 h-9">
          <img src="img/mountain_icon.png" />
        </div>
        <div>
          <div className="text-xs">Food</div>
          <div className="text-2xs text-secondary">Place</div>
        </div>
      </div>
    );
  };
  return (
    <div className="container ">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value, idx) => {
          return (
            <SwiperSlide key={idx} className="drop-shadow-xl ">
              <Card />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoriesCard;
