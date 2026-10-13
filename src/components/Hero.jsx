import { motion } from "framer-motion";
import Marquee from "./Marquee.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="pt-[65px]">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="border-2 border-ink bg-cream px-3 py-1 font-grotesk text-xs font-bold uppercase tracking-widest">
            Visual Designer
          </span>
          <span className="flex items-center gap-2 border-2 border-ink bg-cream px-3 py-1 font-grotesk text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-dot-ping absolute h-full w-full rounded-full bg-moss" />
              <span className="h-2.5 w-2.5 rounded-full bg-moss" />
            </span>
            Open for projects
          </span>
          <span className="font-grotesk text-xs font-medium uppercase tracking-widest text-smoke">
            Based in Bengaluru, working worldwide
          </span>
        </motion.div>

        <h1 className="mt-6 font-display uppercase leading-[0.9]">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="block text-[15vw] sm:text-[11vw] lg:text-[8.5rem]"
          >
            Bold work
          </motion.span>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-outline block text-[15vw] sm:text-[11vw] lg:text-[8.5rem]"
          >
            for loud
          </motion.span>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="block text-[15vw] sm:text-[11vw] lg:text-[8.5rem]"
          >
            Brands<span className="text-accent">.</span>
          </motion.span>
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="max-w-xl text-lg leading-relaxed text-smoke lg:col-span-5"
          >
            I am Maya Rao. I design identities, interfaces and websites with
            strong color, big type and a point of view. Eight years, sixty
            plus launches, one rule: never boring.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="flex flex-wrap gap-3 lg:col-span-7 lg:justify-end"
          >
            <a
              href="#work"
              className="border-2 border-ink bg-accent px-7 py-3 font-grotesk text-sm font-bold uppercase tracking-widest text-cream transition-transform hover:-translate-y-1"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="border-2 border-ink bg-cream px-7 py-3 font-grotesk text-sm font-bold uppercase tracking-widest transition-transform hover:-translate-y-1"
            >
              Book a call
            </a>
          </motion.div>
        </div>

        {/* Featured visual collage */}
        <div className="mt-12 grid gap-4 pb-14 sm:grid-cols-12">
          <motion.figure
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="border-2 border-ink bg-cream p-3 sm:col-span-7"
          >
            <img
              src="https://picsum.photos/seed/hero-main/1000/620"
              alt="Featured brand project collage"
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80"
            />
            <figcaption className="flex items-center justify-between px-1 pt-3 font-grotesk text-xs font-bold uppercase tracking-widest">
              <span>Citrus Bank identity</span>
              <span className="bg-ink px-2 py-1 text-paper">Brand</span>
            </figcaption>
          </motion.figure>

          <div className="grid gap-4 sm:col-span-5">
            <motion.figure
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-2 border-ink bg-sun p-3"
            >
              <img
                src="https://picsum.photos/seed/hero-circle/700/440"
                alt="Festival motion identity still"
                loading="lazy"
                className="h-40 w-full rounded-full border-2 border-ink object-cover sm:h-44"
              />
              <figcaption className="px-1 pt-3 font-grotesk text-xs font-bold uppercase tracking-widest">
                Pulse Fest motion system
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 40, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-2 border-ink bg-ink p-3 text-paper"
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://picsum.photos/seed/hero-small/400/400"
                  alt="App interface detail"
                  loading="lazy"
                  className="h-24 w-24 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-2xl">60+</p>
                  <p className="font-grotesk text-xs font-medium uppercase tracking-widest opacity-80">
                    Launches across brand, app and web
                  </p>
                </div>
              </div>
            </motion.figure>
          </div>
        </div>
      </div>

      <Marquee
        items={[
          "Brand Identity",
          "Interface Design",
          "Design Systems",
          "Art Direction",
          "Motion",
          "Web Design",
        ]}
      />
    </section>
  );
}
