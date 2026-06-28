import { motion } from "framer-motion";

const particles = [
  { top: "12%", left: "18%", size: 6, delay: 0 },
  { top: "24%", left: "74%", size: 4, delay: 1 },
  { top: "38%", left: "52%", size: 5, delay: 2 },
  { top: "62%", left: "15%", size: 4, delay: 1.5 },
  { top: "72%", left: "82%", size: 6, delay: 0.5 },
  { top: "84%", left: "40%", size: 5, delay: 2.5 },
];

export default function NeuralBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Glow Orbs */}
      <motion.div
        className="absolute left-20 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]"
        animate={{
          x: [0, 40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[140px]"
        animate={{
          x: [0, -30, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-sky-300"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}