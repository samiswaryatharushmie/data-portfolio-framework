import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { fadeLeft, fadeRight } from "../animations/fade";
import { TypeAnimation } from "react-type-animation"
import PulseRing from "../components/hero/PulseRing";

export default function Hero() {
    return (
    <section className="relative flex min-h-screen overflow-hidden pt-20 md:pt-16">

       {/* <NeuralNetwork /> */}

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
                    className="absolute bottom-[-150px] right-[-120px] h-80 w-80 md:h-96 md:w-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]"
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
        <div className="grid min-h-[calc(100vh-64px)] items-center gap-20 md:grid-cols-2">

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
                Open for Internship 2026
            </motion.div>

            <p className="text-lg text-sky-400">
              {portfolioData.hero.greeting}
            </p>

            <h1 className="mt-4 text-6xl font-extrabold leading-tight md:text-7xl">
                <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-400 bg-clip-text text-transparent">
                    {portfolioData.hero.name}
                </span>
            </h1>


            <h2 className="mt-4 min-h-[40px] text-xl font-medium text-sky-400 md:text-2xl">
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


            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-400">
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
            <div className="mt-10 flex items-center gap-5">
                <a
                    
                    target="_blank"href={portfolioData.social.github}
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-700 p-3 text-slate-400 transition-all duration-300 hover:scale-110 hover:border-sky-400 hover:text-sky-400"
                >
                    <FaGithub size={22} />
                </a>

                <a
                    href={portfolioData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-700 p-3 text-slate-400 transition-all duration-300 hover:scale-110 hover:border-sky-400 hover:text-sky-400"
                >
                    <FaLinkedin size={22} />
                </a>

                <a
                    href={`mailto:${portfolioData.social.email}`}
                    className="rounded-full border border-slate-700 p-3 text-slate-400 transition-all duration-300 hover:scale-110 hover:border-sky-400 hover:text-sky-400"
                >
                    <Mail size={22} />
                </a>
            </div>
            
          </motion.div>

          {/* Right Side */}
            <motion.div
                className="relative z-20 flex justify-center md:translate-x-10"
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                whileHover="hover"
            >



            {/* Background Glow */}
            <div className="absolute h-[430px] w-[430px] rounded-full bg-sky-500/15 blur-[110px]" />

            {/* Glass Ring */}
            <motion.div
                className="absolute z-20 h-[340px] w-[340px] md:h-[460px] md:w-[460px] rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                animate={{
                rotate: 360,
                }}
                transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                }}
            />

            <PulseRing />

            {/* Profile */}
            <motion.img
                src={portfolioData.hero.profileImage}
                alt="Profile"
                className="relative z-30 h-72 w-72 md:h-96 md:w-96 rounded-full border-4 border-sky-400 object-cover shadow-[0_0_60px_rgba(14,165,233,0.45)]"
                animate={{
                y: [0, -12, 0],
                scale: [1, 1.02, 1],
                }}
                transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                }}
                whileHover={{
                scale: 1.05,
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