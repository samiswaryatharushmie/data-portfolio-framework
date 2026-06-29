import Container from "../components/ui/Container";
import SkillCard from "../components/skills/SkillCard";
import { portfolioData } from "../data/portfolio";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  FaPython,
  FaReact,
  FaChartBar,
} from "react-icons/fa";

import {
  SiMysql,
  SiFastapi,
  SiScikitlearn,
} from "react-icons/si";

const icons = {
  Python: <FaPython />,
  SQL: <SiMysql />,
  React: <FaReact />,
  FastAPI: <SiFastapi />,
  "Machine Learning": <SiScikitlearn />,
  "Power BI": <FaChartBar />,
};

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState("All");

const categories = [
  "All",
  ...new Set(portfolioData.skills.map((skill) => skill.category)),
];

const filteredSkills =
  selectedCategory === "All"
    ? portfolioData.skills
    : portfolioData.skills.filter(
        (skill) => skill.category === selectedCategory
      );
  return (
    <section
      id="skills"
      className="relative py-28 scroll-mt-20"
    >
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-medium uppercase tracking-widest text-sky-400">
            Tech Stack
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technologies I
            <span className="text-sky-400"> Work With</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            These are the technologies I currently use for AI,
            Data Science, Backend, Frontend and Database
            Development.
          </p>

        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-3">

  {categories.map((category) => (

        <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`
            rounded-full
            px-5
            py-2
            text-sm
            font-medium
            transition-all
            duration-300
            ${
            selectedCategory === category
                ? "bg-sky-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.35)]"
                : "border border-slate-700 bg-slate-900/60 text-slate-300 hover:border-sky-500 hover:text-sky-400"
            }
        `}
        >
        {category}
        </button>

    ))}

    </div>

        <motion.div
        layout
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
        <AnimatePresence mode="popLayout">

            {filteredSkills.map((skill) => (

            <motion.div
                key={skill.title}
                layout
                initial={{
                opacity: 0,
                scale: 0.9,
                }}
                animate={{
                opacity: 1,
                scale: 1,
                }}
                exit={{
                opacity: 0,
                scale: 0.9,
                }}
                transition={{
                duration: 0.25,
                }}
            >
                <SkillCard
                icon={icons[skill.title as keyof typeof icons]}
                title={skill.title}
                category={skill.category}
                highlights={skill.highlights}
                />
            </motion.div>

            ))}

        </AnimatePresence>
        </motion.div>

      </Container>
    </section>
  );
}