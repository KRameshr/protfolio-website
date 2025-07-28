import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        {/* <div className="w-full">
          <div className="text-2xl md:text-4xl overflow-hidden font-bold text-left -ml-64">
            <h2>About</h2>
          </div>
        </div> */}
        <div className="w-full">
          <div className="text-2xl md:text-4xl font-bold text-center md:text-left -mt-5 md:-ml-64 lg:-ml-80 xl:-ml-[12rem]">
            <h2>About</h2>
          </div>
        </div>

        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-10">
          <img
            className="h-64 w-64 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem] object-contain"
            src={AboutImg}
            alt="About img"
          />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  React.js, HTML5, CSS3, Bootstrap, Tailwind CSS, Redux
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  MongoDB, Mongoose, SQL
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Node.js, Express.js
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  video editing
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Adobe Premiere Pro, After Effects, Photoshop, Canva
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
