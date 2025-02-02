"use client";
import Banner from "../../Components/Banner";
import Projects from "../../Components/Projects";
import Skills from "../../Components/Skills";
import Education from "../../Components/Education";
import ContactMe from "../../Components/ContactMe";
import AboutMe from "../../Components/AboutMe";

export default function Home() {

  return (
    <div>
      <div className="bg-[#E8E8E8]">
        <Banner />
      </div>
      <div className="bg-[#C3F4E9]">
        <Skills />
        <div>
        <Education/>
      </div>
      </div>
      <div  className="bg-[#D1FDF6]">
        <Projects />
      </div>
      <div>
        <AboutMe/>
      </div>
      <div>
        <ContactMe/>
      </div>
    </div>
  );
}
