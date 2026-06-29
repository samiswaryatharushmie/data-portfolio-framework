import Container from "../components/ui/Container";
import AboutCard from "../components/about/AboutCard";
import { User, GraduationCap, Brain, Target } from "lucide-react";
import JourneyTimeline from "../components/about/JourneyTimeline";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 scroll-mt-20"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sky-400 font-medium tracking-widest uppercase">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Turning Data into
            <span className="text-sky-400"> Intelligent Solutions</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            I am an undergraduate passionate about Artificial Intelligence,
            Data Science and Software Engineering. I enjoy building modern,
            data-driven applications that solve real-world problems while
            continuously learning new technologies.
          </p>

        </div>
        <div className="mt-20 grid gap-6 md:grid-cols-2">

            <AboutCard
                icon={<User />}
                title="About Me"
                description="Passionate about building modern software solutions using AI, Data and Web technologies."
            />

            <AboutCard
                icon={<GraduationCap />}
                title="Education"
                description="Undergraduate student focused on Data Science, AI and Software Engineering."
            />

            <AboutCard
                icon={<Brain />}
                title="Currently Learning"
                description="Python, SQL, Machine Learning, React, FastAPI and modern development tools."
            />

            <AboutCard
                icon={<Target />}
                title="Career Goal"
                description="To become a professional AI / Data Engineer and build impactful intelligent systems."
            />

            </div>
         <JourneyTimeline />
      </Container>
    </section>
  );
}