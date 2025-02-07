"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Skill", path: "/skill" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 overflow-x-hidden transition-all duration-300 
        ${isScrolled ? "bg-[#0070B5] shadow-md" : "bg-[#0070B5] shadow-md"}`}
    >
      <div className="md:max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
        <div className="text-2xl md:text-3xl font-semibold text-white">
          <span className="bg-[#0079C5] px-3 py-1 rounded-3xl rounded-tr-lg">MAH</span>
          <span className="relative -left-2">BUB ALAHI MUNNA</span>
        </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg text-white">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="relative cursor-pointer after:block px-2 after:w-0 after:h-[2px] hover:bg-[#004eb5fc] rounded-xl"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[20rem] h-screen bg-[#0070B5] text-white flex flex-col items-center justify-center transform 
          ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            onClick={() => setIsOpen(false)}
            className="text-xl py-3 hover:bg-gray-400 hover:rounded-lg px-3 cursor-pointer hover:text-white transition-all"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
