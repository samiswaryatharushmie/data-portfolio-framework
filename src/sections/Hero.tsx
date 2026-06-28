import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { fadeLeft, fadeRight } from "../animations/fade";


export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg text-sky-400">
              {portfolioData.hero.greeting}
            </p>

            <h1 className="mt-4 text-6xl font-bold">
              {portfolioData.hero.name}
            </h1>

            <h2 className="mt-4 text-2xl text-slate-400">
              {portfolioData.hero.roles.join(" • ")}
            </h2>

            <p className="mt-8 max-w-2xl leading-8 text-slate-400">
              {portfolioData.hero.description}
            </p>

            <div className="mt-10 flex gap-4">
              <Button>View Projects</Button>

              <button className="rounded-xl border border-slate-700 px-6 py-3 transition hover:bg-slate-800">
                Download CV
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-2xl text-slate-400">
              <FaGithub className="cursor-pointer transition hover:text-white" />
              <FaLinkedin className="cursor-pointer transition hover:text-white" />
              <Mail className="cursor-pointer transition hover:text-white" />
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex justify-center"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            >
            <motion.img
                src={portfolioData.hero.profileImage}
                alt="Profile"
                className="h-96 w-96 rounded-full border-4 border-sky-500 object-cover shadow-2xl"
                animate={{
                    y: [0, -12, 0],
                }}
                transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                }}
              />

            
          </motion.div>

        </div>
      </Container>
    </section>
  );
}