"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ProjectSlider() {
  const size = useWindowSize();
  //Get the size of the scren to toggle the carousel
  // console.log(size.width, size.height);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: size.width > 1024 ? 2 : 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="w-[280px] h-[228px] bg-gray-900 border border-gray-400 rounded-lg p-4">
          <h3 className="font-semibold text-lg">Mac Stores</h3>
          <p className="h-[45%] text-sm mb-2">
            E-commerce specialized in the sale of computer games and equipments
            for seconday school children sale of computer games and equipments
          </p>
          <div className="flex gap-2 mb-2">
            <p className="text-[#82E6AB] border-2 border-[#82E6AB] font-semibold px-4 py-2 text-xs rounded-lg">
              React
            </p>
            <p className="text-[#82E6AB] border-2 border-[#82E6AB] font-semibold px-4 py-2 text-xs rounded-lg">
              Dango
            </p>
            <p className="text-[#82E6AB] border-2 border-[#82E6AB] px-4 py-2 text-xs rounded-lg">
              Postgress
            </p>
          </div>
          <button className="py-1 w-full font-semibold bg-[#25AA5C] rounded">
            View Project
          </button>
        </div>
        <div className="w-[280px] h-[228px] bg-gray-900 border border-gray-400 rounded-lg p-4">
          <h3 className="font-semibold text-lg">HFYV</h3>
          <p className="h-[45%] text-sm mb-2">
            E-commerce specialized in the sale of computer games and equipments
            for seconday school children sale of computer games and equipments
          </p>
          <div className="flex gap-2 mb-2">
            <p className="text-[#82E6AB] border-2 border-[#82E6AB] font-semibold px-4 py-2 text-xs rounded-lg">
              React
            </p>
            <p className="text-[#82E6AB] border-2 border-[#82E6AB] font-semibold px-4 py-2 text-xs rounded-lg">
              Dango
            </p>
            <p className="text-[#82E6AB] border-2 border-[#82E6AB] px-4 py-2 text-xs rounded-lg">
              Postgress
            </p>
          </div>
          <button className="py-1 w-full font-semibold bg-[#25AA5C] rounded">
            View Project
          </button>
        </div>
        <div className="w-[280px] h-[228px] bg-gray-900 border border-gray-400 rounded-lg p-4">
          <h3 className="font-semibold text-lg">E Blog</h3>
          <p className="h-[45%] text-sm mb-2">
            E-blog specialized in the sale of computer games and equipments for
            seconday school children sale of computer games and equipments
          </p>
          <div className="flex gap-2 mb-2">
            <p className="text-[#82E6AB] border-2 border-[#82E6AB] font-semibold px-4 py-2 text-xs rounded-lg">
              React
            </p>
            <p className="text-[#82E6AB] border-2 border-[#82E6AB] font-semibold px-4 py-2 text-xs rounded-lg">
              Dango
            </p>
            <p className="text-[#82E6AB] border-2 border-[#82E6AB] px-4 py-2 text-xs rounded-lg">
              Postgress
            </p>
          </div>
          <button className="py-1 w-full font-semibold bg-[#25AA5C] rounded">
            View Project
          </button>
        </div>
      </Slider>
    </div>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
