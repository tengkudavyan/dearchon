import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

export type Locale = "en" | "id";

type NavLabels = {
  services: string;
  build: string;
  process: string;
  why: string;
  portfolio: string;
  cta: string;
};

type NavItem = {
  key: keyof Pick<NavLabels, "services" | "build" | "process" | "why" | "portfolio">;
  href: string;
};

type NavbarProps = {
  labels: NavLabels;
  locale: Locale;
  menuOpen: boolean;
  navOverDark: boolean;
  navItems: readonly NavItem[];
  onLocaleChange: (locale: Locale) => void;
  onMenuToggle: () => void;
  onMenuClose: () => void;
};

export default function Navbar({
  labels,
  locale,
  menuOpen,
  navOverDark,
  navItems,
  onLocaleChange,
  onMenuToggle,
  onMenuClose
}: NavbarProps) {
  const navShellClass = navOverDark
    ? "border-white/20 bg-navy/75 shadow-glass"
    : "border-slate-200/80 bg-white/90 shadow-soft";
  const navLinkClass = navOverDark
    ? "text-white/80 hover:text-white"
    : "text-navy/80 hover:text-navy";
  const switcherClass = navOverDark ? "border-white/20 bg-white/10" : "border-slate-200 bg-slate-50";
  const inactiveLangClass = navOverDark
    ? "text-white/70 hover:text-white"
    : "text-slate-500 hover:text-navy";
  const activeLangClass = navOverDark
    ? "bg-white text-navy shadow-sm"
    : "bg-navy text-white shadow-sm";
  const navCtaClass = navOverDark
    ? "bg-white text-navy hover:bg-electric hover:text-white"
    : "bg-navy text-white hover:bg-electric";
  const mobileMenuClass = navOverDark ? "border-white/20 text-white" : "border-slate-200 text-navy";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex min-h-16 max-w-6xl items-center justify-between rounded-2xl border px-4 backdrop-blur-2xl transition-colors duration-300 md:px-6 ${navShellClass}`}
      >
        <Logo inverted={navOverDark} />
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className={`text-sm font-medium transition ${navLinkClass}`}>
              {labels[item.key]}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <div className={`flex rounded-xl border p-1 transition-colors ${switcherClass}`}>
            {(["en", "id"] as Locale[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => onLocaleChange(lang)}
                className={`h-9 min-w-11 rounded-lg text-xs font-bold transition ${
                  locale === lang ? activeLangClass : inactiveLangClass
                }`}
                aria-pressed={locale === lang}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className={`inline-flex min-h-10 items-center rounded-xl px-5 text-sm font-semibold transition ${navCtaClass}`}
          >
            {labels.cta}
          </a>
        </div>
        <button
          type="button"
          className={`grid h-11 w-11 place-items-center rounded-xl border transition ${mobileMenuClass} md:hidden`}
          onClick={onMenuToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>
      {menuOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-3xl border border-slate-200 bg-white p-4 shadow-soft md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={onMenuClose}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {labels[item.key]}
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3">
            {(["en", "id"] as Locale[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => onLocaleChange(lang)}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-bold ${
                  locale === lang ? "bg-navy text-white" : "bg-slate-50 text-slate-600"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            onClick={onMenuClose}
            className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-navy px-5 text-sm font-semibold text-white"
          >
            {labels.cta}
          </a>
        </div>
      )}
    </header>
  );
}
