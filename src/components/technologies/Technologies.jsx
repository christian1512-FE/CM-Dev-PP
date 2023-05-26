// import React from "react";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { BsFillBootstrapFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./technologies.css";

const Technologies = () => {
  const swiperParams = {
    spaceBetween: 10,
    slidesPerView: 5,
    direction: "horizontal",
    loop: true,
  };

  return (
    <div className="technologies background-color" id="about">
      <Swiper {...swiperParams}>
        <SwiperSlide>
          <FaReact size={64} />
          <p>React</p>
        </SwiperSlide>
        <SwiperSlide>
          <IoLogoCss3 size={64} />
          <p>CSS</p>
        </SwiperSlide>
        <SwiperSlide>
          <FaHtml5 size={64} />
          <p>HTML</p>
        </SwiperSlide>
        <SwiperSlide>
          <IoLogoJavascript size={64} />
          <p>JavaScript</p>
        </SwiperSlide>
        <SwiperSlide>
          <BsFillBootstrapFill size={64} />
          <p>Bootstrap</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Technologies;
