import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, PROJECTS } from "../data/content.js";

export default function Work({ onOpen }) {
  const [cat, setCat] = useState("All");
  const list =
    cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);

  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-grotesk text-sm font-bold uppercase tracking-widest text-accent">
            Selected work 2023 to 2025
          </p>
          <h2 className="mt-2 font-display text-5xl uppercase leading-none sm:text-7xl">
            The gallery
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-smoke">
          Filter by craft, then open any piece for the full story: goals,
          process notes and results.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`border-2 border-ink px-5 py-2 font-grotesk text-sm font-bold uppercase tracking-widest transition-colors ${
              cat === c ? "bg-ink text-paper" : "bg-cream hover:bg-sand"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
              className="group cursor-pointer border-2 border-ink bg-cream"
              onClick={() => onOpen(p)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.cover}
                  alt={`${p.title} cover`}
                  loading="lazy"
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute left-3 top-3 px-2 py-1 font-grotesk text-xs font-bold uppercase tracking-widest text-cream"
                  style={{ backgroundColor: p.block }}
                >
                  {p.category}
                </span>
                <span className="absolute bottom-3 right-3 grid h-11 w-11 place-items-center border-2 border-ink bg-paper font-grotesk text-xl font-bold opacity-0 transition-all duration-300 group-hover:opacity-100">
                  +
                </span>
              </div>
              <div className="border-t-2 border-ink p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl uppercase">{p.title}</h3>
                  <span className="shrink-0 font-grotesk text-xs font-bold text-smoke">
                    {p.year}
                  </span>
                </div>
                <p className="mt-1 font-grotesk text-sm text-smoke">{p.tagline}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
