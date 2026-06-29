import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <>
      <motion.div
        className="absolute -top-32 left-1/4 h-[450px] w-[450px] rounded-full bg-sky-500/15 blur-[140px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-150px] right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-[160px]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, -40, 20, 0],
          scale: [1.1, 0.95, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}