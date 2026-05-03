import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-electric">
        {eyebrow}
      </p>
      <h2
        className={`text-balance text-3xl font-semibold tracking-tight md:text-5xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-5 text-base leading-8 md:text-lg ${dark ? "text-white/70" : "text-slate-600"}`}>
        {subtitle}
      </p>
    </motion.div>
  );
}
