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
                                        href="/Mahbub Alahi Munna CV.pdf"
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
                            {/* <img src="/Basic photos/hello.png" className="w-66" alt="" /> */}
                            <div className="text-center max-w-xs lg:ml-20 font-bold">
                                <p className="text-3xl text-left">Hi, I’m Mahbub Alahi Munna</p>
                                <p className="text-left py-5">
                                    I’m a Software Engineering student passionate about technology, problem-solving, and research.
                                </p>
                                <p className="text-left">
    Currently developing my skills in:
</p>

<ul className="list-disc ml-6 space-y-2 m-2 text-left">
    <li>Artificial Intelligence & Machine Learning</li>
    <li>Data Science & Deep Learning</li>
    <li>Explainable AI (XAI)</li>
    <li>Research & Scientific Computing</li>
    <li>Software Development</li>
    <li>UI/UX Design</li>
    <li>Web Development</li>
</ul>
                            </div>
                            <div className={`flex justify-center item-center gap-5 mt-5`}>
                                <Link href='https://www.linkedin.com/in/mahbub-alahi-munna-87a56a283/'>
                                <button className="bg-[#5833FB] text-white cursor-pointer py-3 px-5 flex justify-center items-center gap-2 w-[8rem]">
                                    Hire Me  <FaArrowRightLong className='' />
                                </button>
                                </Link>
                                <a
                                    href="/Mahbub Alahi Munna CV.pdf"
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
                            src={isToggled ? "/Basic photos/munna_image2.jpeg" : "/Basic photos/munna_image2.jpeg"}
                            className="w-full h-[28rem] md:w-[38rem] md:h-[37rem] transition-all duration-300 object-cover"
                            alt=""
                        />
                        <img className="w-20 h-20 md:w-44 md:h-28 hidden md:block absolute top-40 right-52 md:right-5" src="/Basic photos/Click here photo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className='md:hidden py-10 max-w-sm mx-auto'>
            <p className=':bg-[#0070B5] text-white font-bold text-3xl '>Intro</p>
            <p className='text-lg  font-[Andika] text-white max-w-sm mx-auto text-justify'>I’m Mahbub Alahi Munna, a Software Engineering student passionate about Artificial Intelligence, Data Science, Deep Learning, and research. I enjoy exploring emerging technologies and applying them to solve meaningful problems.

My recent work includes medical image classification, flood forecasting, disease outbreak prediction, and Explainable AI (XAI). Through these projects, I work with machine learning, deep learning, computer vision, and data-driven approaches while developing practical software solutions.

I’m continuously improving my technical and research skills through experimentation, academic research, and hands-on projects, with the goal of turning innovative ideas into solutions for real-world challenges.

Currently learning. Researching. Building.</p>
        </div>
      </div>
    );
};

export default Banner;
