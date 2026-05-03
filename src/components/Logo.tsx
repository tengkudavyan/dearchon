import Image from "next/image";

type LogoProps = {
  inverted?: boolean;
};

export default function Logo({ inverted = false }: LogoProps) {
  const logoSrc = inverted ? "/images/dearchon_logo_white.png" : "/images/dearchon_logo_dark.png";

  return (
    <a href="#home" className="group flex items-center" aria-label="Dearchon home">
      <Image
        src={logoSrc}
        alt="Dearchon"
        width={164}
        height={24}
        className="h-5 w-auto sm:h-6"
        priority
      />
    </a>
  );
}
