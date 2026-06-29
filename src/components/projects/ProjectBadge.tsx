interface ProjectBadgeProps {
  text: string;
}

export default function ProjectBadge({
  text,
}: ProjectBadgeProps) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-sky-500/30
      bg-sky-500/10
      px-3
      py-1
      text-xs
      font-medium
      text-sky-300
      backdrop-blur-md
      "
    >
      {text}
    </span>
  );
}