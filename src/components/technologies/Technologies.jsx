// import React from "react";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";


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
          <FaReact  />
          <p>React</p>
        </SwiperSlide>
        <SwiperSlide>
          <IoLogoCss3 />
          <p>CSS</p>
        </SwiperSlide>
        <SwiperSlide>
          <FaHtml5  />
          <p>HTML</p>
        </SwiperSlide>
        <SwiperSlide>
          <IoLogoJavascript />
          <p>JavaScript</p>
        </SwiperSlide>
        <SwiperSlide>
          <BsFillBootstrapFill  />
          <p>Bootstrap</p>
        </SwiperSlide>
        <SwiperSlide>
          <SiMongodb />
          <p>MongoDB</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Technologies;
