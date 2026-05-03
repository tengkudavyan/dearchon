import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  dark?: boolean;
};

export function PrimaryButton({ href, children, dark = false }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition ${
        dark
          ? "bg-white text-navy hover:bg-electric hover:text-white"
          : "bg-navy text-white shadow-soft hover:bg-electric"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export function SecondaryButton({ href, children, dark = false }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-semibold transition ${
        dark
          ? "border-white/20 bg-white/8 text-white backdrop-blur-xl hover:border-white/40"
          : "border-slate-200 bg-white text-navy shadow-sm hover:border-electric hover:text-electric"
      }`}
    >
      {children}
    </a>
  );
}
