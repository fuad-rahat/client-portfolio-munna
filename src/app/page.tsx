"use client";
import Banner from "../../Components/Banner";
import Projects from "../../Components/Projects";
import Skills from "../../Components/Skills";
import Education from "../../Components/Education";
import ContactMe from "../../Components/ContactMe";
import AboutMe from "../../Components/AboutMe";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <div className="md:hidden bg-[#0070B5] py-24">
      <p className='text-center text-white text-2xl font-bold max-w-xs mx-auto  md:hidden'>
                            I am a student at Daffodil International University, pursuing a BSc in Software Engineering. Additionally, I work as a UI/UX designer.
                            </p>
      </div>
      <div className="sm:bg-[#0070B5] md:bg-[#E8E8E8] md:mt-16">
        <Banner />
      </div>
      <div className="pb-10 max-sm:block md:hidden">
       <div className="flex justify-center py-3 items-center">
       <p className=" max-w-[15rem] text-center text-[#34705D] font-bold text-xl">“A good and creative designer
can turn a Cockroach into a 
Butterfly”</p>
       </div>
<p className="text-xl text-center text-[#884D39]">Need a Good Designer?
</p>
<p className="text-xl text-center text-[#884D39]">Just Message Me Hi</p>
<div className={`flex justify-center item-center gap-5 mt-5`}>
                                {/* Hire Me Button with smaller width */}
                                <Link href='https://www.linkedin.com/in/mahbub-alahi-munna/detail/contact-info/'>
                                <button className="bg-[#0070B5] text-white py-3 cursor-pointer px-5 flex justify-center items-center gap-2 w-[8rem]">
                                        Hire Me  <FaArrowRightLong className='' />
                                    </button>
                                </Link>
                                    {/* Resume Button with PDF Link and larger width */}
                                    <a
                                        href="/Mahbub Alahi Munna.pdf" // Update with your actual PDF file path
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-[#0070B5] border-[0.1rem] text-[#0070B5] p-3 px-5 min-w-[10rem] text-center flex justify-center items-center gap-5"
                                    >
                                        My Resume  <FaArrowRightLong className=''/>
                                    </a>
                            </div>
      </div>
      <div className="sm:bg-[#0070B5] md:bg-[#C3F4E9]">
        <Skills />
        <div>
          <Education />
        </div>
      </div>
      <div className="bg-[#D1FDF6] max-sm:relative -top-16">
        <Projects />
      </div>
      <div className="max-sm:relative -top-16">
        <AboutMe />
      </div>
      <div className="max-sm:relative -top-16">
        <ContactMe />
      </div>

      {/* Developer Section */}
      <div className="max-sm:relative bottom-7 md:py-2 text-center rounded-lg md:bg-[#F0F8FF] md:shadow-lg">
  <p className="text-xl md:text-lg text-[#333] font-semibold">
    Developed by <span className="text-[#5833FB]">Md. Muhtasim Fuad Rahat</span>
  </p>
  <p className="md:mt-2 text-sm text-[#555]">
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
