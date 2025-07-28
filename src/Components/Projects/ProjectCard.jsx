import React from "react";

const ProjectCard = ({
  title,
  main,
  description = [], // expecting an array of strings
  image,
  demoLink,
  sourceLink,
}) => {
  return (
    <div className="p-3 md:p-6 flex flex-col bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl w-full max-w-xs">
      <div className="rounded-xl overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={`${title} preview`}
        />
      </div>

      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>

      {description.length > 0 && (
        <ul className="px-6 list-disc list-inside text-sm md:text-md py-2 space-y-1">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}

      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        {demoLink ? (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="text-white py-2 px-3 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Demo
            </button>
          </a>
        ) : (
          <button
            onClick={() => {
              if (demoLink) {
                alert("You are being redirected to the live demo.");
                // Open in a new tab without reloading current page
                window.open(demoLink, "_blank", "noopener,noreferrer");
              } else {
                alert("Live demo is not available for this project.");
              }
            }}
            className={`text-white py-2 px-3 text-sm md:text-lg font-semibold rounded-3xl duration-300 ${
              demoLink
                ? "bg-[#465697] hover:opacity-85 hover:scale-105"
                : "bg-gray-500 opacity-60 cursor-not-allowed"
            }`}
          >
            Demo
          </button>
        )}
        {sourceLink && (
          <a href={sourceLink} target="_blank" rel="noopener noreferrer">
            <button className="text-white py-2 px-3 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Source Code
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
