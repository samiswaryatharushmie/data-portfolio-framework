import { FaGithub, FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";
import type { ProjectData } from "../../types/portfolio";

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="
      overflow-hidden
      rounded-3xl
      border border-slate-800
      bg-slate-900/60
      backdrop-blur-md
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-sky-500/40
      "
    >
      {/* Image */}

      <div className="aspect-video bg-slate-800 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-slate-500">
            Project Screenshot
          </span>
        )}
      </div>

      {/* Content */}

      <div className="p-6">

        <div className="mb-3 flex items-center justify-between">

          <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs text-sky-400">
            {project.badge}
          </span>

          <span className="text-sm text-slate-400">
            {project.status}
          </span>

        </div>

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-2 text-slate-400">
          {project.subtitle}
        </p>

        <p className="mt-5 leading-7 text-slate-300">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
              rounded-full
              bg-slate-800
              px-3
              py-1
              text-xs
              "
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-3">

          <a href={project.github}>
            <FaGithub size={18} />
          </a>

          <a href={project.linkedin}>
            <FaLinkedin size={18} />
          </a>

          <a href={project.live}>
            <FaExternalLinkAlt size={18} />
          </a>

        </div>

      </div>
    </div>
  );
}