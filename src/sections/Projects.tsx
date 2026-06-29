import Container from "../components/ui/Container";
import FeaturedProject from "../components/projects/FeaturedProject";
import ProjectCard from "../components/projects/ProjectCard";
import { portfolioData } from "../data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 scroll-mt-20"
    >
      <Container>

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

            <p className="font-medium uppercase tracking-widest text-sky-400">
                Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Building
                <span className="text-sky-400">
                {" "}Real-World Solutions
                </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
                A collection of projects that showcase my journey in AI,
                Full Stack Development, IoT and Data Engineering.
            </p>

            </div>

        {/* Featured Project */}

        <FeaturedProject />

            <div className="mt-24 mb-10">
            <h3 className="text-3xl font-bold">
                Other Projects
            </h3>

            <p className="mt-3 text-slate-400">
                Academic and personal projects that strengthened my
                experience in software engineering, IoT and AI.
            </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">

            </div>

        {/* Other Projects */}

            {portfolioData.projects
            .filter((project) => !project.featured)
            .map((project) => (
                <ProjectCard
                key={project.title}
                project={project}
                />
            ))}

      </Container>
    </section>
  );
}