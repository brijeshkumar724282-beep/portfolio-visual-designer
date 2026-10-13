import { motion } from "framer-motion";
import { STEPS } from "../data/content.js";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-grotesk text-sm font-bold uppercase tracking-widest text-accent">
        How we will work
      </p>
      <h2 className="mt-2 font-display text-5xl uppercase leading-none sm:text-7xl">
        Simple process, serious output
      </h2>

      <div className="relative mt-12">
        <div className="absolute bottom-0 left-[27px] top-0 hidden w-1 bg-ink md:block" />
        <div className="grid gap-5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: i % 2 === 0 ? -48 : 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative grid gap-4 md:grid-cols-12 md:items-stretch"
            >
              <div className="hidden md:col-span-1 md:flex md:justify-center">
                <span className="z-10 grid h-14 w-14 shrink-0 place-items-center border-2 border-ink bg-accent font-display text-lg text-cream">
                  {s.n}
                </span>
              </div>
              <div
                className={`border-2 border-ink p-5 sm:p-7 md:col-span-11 ${
                  i % 2 === 0 ? "bg-cream" : "bg-sand"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-3xl uppercase sm:text-4xl">
                    <span className="mr-3 text-accent md:hidden">{s.n}</span>
                    {s.title}
                  </h3>
                  <span className="border-2 border-ink bg-ink px-3 py-1 font-grotesk text-xs font-bold uppercase tracking-widest text-paper">
                    {s.meta}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl leading-relaxed text-smoke">{s.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
