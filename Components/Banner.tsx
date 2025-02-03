"use client";
import React, { useState } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagramSquare } from 'react-icons/fa';
import { FaArrowRightLong, FaSquareFacebook } from 'react-icons/fa6';

const Banner = () => {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <div
            className="flex items-center justify-center cursor-pointer"
            onClick={() => setIsToggled(!isToggled)}
        >
            <div className="max-w-6xl mx-auto flex relative left-[4rem]">
                {/* Left Section */}
                <div className="w-1/2 bg-[#B2CED59C] flex flex-col">
                    {!isToggled ? (
                        <>
                            <div>
                                <img src="/Basic photos/design.png" className="relative " alt="" />
                            </div>
                            <div className="flex relative right-[5rem] justify-center items-end gap-5">
                                <div className="relative top-[2.4rem]">
                                    <img src="/Basic photos/cat.png" className="h-72 " alt="" />
                                </div>
                                <div className={`flex flex-col px-3 gap-5 mt-66`}>
                                    {/* Hire Me Button with smaller width */}
                                    <button className="bg-[#5833FB] text-white py-3 px-5 flex justify-center items-center gap-2 w-[8rem]">
                                        Hire Me  <FaArrowRightLong className='' />
                                    </button>
                                    {/* Resume Button with PDF Link and larger width */}
                                    <a
                                        href="/Mahbub Alahi Munna.pdf" // Update with your actual PDF file path
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-[#5833FB] border-[0.1rem] text-[#5833FB] p-3 px-5 min-w-[10rem] text-center flex justify-center items-center gap-5"
                                    >
                                        My Resume  <FaArrowRightLong className=''/>
                                    </a>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="w-[40rem] h-[37rem] flex justify-center relative right-[7rem] items-center flex-col">
                            <img src="/Basic photos/hello.png" className="w-66" alt="" />
                            <div className="text-center max-w-sm font-bold">
                                <p className="text-2xl">It’s Mahbub Alahi Munna</p>
                                <p>
                                    I am a student at Daffodil International University, pursuing a BSc in Software Engineering. Additionally, I work as a UI/UX designer.
                                </p>
                            </div>
                            <div className={`flex justify-center item-center gap-5 mt-5`}>
                                <button className="bg-[#5833FB] text-white p-3 px-5">Hire Me</button>
                                {/* Resume Button with PDF Link */}
                                <a
                                    href="/resume.pdf" // Update with your actual PDF file path
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-[#5833FB] border-[0.1rem] text-[#5833FB] p-3 px-5 text-center"
                                >
                                    My Resume
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Section */}
                <div className="w-1/2 flex justify-center">
                    <img
                        src={isToggled ? "/Basic photos/Munna original.jpg" : "/Basic photos/Munna animated.jpg"}
                        className="w-[40rem] h-[37rem] transition-all duration-300"
                        alt=""
                    />
                    <img className="w-44 h-28 relative top-40 right-52" src="/Basic photos/Click here photo.png" alt="" />

                    <div className="flex text-2xl relative mt-4 text-white right-[21rem] gap-3">
                        <FaSquareFacebook />
                        <BsLinkedin />
                        <FaInstagramSquare />
                        <FaGithub />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
