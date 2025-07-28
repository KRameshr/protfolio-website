import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-center md:justify-around items-center bg-[#465697] text-white px-6 py-10 md:py-12 gap-10 md:gap-0 text-center md:text-left"
    >
      {/* Left section */}
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal mt-2">
          Feel Free To reach out!
        </h3>
      </div>

      {/* Right section */}
      <ul className="text-sm md:text-xl space-y-3 flex flex-col items-center md:items-start">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <span className="text-center md:text-left">
            krameshr348@gmail.com | +91-8919003200
          </span>
        </li>
        <a
          href="https://www.linkedin.com/in/kurubaramesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="flex gap-2 items-center">
            <CiLinkedin />
            <span>linkedin.com/in/kurubaramesh</span>
          </li>
        </a>
        <a
          href="https://github.com/kRameshr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="flex gap-2 items-center">
            <FaGithub />
            <span>github.com/kRameshr</span>
          </li>
        </a>
        <li className="pt-4 text-xs md:text-sm text-center md:text-left">
          &copy; {year}. All rights reserved.
        </li>
      </ul>
    </div>
  );
};

export default Footer;
