import { motion } from "framer-motion";

const nodes = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 3,
}));

export default function NeuralNetwork() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full bg-sky-400"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
          }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: node.delay,
          }}
        />
      ))}
    </div>
  );
}