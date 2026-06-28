import { motion } from "framer-motion";

export default function PulseRing() {
  return (
    <>
      <motion.div
        className="absolute h-72 w-72 md:h-96 md:w-96 rounded-full border border-sky-400/40"
        animate={{
          scale: [1, 1.18],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute h-72 w-72 md:h-96 md:w-96 rounded-full border border-cyan-300/30"
        animate={{
          scale: [1, 1.28],
          opacity: [0.35, 0],
        }}
        transition={{
          duration: 3,
          delay: 1.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </>
  );
}