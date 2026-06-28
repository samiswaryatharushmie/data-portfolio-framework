import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-xl bg-sky-500 px-6 py-3 font-medium transition hover:bg-sky-400">
      {children}
    </button>
  );
}