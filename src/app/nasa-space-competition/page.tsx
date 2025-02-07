import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="max-w-5xl mx-auto max-sm:p-2 md:mt-14  max-sm:mt-14">
      <div className="py-4 text-3xl md:text-4xl font-bold">Nasa Space Apps Challenge 2024</div>
      <div>
        <img src="/Projects/Nasa space app/Screenshot 2025-01-17 213529.png" alt="" />
      </div>
      <div>
        <p className="text-3xl font-bold py-5"> About the Team:</p>
        <p>
          Are you fascinated by the origins of life and the extraordinary ecosystems that thrive in extreme environments?
          If so, we have an exciting opportunity for you! We are Team Arcean, a group of passionate individuals making
          Astrobiology accessible to all, no matter your background. Our mission is to explore and showcase the wonders of
          life beyond Earth by creating a stunning aquatic chemosynthetic ecosystem that can thrive with minimal sunlight.
          If you&apos;re curious about Astrobiology and eager to expand your knowledge and skills, we invite you to join
          us on this cosmic adventure. Together, we&apos;ll uncover the mysteries of life beyond our planet, combining
          creative vision with cutting-edge technology. Ready to embark on this journey? Contact us today and be part of
          something truly extraordinary.
        </p>
        <p className="text-4xl font-bold py-5">About the Challenge:</p>
        <p>
          Earth&apos;s ecosystems heavily rely on sunlight, but imagine an ocean world where chemosynthesis, not
          photosynthesis, sustains life. Your challenge is to design such a world and its diverse ecosystem, pushing the
          boundaries of astrobiology beyond traditional Earth-like conditions.
        </p>
      </div>
      <Link href="https://www.figma.com/proto/eLakp9wqJfnheUcNUCZVgO/Nasa-app?node-id=1-2&t=OsbiyOkFQ37W2DeQ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A53">
        <button className="py-4 px-9 top-10 relative left-24 bg-[#5833FB] text-white flex justify-center items-center gap-5 text-xl">
          Project Demo
          <FaArrowRightLong />
        </button>
      </Link>
      <div className="relative top-20">
        <p className="text-4xl font-bold">My Achievements:</p>
        <div className="flex justify-center items-center m-10">
          <img src="/Projects/Nasa space app/Screenshot 2025-01-17 221734.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page;
