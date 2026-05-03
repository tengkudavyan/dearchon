import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type PortfolioCardProps = {
  project: string;
  url: string;
  description: string;
  tags: string[];
  cta: string;
  href: string;
  desktopImage: string;
  mobileImage: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function PortfolioCard({
  project,
  url,
  description,
  tags,
  cta,
  href,
  desktopImage,
  mobileImage
}: PortfolioCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="glass-dark overflow-hidden rounded-[2rem]"
    >
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-7 md:p-10">
          <div className="mb-8 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-electric">
            {url}
          </div>
          <h3 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{project}</h3>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-navy transition hover:bg-electric hover:text-white"
          >
            {cta}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="relative min-h-[420px] overflow-hidden border-t border-white/10 p-5 lg:border-l lg:border-t-0">
          <img
            src={desktopImage}
            alt={`${project} desktop website screenshot`}
            className="mt-6 w-full rounded-[1.25rem] border border-white/20 shadow-glass"
            draggable={false}
          />
          <img
            src={mobileImage}
            alt={`${project} mobile website screenshot`}
            className="absolute bottom-7 right-7 w-[26%] min-w-28 rounded-[1.35rem] border border-white/30 shadow-glass"
            draggable={false}
          />
        </div>
      </div>
    </motion.article>
  );
}
