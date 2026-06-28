import { portfolioData } from "../../data/portfolio";

export default function TechOrbit() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {portfolioData.hero.technologies.map((tech, index) => (
        <div
          key={index}
          className="absolute rounded-full border border-sky-500/40 bg-slate-900/80 px-4 py-2 text-sm text-sky-300 backdrop-blur-md"
        >
          {tech}
        </div>
      ))}
    </div>
  );
}