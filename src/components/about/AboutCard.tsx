import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface AboutCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function AboutCard({
  icon,
  title,
  description,
}: AboutCardProps) {
  return (
        <motion.div
        className="
            group
            rounded-2xl
            border border-slate-800
            bg-slate-900/50
            p-6
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-sky-500/40
            hover:shadow-[0_0_30px_rgba(14,165,233,0.18)]
        "
        initial={{
            opacity: 0,
            y: 40,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        viewport={{
            once: true,
            amount: 0.2,
        }}
        transition={{
            duration: 0.6,
            ease: "easeOut",
        }}
        >
      <div className="mb-4 text-3xl text-sky-400">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="leading-7 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}