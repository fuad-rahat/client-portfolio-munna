"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagramSquare } from 'react-icons/fa';
import { FaArrowRightLong, FaSquareFacebook } from 'react-icons/fa6';

const Banner = () => {
    const [isToggled, setIsToggled] = useState(false);

    return (
      <div className='max-sm:bg-[#0070B5]'>
         <div className="flex items-center justify-center">
            {/* Removed max-w-6xl and relative positioning for mobile */}
            <div className="w-full md:max-w-6xl md:mx-auto flex md:relative md:left-[4rem]">
                {/* Left Section */}
                <div className="md:w-1/2 md:bg-[#B2CED59C] flex flex-col">
                    {!isToggled ? (
                        <>
                            <div className='hidden md:block'>
                                <img src="/Basic photos/design.png" className="relative" alt="" />
                            </div>
                            <div className="flex relative md:right-[5rem] justify-center items-end gap-5">
                                <div className="relative hidden md:block top-[2.4rem]">
                                    <img src="/Basic photos/cat.png" className="h-72" alt="" />
                                </div>
                                <div className={`lg:flex hidden md:block flex-col px-3 gap-5 mt-66`}>
                                    <Link href="https://www.linkedin.com/in/mahbub-alahi-munna-87a56a283/">
                                    <button className="bg-[#5833FB] cursor-pointer text-white py-3 px-5 flex justify-center items-center gap-2 w-[8rem]">
                                        Hire Me  <FaArrowRightLong className='' />
                                    </button>
                                    </Link>
                                    <a
                                        href="/Mahbub Alahi Munna.pdf"
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
                        <div className="w-[40rem] hidden md:block h-[37rem] lg:flex justify-center relative right-[7rem] items-center flex-col">
                            <img src="/Basic photos/hello.png" className="w-66" alt="" />
                            <div className="text-center max-w-sm font-bold">
                                <p className="text-2xl">It's Mahbub Alahi Munna</p>
                                <p>
                                    I am a student at Daffodil International University, pursuing a BSc in Software Engineering. Additionally, I work as a UI/UX designer.
                                </p>
                            </div>
                            <div className={`flex justify-center item-center gap-5 mt-5`}>
                                <Link href='https://www.linkedin.com/in/mahbub-alahi-munna-87a56a283/'>
                                <button className="bg-[#5833FB] text-white cursor-pointer py-3 px-5 flex justify-center items-center gap-2 w-[8rem]">
                                    Hire Me  <FaArrowRightLong className='' />
                                </button>
                                </Link>
                                <a
                                    href="/Mahbub Alahi Munna.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-[#5833FB] border-[0.1rem] text-[#5833FB] p-3 px-5 min-w-[10rem] text-center flex justify-center items-center gap-5"
                                >
                                    My Resume  <FaArrowRightLong className=''/>
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Section - Modified for full width on mobile */}
                <div onClick={() => setIsToggled(!isToggled)} className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full relative">
                        <div className="flex text-2xl absolute top-3 text-white right-[2rem] md:right-[8rem] gap-3 z-10">
                            <Link href="https://www.facebook.com/mahbubalahimunna"><FaSquareFacebook /></Link>
                            <Link href="https://www.linkedin.com/in/mahbub-alahi-munna-87a56a283/"><BsLinkedin /></Link>
                            <Link href="https://www.instagram.com/mahbubalahimunna/"><FaInstagramSquare /></Link>
                            <Link href=""><FaGithub /></Link>
                        </div>
                        <img
                            src={isToggled ? "/Basic photos/Munna original.jpg" : "/Basic photos/Munna animated.jpg"}
                            className="w-full h-[28rem] md:w-[38rem] md:h-[37rem] transition-all duration-300 object-cover"
                            alt=""
                        />
                        <img className="w-20 h-20 md:w-44 md:h-28 hidden md:block absolute top-40 right-52 md:right-5" src="/Basic photos/Click here photo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <img className="h-20 w-24 md:hidden relative -top-[20rem] left-[20rem]" src="/Basic photos/Click here photo.png" alt="" />

        <div className='md:hidden mb-20 max-w-sm mx-auto'>
            <p className=':bg-[#0070B5] text-white font-bold text-3xl  py-3'>Intro</p>
            <p className='text-lg pb-20 font-[Andika] text-white max-w-md mx-auto text-justify'>Passionate UI/UX designer with a user-centered approach and a strong foundation in modern design principles. As a third-year Software Engineering student at Daffodil International University, I blend technical knowledge with hands-on experience to craft intuitive, visually compelling digital experiences. Skilled in problem-solving and research-driven design, I analyze user needs, leverage real-world data, and follow a structured process to optimize usability. Continuously learning and adapting to modern UI trends, I strive to create seamless, innovative interactions that enhance user experiences.</p>
        </div>
      </div>
    );
};

export default Banner;
