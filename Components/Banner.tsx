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
         <div
            className="flex items-center  justify-center cursor-pointer"
           
        >
            <div className="max-w-6xl  mx-auto flex relative left-[4rem]">
                {/* Left Section */}
                <div className="md:w-1/2   md:bg-[#B2CED59C]  flex flex-col">
                    {!isToggled ? (
                        <>
                            {/* This section is now hidden on mobile and visible from medium screens (md) onwards */}
                           
                            <div className='hidden md:block'>
                                <img src="/Basic photos/design.png" className="relative " alt="" />
                            </div>
                            <div className="flex  relative md:right-[5rem] justify-center items-end gap-5">
                                <div className="relative hidden md:block top-[2.4rem]">
                                    <img src="/Basic photos/cat.png" className="h-72 " alt="" />
                                </div>
                                <div className={`lg:flex hidden md:block flex-col px-3 gap-5 mt-66`}>
                                    {/* Hire Me Button with smaller width */}
                                    <Link href="https://www.linkedin.com/in/mahbub-alahi-munna">
                                    <button className="bg-[#5833FB] cursor-pointer text-white py-3 px-5 flex justify-center items-center gap-2 w-[8rem]">
                                        Hire Me  <FaArrowRightLong className='' />
                                    </button>
                                    </Link>
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
                        <div className="w-[40rem] hidden md:block  h-[37rem] lg:flex justify-center relative right-[7rem] items-center flex-col">
                            <img src="/Basic photos/hello.png" className="w-66" alt="" />
                            <div className="text-center max-w-sm font-bold">
                                <p className="text-2xl">It’s Mahbub Alahi Munna</p>
                                <p>
                                    I am a student at Daffodil International University, pursuing a BSc in Software Engineering. Additionally, I work as a UI/UX designer.
                                </p>
                            </div>
                            <div className={`flex justify-center item-center gap-5 mt-5`}>
                                {/* Hire Me Button with smaller width */}
                                <Link href='https://www.linkedin.com/in/mahbub-alahi-munna'>
                                <button className="bg-[#5833FB] text-white cursor-pointer py-3 px-5 flex justify-center items-center gap-2 w-[8rem]">
                                        Hire Me  <FaArrowRightLong className='' />
                                    </button>
                                </Link>

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
                    )}
                </div>

                {/* Right Section */}
                <div  onClick={() => setIsToggled(!isToggled)} className="md:w-1/2 flex w-[39rem]   justify-center">
                    <img
                        src={isToggled ? "/Basic photos/Munna original.jpg" : "/Basic photos/Munna animated.jpg"}
                        className=" w-[31rem]   h-[28rem] md:w-[40rem] md:h-[37rem] transition-all duration-300"
                        alt=""
                    />
                    <img className="w-20 h-20 md:w-44 md:h-28  hidden md:block md:relative top-40 right-52 " src="/Basic photos/Click here photo.png" alt="" />

                    <div className="flex text-2xl relative mt-4 text-white right-[21rem] gap-3">
                        <FaSquareFacebook />
                        <BsLinkedin />
                        <FaInstagramSquare />
                        <FaGithub />
                    </div>
                </div>

            </div>
            
        </div>
        <img className="h-20 w-24 md:hidden relative -top-[20rem] left-[20rem]" src="/Basic photos/Click here photo.png" alt="" />

        <div className='md:hidden mb-20 max-w-md mx-auto'>
            <p className=':bg-[#0070B5] text-white font-bold text-2xl px-3 py-3'>Intro</p>
            <p className='text-xl pb-20 text-white max-w-md text-center'>Passionate UI/UX designer with a user-centered approach and a strong foundation in modern design principles. As a third-year Software Engineering student at Daffodil International University, I blend technical knowledge with hands-on experience to craft intuitive, visually compelling digital experiences. Skilled in problem-solving and research-driven design, I analyze user needs, leverage real-world data, and follow a structured process to optimize usability. Continuously learning and adapting to modern UI trends, I strive to create seamless, innovative interactions that enhance user experiences.</p>
        </div>
        

      </div> 
        
    );
};

export default Banner;
