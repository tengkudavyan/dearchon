type LogoProps = {
  inverted?: boolean;
};

export default function Logo({ inverted = false }: LogoProps) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Dearchon home">
      <span className={`text-lg font-semibold tracking-tight ${inverted ? "text-white" : "text-navy"}`}>
        Dearchon
      </span>
    </a>
  );
}
