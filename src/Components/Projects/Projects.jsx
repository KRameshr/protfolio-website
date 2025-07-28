import React from "react";
import ProjectCard from "./ProjectCard";

// Import unique images for each project
import imgOne from "../../assets/project_one.png";
import imgTwo from "../../assets/project_two.png";
import imgThree from "../../assets/project_three.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-5 md:p-12 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left pl-10">
        Projects
      </h1>

      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          title="Portfolio Website"
          main="Tech Stack: React.js, Tailwind CSS, Framer Motion, React Icons, Webpack"
          image={imgOne}
          demoLink="/"
          sourceLink="https://github.com/yourname/blogging-site"
          description={[
            "Skillset Section with icons & clean layou",
            "Animated Tech Icons with Framer Motion",
            "Experience Timeline with motion effects",
            "Project Cards with dynamic buttons & responsive design",
          ]}
        />
        <ProjectCard
          title="Image Search App"
          main="Tech Stack: React, React Router, React Context API, Unsplash API"
          image={imgTwo}
          demoLink="https://pixim-photo.netlify.app/"
          sourceLink="https://github.com/KRameshr"
          description={[
            "Real-time image search with Unsplash API.",
            "Responsive UI with custom hooks and error handling.",
            "React Context for global state management.",
            "React Router for smooth navigation.",
          ]}
        />
        <ProjectCard
          title="RESTful User Authentication using JWT & Bcrypt"
          main="Node.js, Express, MongoDB, Mongoose, Bcrypt"
          image={imgThree}
          demoLink=""
          sourceLink="https://github.com/KRameshr/my-node-firstproject/blob/main/index.js"
          description={[
            "Secure RESTful API with sign-up and login functionality.",
            "User data stored in MongoDB using Mongoose ORM.",
            "JWT tokens and Bcrypt used for secure authentication.",
            "Validation and error handling with proper HTTP responses.",
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
