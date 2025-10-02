import React from "react";

interface Props {
  href: string;
  src: string | undefined;
  title: string;
  description: string;
  note?: string;
}

const ProjectCard = ({ href, src, title, description, note }: Props) => {
  return (
    <a href={href} target={href == "#projects" ? "_self" : "_blank"} rel="noopener noreferrer" className="h-[30rem] w-[20rem]">
      <div className="h-[100%] w-[100%] relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <img src={src} alt="title" className="h-[50%] w-full object-cover" />
        <div className="h-full relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300 ">{description}</p>
          <p className="mt-2 text-sm font-bold text-red-500 ">{note}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
