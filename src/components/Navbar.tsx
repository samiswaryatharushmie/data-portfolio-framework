import Container from "./ui/Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold">
            Portfolio
          </h1>

          <ul className="flex flex-row gap-8 list-none">
            <li className="group cursor-pointer">
              <a
                href="#about"
                className="relative"
              >
                About

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
              <li className="group cursor-pointer">
                <a
                  href="#skills"
                  className="relative"
                >
                  Skills

                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>            
              <li className="group cursor-pointer">
                <a
                  href="#projects"
                  className="relative"
                >
                  Projects

                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>           
              <li className="group cursor-pointer">
                <a
                  href="#contact"
                  className="relative"
                >
                  Contact

                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            </ul>
        </nav>
      </Container>
    </header>
  );
}