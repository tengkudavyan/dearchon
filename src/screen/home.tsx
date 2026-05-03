"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Code2,
  Globe2,
  Headphones,
  Layers3,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Route,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Utensils,
  UsersRound,
  Wrench
} from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import DashboardBackdrop from "@/components/DashboardBackdrop";
import Logo from "@/components/Logo";
import Navbar, { type Locale } from "@/components/Navbar";
import PortfolioCard from "@/components/PortfolioCard";
import SectionHeading from "@/components/SectionHeading";
import en from "@/content/en.json";
import id from "@/content/id.json";
import portfolioList from "@/content/portfolio.json";

type Content = typeof en;

const content: Record<Locale, Content> = { en, id };

const navItems = [
  { key: "services", href: "#services" },
  { key: "build", href: "#build" },
  { key: "process", href: "#process" },
  { key: "why", href: "#why" },
  { key: "portfolio", href: "#portfolio" }
] as const;

const serviceIcons = [Sparkles, Code2, MonitorSmartphone, Smartphone, PenTool, Wrench];
const buildIcons = [
  UsersRound,
  BriefcaseBusiness,
  ShoppingBag,
  Globe2,
  Building2,
  CalendarCheck,
  Layers3,
  Rocket,
  Utensils
];
const advantageIcons = [Route, ShieldCheck, Sparkles, Headphones];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function HomeScreen() {
  const [locale, setLocale] = useState<Locale>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [navOverDark, setNavOverDark] = useState(true);
  const t = content[locale];

  useEffect(() => {
    let frame = 0;

    const updateNavTheme = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const sampleY = 52;
        const darkSections = Array.from(document.querySelectorAll("section.dark-panel"));
        const isOverDark = darkSections.some((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= sampleY && rect.bottom >= sampleY;
        });

        setNavOverDark(isOverDark);
      });
    };

    updateNavTheme();
    window.addEventListener("scroll", updateNavTheme, { passive: true });
    window.addEventListener("resize", updateNavTheme);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateNavTheme);
      window.removeEventListener("resize", updateNavTheme);
    };
  }, []);

  const footerLinks = useMemo(
    () => [
      { label: t.nav.services, href: "#services" },
      { label: t.nav.build, href: "#build" },
      { label: t.nav.process, href: "#process" },
      { label: t.nav.portfolio, href: "#portfolio" },
      { label: t.nav.contact, href: "#contact" }
    ],
    [t]
  );

  return (
    <main id="home" className="bg-white">
      <Navbar
        labels={t.nav}
        locale={locale}
        menuOpen={menuOpen}
        navItems={navItems}
        navOverDark={navOverDark}
        onLocaleChange={setLocale}
        onMenuClose={() => setMenuOpen(false)}
        onMenuToggle={() => setMenuOpen((value) => !value)}
      />

      <section className="dark-panel relative overflow-hidden pt-24 text-white md:pt-24">
        <DashboardBackdrop className="pointer-events-none absolute left-1/2 top-[11.745rem] z-0 w-[min(1180px,118vw)] -translate-x-1/2 opacity-20 md:top-[9.5175rem] md:opacity-20" />
        <div className="section-shell relative z-10 flex min-h-[820px] flex-col justify-center pb-6 text-center md:min-h-[900px] md:pb-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto max-w-5xl"
          >
            <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white/80 sm:text-sm">
              <Sparkles className="hidden h-4 w-4 text-electric sm:block" aria-hidden="true" />
              {t.hero.eyebrow}
            </span>
            <h1 className="text-balance mt-8 text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl">
              {t.hero.title}
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton href="#contact" dark>
                {t.hero.primary}
              </PrimaryButton>
              <SecondaryButton href="#process" dark>
                {t.hero.secondary}
              </SecondaryButton>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.18, duration: 0.65, ease: "easeOut" }}
            className="glass-dark mx-auto mt-14 grid w-full max-w-3xl grid-cols-3 overflow-hidden rounded-3xl"
          >
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="border-r border-white/20 px-2 py-5 last:border-r-0 sm:px-6 sm:py-6">
                <p className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-[11px] font-medium leading-tight text-white/60 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="dark-panel py-24 text-white md:py-32">
        <div className="section-shell">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            subtitle={t.services.subtitle}
            dark
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="glass-dark rounded-3xl p-7"
                >
                  <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-electric text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">{service.title}</h3>
                  <p className="mt-4 leading-7 text-white/60">{service.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="build" className="bg-white py-24 md:py-32">
        <div className="section-shell">
          <SectionHeading eyebrow={t.build.eyebrow} title={t.build.title} subtitle={t.build.subtitle} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.build.items.map((item, index) => {
              const Icon = buildIcons[index];
              return (
                <motion.article
                  key={item}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.03 }}
                  className="glass-light group flex min-h-32 items-center gap-5 rounded-3xl p-6 transition hover:-translate-y-1 hover:border-electric/30"
                >
                  <div className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-mist text-electric transition group-hover:bg-electric group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-navy">{item}</h3>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="dark-panel py-24 text-white md:py-32">
        <div className="section-shell">
          <SectionHeading
            eyebrow={t.process.eyebrow}
            title={t.process.title}
            subtitle={t.process.subtitle}
            dark
          />
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            {t.process.steps.map((step, index) => (
              <motion.article
                key={step.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.035 }}
                className={`glass-dark relative rounded-3xl p-7 ${
                  index === t.process.steps.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-bold text-navy">
                  {index + 1}
                </span>
                <h3 className="mt-7 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/60">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-white py-24 md:py-32">
        <div className="section-shell">
          <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle} />
          <div className="grid gap-5 lg:grid-cols-4">
            {t.why.advantages.map((advantage, index) => {
              const Icon = advantageIcons[index];
              return (
                <motion.article
                  key={advantage.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="rounded-3xl border border-slate-100 bg-white p-7 shadow-soft"
                >
                  <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-navy text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-navy">{advantage.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{advantage.description}</p>
                </motion.article>
              );
            })}
          </div>
          {/* Temporarily hidden.
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="mt-6 grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft md:grid-cols-3"
          >
            {t.why.stats.map((stat) => (
              <div key={stat.label} className="border-slate-100 px-8 py-8 md:border-r last:md:border-r-0">
                <p className="text-5xl font-semibold tracking-tight text-electric">{stat.value}</p>
                <p className="mt-3 font-medium text-slate-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          */}
        </div>
      </section>

      <section id="portfolio" className="dark-panel py-24 text-white md:py-32">
        <div className="section-shell">
          <SectionHeading
            eyebrow={t.portfolio.eyebrow}
            title={t.portfolio.title}
            subtitle={t.portfolio.description}
            dark
          />
          <div className="grid gap-6">
            {portfolioList.map((portfolio) => (
              <PortfolioCard
                key={portfolio.id}
                project={portfolio.project}
                url={portfolio.url}
                description={portfolio.description[locale]}
                tags={portfolio.tags}
                cta={t.portfolio.cta}
                href={portfolio.href}
                desktopImage={portfolio.images.desktop}
                mobileImage={portfolio.images.mobile}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-24 md:py-32">
        <div className="section-shell">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-5xl rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-soft md:p-14"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-electric">
              {t.contact.eyebrow}
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-navy md:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">{t.contact.subtitle}</p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={t.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white transition hover:bg-electric"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                {t.contact.whatsapp}
              </a>
              <a
                href={t.contact.emailUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-navy transition hover:border-electric hover:text-electric"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                {t.contact.email}
              </a>
            </div>
            <div className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-3 rounded-2xl bg-mist px-5 py-4 text-sm font-medium text-slate-700">
              <CheckCircle2 className="h-5 w-5 flex-none text-electric" aria-hidden="true" />
              <span>{t.contact.note}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="section-shell grid gap-10 md:grid-cols-[1fr_auto_auto] md:items-start">
          <div>
            <Logo />
            <p className="mt-5 max-w-md leading-7 text-slate-600">{t.footer.description}</p>
          </div>
          <div className="grid gap-3">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-navy">
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-navy">{t.footer.contact}</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <a href={t.contact.emailUrl} className="hover:text-navy">
                {t.contact.emailAddress}
              </a>
              <a href={t.contact.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-navy">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
