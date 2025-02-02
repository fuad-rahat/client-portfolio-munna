"use client";
import React from 'react';
import { FaPython } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa6';
import { SiCanva, SiCplusplus } from 'react-icons/si';
import { TiCamera } from 'react-icons/ti';

const Skills = () => {
    return (
        <div className='flex max-w-4xl mx-auto gap-10 p-14'>
            {/* Left Section (Reversed Image) */}
            <div className='w-1/2 bg-[#E8E8E8]  flex justify-center items-center'>
                <img className='transform scale-x-[-1]' src="/Basic photos/Skill photo.png" alt="" />
            </div>

            {/* Right Section (Text Content) */}
            <div className='flex flex-col justify-center w-1/2'>
                <div className='max-w-xl'>
                    <h2 className='text-5xl py-4 font-bold'>Skills</h2>
                    <p>
                        Here are some of my skills, which also happen to be my hobbies. I enjoy working on these skills 
                        whenever I have the time, and I can't stop learning and improving in these areas.
                    </p>
                </div>
                <div>
                <div className='flex gap-5 mt-5 text-6xl'>
                <SiCplusplus />
                <FaPython />
                <FaJava/>
                </div>
                <div className='flex gap-5 mt-5 text-6xl'>
                <TiCamera />
                <SiCanva />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
