"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import DraggableLink from "./DraggableLink"; // Adjust the path as needed

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const [isMoving, setIsMoving] = useState(false);

  const settings = {
    dots: false, // Removed navigation dots
    infinite: false, // Set to false to stop the slider at the first and last slide
    speed: 500,
    arrows: false, // No arrows for navigation
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    slidesToShow: 3.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    touchThreshold: 100,
    beforeChange: () => setIsMoving(true),
    afterChange: () => setIsMoving(false),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full  py-20 md:py-40 relative">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-4xl mt-3 mb-7 relative left-12 font-bold">My Projects</p>
        <div className="relative">
          {/* Always visible Left Fade Effect */}
          {/* <div className="absolute left-0 top-7 h-56 w-20 bg-gradient-to-r from-[#C3F4E9] to-transparent z-10 pointer-events-none"></div> */}

          {/* Always visible Right Fade Effect */}
          {/* <div className="absolute right-0 top-7 h-56 w-20 bg-gradient-to-l from-[#C3F4E9] to-transparent z-10 pointer-events-none"></div> */}

          <Slider {...settings}>
            {/* Figma Slide */}
            <div className="px-3 py-10 overflow-hidden">
              <DraggableLink
                href="/figma"
                className="block transition-transform duration-300 transform "
              >
                <img
                  src="/Projects/Figma/Figma main logo.png"
                  alt="Figma"
                  className="h-48 w-48 md:h-56 md:w-56 -mt-3 rounded-4xl object-cover mx-auto transition-transform duration-300 transform hover:scale-110 hover:object-cover"
                />
              </DraggableLink>
            </div>

            {/* Canva Slide */}
            <div className="px-3 py-10 overflow-hidden">
              <DraggableLink
                href="/canva"
                className="block transition-transform duration-300 transform hover:scale-110"
              >
                <img
                  src="/Projects/Canva/Canva main logo.png"
                  alt="Canva"
                  className="h-40 w-40 md:h-48 md:w-48 rounded-4xl object-cover mx-auto transition-transform duration-300 transform hover:scale-110 hover:object-cover"
                />
              </DraggableLink>
            </div>

            {/* NASA Space App Slide */}
            <div className="px-3 py-10 overflow-hidden">
              <DraggableLink
                href="/nasa-space-competition"
                className="block transition-transform duration-300 transform hover:scale-110"
              >
                <img
                  src="/Projects/Nasa space app/Nasa space main logo.jpeg"
                  alt="NASA Space App"
                  className="h-40 w-40 md:h-48 md:w-48 rounded-4xl object-cover mx-auto transition-transform duration-300 transform hover:scale-110 hover:object-cover"
                />
              </DraggableLink>
            </div>

            {/* NASA Space App Slide */}
            <div className="px-3 py-10 overflow-hidden">
              <DraggableLink
                href="/c-capstone-project"
                className="block transition-transform duration-300 transform hover:scale-110"
              >
                <img
                  src="/Basic photos/c.png"
                  alt="C Capstone Project"
                  className="h-40 w-40 md:h-48 md:w-48 rounded-4xl object-cover mx-auto transition-transform duration-300 transform hover:scale-110 hover:object-cover"
                />
              </DraggableLink>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Skills;
