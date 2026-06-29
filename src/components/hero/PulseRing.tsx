import { motion } from "framer-motion";

export default function PulseRing() {
  return (
    <>
      <motion.div
        className="
          absolute
          h-64 w-64
          sm:h-72 sm:w-72
          md:h-80 md:w-80
          lg:h-[340px] lg:w-[340px]
          xl:h-[380px] xl:w-[380px]
          rounded-full
          border
          border-sky-400/40
        "
        animate={{
          scale: [1, 1.15],
          opacity: [0.45, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="
          absolute
          h-64 w-64
          sm:h-72 sm:w-72
          md:h-80 md:w-80
          lg:h-[340px] lg:w-[340px]
          xl:h-[380px] xl:w-[380px]
          rounded-full
          border
          border-cyan-300/30
        "
        animate={{
          scale: [1, 1.25],
          opacity: [0.3, 0],
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