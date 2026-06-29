import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  category: string;
  highlights: string[];
}

export default function SkillCard({
  icon,
  title,
  category,
  highlights,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group
        rounded-2xl
        border border-slate-800
        bg-slate-900/60
        p-6
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-sky-500/40
        hover:shadow-[0_0_30px_rgba(14,165,233,0.18)]
      "
    >
      {/* Icon */}
      <div className="mb-5 flex justify-center">
        <div className="rounded-2xl bg-sky-500/10 p-4 text-4xl text-sky-400 transition duration-300 group-hover:bg-sky-500/20">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-center text-xl font-semibold">
        {title}
      </h3>

      {/* Category */}
      <div className="mt-3 flex justify-center">
        <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-wider text-sky-300">
          {category}
        </span>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-slate-800" />

      {/* Highlights */}
      <div className="flex flex-wrap justify-center gap-2">
        {highlights.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border
              border-slate-700
              bg-slate-800/70
              px-3
              py-1
              text-xs
              text-slate-300
              transition-all
              duration-300
              group-hover:border-sky-500/40
            "
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}