import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-6 py-3 font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-sky-500 text-white hover:bg-sky-400 hover:shadow-[0_0_30px_rgba(14,165,233,0.45)]",
    secondary:
      "border border-slate-700 text-white hover:border-sky-400 hover:bg-slate-900",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}