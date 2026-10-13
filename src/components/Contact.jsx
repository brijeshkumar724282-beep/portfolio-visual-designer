import { motion } from "framer-motion";
import { SOCIALS } from "../data/content.js";

export default function Contact() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t-2 border-ink">
      <div className="bg-accent">
        <div className="mx-auto max-w-7xl px-4 py-16 text-cream sm:px-6 sm:py-20">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 font-grotesk text-sm font-bold uppercase tracking-widest"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-dot-ping absolute h-full w-full rounded-full bg-cream" />
              <span className="h-3 w-3 rounded-full bg-cream" />
            </span>
            Available for new work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-5xl uppercase leading-[0.95] sm:text-7xl"
          >
            Have a bold idea? Lets build it together.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="mailto:hello@mayarao.design"
              className="border-2 border-cream bg-ink px-8 py-4 font-grotesk text-sm font-bold uppercase tracking-widest text-paper transition-transform hover:-translate-y-1"
            >
              hello@mayarao.design
            </a>
            <a
              href="mailto:hello@mayarao.design?subject=Project%20inquiry"
              className="border-2 border-cream px-8 py-4 font-grotesk text-sm font-bold uppercase tracking-widest text-cream transition-transform hover:-translate-y-1"
            >
              Book a project call
            </a>
          </motion.div>
          <p className="mt-6 font-grotesk text-sm opacity-90">
            Based in Bengaluru. Replies within two working days. Booking
            projects for early 2026.
          </p>
        </div>
      </div>

      <div className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center bg-accent font-display text-lg text-cream">
                  M
                </span>
                <span className="font-grotesk text-sm font-bold tracking-wide">
                  MAYA RAO
                </span>
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed opacity-70">
                Visual designer for brand, interface and web. Loud color,
                honest type, work that ships.
              </p>
            </div>
            <div>
              <p className="font-grotesk text-xs font-bold uppercase tracking-widest opacity-60">
                Socials
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border-2 border-paper px-3 py-2 font-grotesk text-xs font-bold uppercase tracking-widest transition-colors hover:bg-accent hover:border-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-grotesk text-xs font-bold uppercase tracking-widest opacity-60">
                Sitemap
              </p>
              <div className="mt-3 flex flex-col gap-2 font-grotesk text-sm font-medium">
                <a href="#work" className="w-fit hover:text-sun">Work</a>
                <a href="#about" className="w-fit hover:text-sun">About</a>
                <a href="#process" className="w-fit hover:text-sun">Process</a>
                <a href="#top" className="w-fit hover:text-sun">Back to top</a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t-2 border-paper/20 pt-5 font-grotesk text-xs uppercase tracking-widest opacity-70">
            <span>2026 Maya Rao. All rights reserved.</span>
            <span>Made with solid color and strong opinions.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
