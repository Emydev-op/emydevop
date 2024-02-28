"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ProjectSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    className: "bg-red-600",
    dotsClass: "bg-red-600",
    fade: true,
    
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="w-[280px] h-[228px] bg-gray-900">ProjectSlider1</div>
        <div className="w-[280px] h-[228px] bg-gray-900">ProjectSlider2</div>
        <div className="w-[280px] h-[228px] bg-gray-900">ProjectSlider3</div>
        <div className="w-[280px] h-[228px] bg-gray-900">ProjectSlider4</div>
        <div className="w-[280px] h-[228px] bg-gray-900">ProjectSlider5</div>
      </Slider>
    </div>
  );
}
