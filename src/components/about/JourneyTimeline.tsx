import { motion } from "framer-motion";

const journey = [
  {
    year: "2024",
    title: "Started Computing",
    description: "Began my journey in software development and programming.",
  },
  {
    year: "2025",
    title: "Full Stack Development",
    description: "Built web applications using React, FastAPI and SQL.",
  },
  {
    year: "2026",
    title: "AI & Data Science",
    description: "Focused on Machine Learning, AI and intelligent systems.",
  },
];

export default function JourneyTimeline() {
  return (
    <div className="mt-24 max-w-3xl mx-auto">
      <h3 className="mb-12 text-center text-3xl font-bold">
        My Journey
      </h3>

      <div className="relative border-l border-sky-500/30 pl-8">
        {journey.map((item, index) => (
          <motion.div
            key={index}
            className="relative mb-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
          >
            <div className="absolute -left-[42px] h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.8)]" />

            <p className="text-sky-400 font-semibold">
              {item.year}
            </p>

            <h4 className="mt-2 text-xl font-semibold">
              {item.title}
            </h4>

            <p className="mt-2 text-slate-400 leading-7">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}