import { portfolioData } from "../../data/portfolio";
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";

export default function FeaturedProject() {
  const project = portfolioData.projects.find(
    (project) => project.featured
  );

  if (!project) return null;

  return (
    <div
      className="
      mt-16
      overflow-hidden
      rounded-3xl
      border border-slate-800
      bg-slate-900/60
      backdrop-blur-md
      "
    >
      <div className="grid lg:grid-cols-2">

        {/* LEFT */}

        <div className="p-8 lg:p-12">

          <div className="mb-6 flex items-center gap-3">

            <span className="rounded-full bg-sky-500/20 px-4 py-1 text-sm text-sky-400">
              {project.badge}
            </span>

            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-400">
              {project.status}
            </span>

          </div>

          <p className="text-sm uppercase tracking-[0.25em] text-sky-400">
            Featured Project
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {project.title}
          </h2>

          <p className="mt-2 text-xl text-slate-400">
            {project.subtitle}
          </p>

          <p className="mt-8 leading-8 text-slate-300">
            {project.description}
          </p>

          {/* Technologies */}

          <div className="mt-8 flex flex-wrap gap-3">

            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                rounded-full
                border border-slate-700
                bg-slate-800
                px-4
                py-2
                text-sm
                "
              >
                {tech}
              </span>
            ))}

          </div>

          {/* Highlights */}

          <div className="mt-10">

            <h4 className="mb-4 font-semibold">
              Highlights
            </h4>

            <ul className="space-y-3">

              {project.highlights.map((item) => (

                <li
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="text-sky-400">
                    ✓
                  </span>

                  {item}

                </li>

              ))}

            </ul>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href={project.github}
              className="
              flex items-center gap-2
              rounded-xl
              bg-slate-800
              px-5
              py-3
              hover:bg-slate-700
              "
            >
              <FaGithub />

              GitHub
            </a>

            <a
              href={project.linkedin}
              className="
              flex items-center gap-2
              rounded-xl
              bg-sky-500
              px-5
              py-3
              text-white
              hover:bg-sky-600
              "
            >
              <FaLinkedin />

              LinkedIn
            </a>

            <a
              href={project.live}
              className="
              flex items-center gap-2
              rounded-xl
              border border-slate-700
              px-5
              py-3
              hover:border-sky-500
              "
            >
              <FaExternalLinkAlt />

              Live Demo
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex items-center justify-center bg-slate-950/40 p-8">

          <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            rounded-2xl
            border
            border-slate-800
            object-cover
            shadow-2xl
            "
          />

        </div>

      </div>

    </div>
  );
}