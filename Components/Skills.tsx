"use client";
import React from 'react';
import { FaPython } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa6';
import { SiCanva, SiCplusplus } from 'react-icons/si';
import { TiCamera } from 'react-icons/ti';

const Skills = () => {
    return (
        <div className='flex flex-col md:flex-row md:max-w-5xl mx-auto max-sm:pb-5  md:py-32 gap-10'>
            {/* Left Section (Image) */}
            <div className='w-full md:w-1/2 bg-[#E8E8E8] flex justify-center items-center'>
                <img className='w-full h-full object-cover' src="/Basic photos/Skill photo.png" alt="" />
            </div>

            {/* Right Section (Text Content and Icons) */}
            <div className='flex flex-col justify-center max-sm:text-white max-sm:bg-[#0070B5] relative py-10 bottom-10 w-full md:w-1/2 text-center md:text-left'>
                <div className='max-w-xl mx-auto'>
                    <h2 className='text-5xl py-4 font-bold'>Skills</h2>
                    <p className='max-sm:px-4'>
                        Here are some of my skills, which also happen to be my hobbies. I enjoy working on these skills 
                        whenever I have the time, and I can't stop learning and improving in these areas.
                    </p>
                </div>
                
                <div className='mt-10'>
                    {/* Skills Icons */}
                    <div className='flex justify-center gap-5 text-6xl md:text-8xl'>
                        <SiCplusplus />
                        <FaPython />
                        <FaJava />
                    </div>
                    <div className='flex justify-center gap-5 mt-5 text-6xl md:text-8xl'>
                        <TiCamera />
                        <SiCanva />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
