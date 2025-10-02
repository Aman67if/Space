import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Projects_data } from "@/constants";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1
        id="projects"
        className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        My Projects
      </h1>
      <div className="h-full w-full flex items-center md:justify-start flex-col md:flex-row md:flex-wrap gap-[30px] px-16">
        {Projects_data.map((project, index) => (
          <ProjectCard
            key={index}
            href={project.src}
            src={project.image}
            title={project.title}
            description={project.description}
            note={project.note}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
