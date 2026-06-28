import Container from "./ui/Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold">
            Portfolio
          </h1>

          <ul className="flex flex-row gap-8 list-none">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}