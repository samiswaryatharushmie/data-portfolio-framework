import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { fadeLeft, fadeRight } from "../animations/fade";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Background Glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-sky-500/15 blur-[120px]"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.3, 0.55, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-[-150px] right-[-120px] h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]"
                    animate={{
                        scale: [1.1, 0.95, 1.1],
                        opacity: [0.2, 0.45, 0.2],
                     }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                

            </div>
        {/* Grid Background */}
            <div
                className="absolute inset-0 -z-20 opacity-[0.04]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, white 1px, transparent 1px),
                        linear-gradient(to bottom, white 1px, transparent 1px)
                    `,
                     backgroundSize: "60px 60px",
                }}
            />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            
            <motion.div
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 backdrop-blur-md"
                animate={{
                    scale: [1, 1.03, 1],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to Internship
            </motion.div>

            <p className="text-lg text-sky-400">
              {portfolioData.hero.greeting}
            </p>

            <h1 className="mt-4 text-6xl font-bold">
              {portfolioData.hero.name}
            </h1>

            <h2 className="mt-4 text-2xl font-medium text-sky-400">
                <TypeAnimation
                sequence={[
                portfolioData.hero.roles[0],
                1100,
                portfolioData.hero.roles[1],
                1100,
                portfolioData.hero.roles[2],
                1100,
                portfolioData.hero.roles[3],
                1100,
            ]}
            wrapper="span"
            speed={60}
             repeat={Infinity}
          />
        </h2>


            <p className="mt-8 max-w-2xl leading-8 text-slate-400">
              {portfolioData.hero.description}
            </p>

            <div className="mt-10 flex gap-4">
                <Button>
                    View Projects
                </Button>

                <Button variant="secondary">
                    Download CV
                </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-2xl text-slate-400">
              <FaGithub className="cursor-pointer transition hover:text-white" />
              <FaLinkedin className="cursor-pointer transition hover:text-white" />
              <Mail className="cursor-pointer transition hover:text-white" />
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="relative flex justify-center"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            >
        <div className="absolute h-[430px] w-[430px] rounded-full bg-sky-500/10 blur-[90px]" />
            
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
        <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
         }}
        >
            <div className="flex h-10 w-6 justify-center rounded-full border border-slate-500">
                <motion.div
                    className="mt-2 h-2 w-2 rounded-full bg-sky-400"
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                 />
              </div>
            </motion.div>
      
      </Container>
    </section>
  );
}