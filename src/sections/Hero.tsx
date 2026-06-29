import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { fadeLeft, fadeRight } from "../animations/fade";
import { TypeAnimation } from "react-type-animation"
import PulseRing from "../components/hero/PulseRing";
import Aurora from "../components/hero/Aurora";

export default function Hero() {
    return (
    <section
        id="home"
       className="relative min-h-screen overflow-hidden pt-24 lg:flex lg:items-center lg:pt-20"
        >

        <Aurora />

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
                    className="absolute bottom-[-150px] right-[-120px] h-80 w-80 md:h-96 md:w-96 rounded-full bg-cyan-400/10 blur-[140px]"
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
        <div className="grid items-center gap-12 lg:gap-16 py-8 lg:grid-cols-2 text-center lg:text-left">

          {/* Left Side */}
          <motion.div
            className="flex flex-col items-center lg:items-start justify-center"
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

            <h1 className="mt-4 text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-400 bg-clip-text text-transparent">
                    {portfolioData.hero.name}
                </span>
            </h1>


            <h2 className="mt-4 min-h-[48px] text-xl font-medium text-sky-400 md:text-2xl">
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


            <p className="mt-8 text-lg leading-9 text-slate-400 mx-auto max-w-xl lg:mx-0">
              {portfolioData.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a href="#projects">
                    <Button>View Projects</Button>
                </a>

                <a href="/cv.pdf" download>
                <Button variant="secondary">
                    Download CV
                </Button>
                </a>
            </div>
            <div className="mt-10 flex justify-center gap-5 lg:justify-start">
                <a
                    
                    target="_blank"
                    href={portfolioData.social.github}
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
                className="relative z-20 flex items-center justify-center mt-12 lg:mt-0"
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                
            >



            {/* Background Glow */}
            <div className="absolute h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] md:h-[390px] md:w-[390px] lg:h-[400px] lg:w-[400px] xl:h-[430px] xl:w-[430px] rounded-full bg-sky-500/15 blur-[110px]" />

            {/* Glass Ring */}
            <motion.div
                className="absolute z-20 h-[280px] w-[280px]
                sm:h-[330px] sm:w-[330px]
                md:h-[370px] md:w-[370px]
                lg:h-[400px] lg:w-[400px]
                xl:h-[430px] xl:w-[430px]
                rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"                
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

                <motion.div
                className="relative"
                initial="rest"
                whileHover="hover"
                >

                {/* Scan Line */}
                <motion.div
                    className="absolute left-0 top-0 z-40 h-2 w-full rounded-full bg-cyan-300/70 blur-sm"
                    variants={{
                    rest: {
                        y: "-20%",
                        opacity: 0,
                    },
                    hover: {
                        y: "105%",
                        opacity: [0, 1, 1, 0],
                    },
                    }}
                    transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    }}
                />
                </motion.div>

            {/* Profile */}
            <motion.img
                src={portfolioData.hero.profileImage}
                alt="Profile"
                className="relative z-30
                h-64 w-64
                sm:h-72 sm:w-72
                md:h-80 md:w-80
                lg:h-[320px] lg:w-[320px]
                xl:h-[360px] xl:w-[360px]
                rounded-full border-4 border-sky-400 object-cover shadow-[0_0_60px_rgba(14,165,233,0.45)]"                
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
            onClick={() =>
                document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 hidden lg:block cursor-pointer"            
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