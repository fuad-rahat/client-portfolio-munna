"use client";
import React from "react";

const AboutMe = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-teal-500 to-blue-500 py-20">
      {/* Optional subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

      <div className="relative max-w-6xl mx-auto ">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image Section */}
          <div className="relative w-1/3 group">
            <div className="  overflow-hidden md:shadow-xl  transform transition-transform duration-500 ">
              <img
                src="/Basic photos/Munna original.jpg"
                alt="Profile of Munna"
                className="w-[12rem] md:w-full h-[12rem] md:h-[38rem] rounded-full md:rounded-xl object-cover"
              />
            </div>
            
          </div>

          {/* Text Content Section */}
          <div className="text-white w-2/3 space-y-6">
            <h1 className="text-5xl font-bold">
              Hello, I'm <span className="text-teal-200">Munna</span>
            </h1>
            <p className="text-xl">
              I’m a Software Engineering student at Daffodil International University, Bangladesh. I thrive on merging creativity with technology to build engaging digital experiences.
            </p>

            {/* What I Do */}
            <div>
              <h2 className="text-3xl font-semibold mb-2">What I Do</h2>
              <ul className="list-disc ml-6 space-y-2 text-lg">
                <li>
                  <strong>UI/UX Design:</strong> Crafting intuitive and visually stunning interfaces.
                </li>
                <li>
                  <strong>Presentation Design:</strong> Creating impactful presentations that captivate audiences.
                </li>
                <li>
                  <strong>Research:</strong> Conducting in-depth, innovative research both independently and in teams.
                </li>
                <li>
                  <strong>App Development:</strong> Building user-centric applications with modern technologies.
                </li>
              </ul>
            </div>

            {/* Why Work With Me */}
            <div>
              <h2 className="text-3xl font-semibold mb-2">Why Work With Me?</h2>
              <p className="text-lg">
                I deliver high-quality work on time, exceed expectations, and bring creativity and attention to detail to every project.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-semibold mb-2">Contact</h2>
              <p className="text-lg">
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:mm736757@gmail.com" className="underline text-teal-200 hover:text-teal-100">
                  mm736757@gmail.com
                </a>
              </p>
              <p className="text-lg">
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+8801908863619" className="underline text-teal-200 hover:text-teal-100">
                  +8801908863619
                </a>
              </p>
              {/* <p className="text-lg">
                <span className="font-medium">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/mahbub-alahi-munna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-teal-200 hover:text-teal-100"
                >
                  LinkedIn Profile
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutMe;
