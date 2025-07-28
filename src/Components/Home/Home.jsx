import { useEffect, useState } from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";
import resume from "./resume.pdf";

const Home = () => {
  const [animateBorder, setAnimateBorder] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateBorder(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="text-white flex w-full justify-between items-start p-8 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-base tracking-tight text-justify pt-3 pb-3">
          Hi,I'm Ramesh a passionate{" "}
          <strong style={{ color: "red" }}>Full Stack Developer </strong>and
          Creative Technologist from India. I hold a Bachelor of Technology in
          Electrical and Electronics Engineering and bring hands-on experience
          in building modern, responsive, and user-centric web applications
          using the <strong style={{ color: "red" }}>MEARN stack.</strong>
          During my intern at Intellipaat,I developed real-world projects
          leveraging{" "}
          <strong style={{ color: "red" }}>
            {" "}
            React, Node.js, Express.js, and MongoDB.
          </strong>{" "}
          My technical skill set includes building{" "}
          <strong style={{ color: "red" }}>RESTful APIs,</strong> implementing
          secure authentication systems, and optimizing web performance for a
          smooth user experience. Beyond code, I’m also a visual storyteller.
          I'm skilled in{" "}
          <strong style={{ color: "red" }}>
            {" "}
            video editing, graphic design, and motion graphics,{" "}
          </strong>
          with expertise in{" "}
          <strong style={{ color: "red" }}>
            Adobe Premiere Pro, After Effects, and Photoshop.{" "}
          </strong>
          This creative edge enhances my ability to design intuitive interfaces
          and deliver compelling digital experiences. Whether I'm engineering a
          scalable backend or crafting visual content, I bring a unique blend of
          logic and creativity to every project. I'm always excited to connect,
          collaborate, and contribute to meaningful tech solutions{" "}
        </p>

        <a href="#Footer">
          <button className="mt-5 text-white py-3 px-5 text-base md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>

        <a href={resume} download>
          <button
            className={`m-5 text-white py-3 px-5 text-base md:text-lg md:py-2 md:px-4 font-semibold bg-[#0c0e19] relative button-border-flow`}
          >
            Download CV
          </button>
        </a>
      </div>
      <div className="hidden md:block">
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
