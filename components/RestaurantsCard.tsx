import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const RestaurantsCard = () => {
  const Card = ({ idx }: any) => {
    return (
      <div className="drop-shadow-xl rounded-xl bg-white w-60">
        <img
          className="object-cover rounded-xl w-60 h-60"
          src={`https://source.unsplash.com/collection/${idx}/200x200`}
        />
        <div className="mt-2 ">
          <div className="font-bold text-base">The Test Kitchen</div>
          <div className=" mt-1">{`coffee & tea . street food`}</div>
          <div className="flex items-center">
            <img src="img/Location.png" />
            <div className="text-2xs text-secondary ml-1 mt-1">
              Tokyo, Japan
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container ">
      <Swiper
        slidesPerView={1.4}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Card idx={idx} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RestaurantsCard;
