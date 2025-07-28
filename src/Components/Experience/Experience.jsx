import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBriefcase,
  FaUserGraduate,
  FaCertificate,
} from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiVisualstudiocode,
  SiPostman,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiCanva,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Experience = () => {
  const icons = [
    { icon: <FaHtml5 color="#E34F26" />, key: "html" },
    { icon: <FaCss3 color="#1572B6" />, key: "css" },
    { icon: <FaJs color="#F7DF1E" />, key: "js" },
    { icon: <FaReact color="#61DAFB" />, key: "react" },
    { icon: <SiRedux color="#764ABC" />, key: "redux" },
    { icon: <FaNodeJs color="#68A063" />, key: "node" },
    { icon: <SiExpress color="#ff0909ff" />, key: "express" },
    { icon: <SiMongodb color="#47A248" />, key: "mongo" },
    { icon: <SiTailwindcss color="#38BDF8" />, key: "tailwind" },
    { icon: <FaGitAlt color="#F1502F" />, key: "git" },
    { icon: <FaGithub color="#FFFFFF" />, key: "github" },
    { icon: <SiVisualstudiocode color="#007ACC" />, key: "vscode" },
    { icon: <SiPostman color="#FF6C37" />, key: "postman" },
    { icon: <SiAdobepremierepro color="#9999FF" />, key: "premiere" },
    { icon: <SiAdobeaftereffects color="#AE81FF" />, key: "aftereffects" },
    { icon: <SiAdobephotoshop color="#31A8FF" />, key: "photoshop" },
    { icon: <SiCanva color="#00C4CC" />, key: "canva" },
  ];

  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10 text-center md:text-left">
        Experience
      </h1>
      <div className="flex flex-wrap items-start justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 justify-center">
          {icons.map((item, i) => (
            <motion.span
              key={item.key}
              className="p-3 bg-zinc-950 flex items-center rounded-2xl"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.3, 1] }} // Increase, then decrease
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: i * 0.1, // slight stagger effect
              }}
            >
              {React.cloneElement(item.icon, { size: 50 })}
            </motion.span>
          ))}
        </div>

        {/* Timeline Section */}
        <div>
          {/* B.Tech */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center"
          >
            <FaUserGraduate color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">B.Tech</h2>
              <p className="text-sm leading-tight font-thin">
                July 2019 - May 2023
              </p>
              <ul className="text-sm p-2">
                <li>- Electrical and Electronics Engineering</li>
              </ul>
            </span>
          </motion.div>

          {/* Intern */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center"
          >
            <FaBriefcase color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Intern, Intellipaat</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Sep 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Full Stack Web Development</li>
              </ul>
            </span>
          </motion.div>

          {/* Certificate */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center"
          >
            <FaCertificate color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Certificate</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <div className="w-full flex justify-center mt-2">
                <button
                  onClick={() => alert("there might  be some issue")}
                  className="text-white py-1 px-5 text-sm md:text-lg md:py-1 md:px-5 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
                >
                  View
                </button>
              </div>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
