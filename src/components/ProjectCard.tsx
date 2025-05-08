import { ExternalLink } from "lucide-react";
import { Project } from "../types/index";

export default function ProjectCard({
  title,
  description,
  technologies,
  isDeployed,
  imageUrl,
  projectUrl,
  githubUrl,
}: Project) {
  const titles = ["Citadel Clothing Mobile", "Staff-Hire System"];
  return (
    <div className="flex flex-col overflow-hidden transition-shadow border rounded-lg shadow-md hover:shadow-lg border-custom">
      <img
        src={imageUrl}
        alt={title}
        className={`object-cover w-full h-56  ${titles.includes(title) && "object-top"}`}
      />
      <div className="p-6 grid grid-rows-[auto_1fr_auto_auto] flex-grow">
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="mb-5 leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-gray-200/75 dark:bg-gray-700 rounded-sm font-[500]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-auto">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center xl:gap-2 gap-0.5 btn btn-primary text-text-btn xl:px-7"
          >
            <span>{isDeployed ? "Live Demo" : "Open Project"}</span>
            <ExternalLink size={16} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border btn border-primary text-primary hover:bg-primary/10 xl:px-7"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
