"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Skill", path: "/skill" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="top-0 left-0 w-full bg-[#63A9D0] backdrop-blur-md text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-4xl font-semibold">
          <span className="bg-[#0079C5] p-3 rounded-3xl rounded-tr-lg">MAH</span>
          <span className="relative -left-3">BUB ALAHI MUNNA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="relative cursor-pointer after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#63A9D0] py-4 text-center space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="text-lg cursor-pointer hover:text-gray-200 transition-all block"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
