import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({data}) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      className="swiper-wrapper"
      effect={"cards"}
      grabCursor={true}
      pagination={{
        el: ".rbt-swiper-pagination",
        clickable: true,
      }}
    >
      {data?.images.map((item, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <div className="rbt-hover">
            <div className="rbt-card-img">
              <img src={item} alt="Card image" />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div
        className="rbt-swiper-pagination"
        style={{ bottom: "-40px", display: "block" }}
      ></div>
    </Swiper>
  );
};

export default Slider;
