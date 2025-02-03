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
          <Education />
        </div>
      </div>
      <div className="bg-[#D1FDF6]">
        <Projects />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <ContactMe />
      </div>

      {/* Developer Section */}
      <div className="bg-[#F0F8FF] py-2 text-center rounded-lg shadow-lg">
  <p className="text-lg text-[#333] font-semibold">
    Developed by <span className="text-[#5833FB]">Md. Muhtasim Fuad Rahat</span>
  </p>
  <p className="mt-2 text-sm text-[#555]">
    Developer  {" "}
    <a
      href="http://fuad-rahat.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#5833FB] text-xl font-semibold hover:underline"
    >
      Portfolio
    </a>
  </p>
</div>


    </div>
  );
}
