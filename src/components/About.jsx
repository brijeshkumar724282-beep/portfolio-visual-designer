import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CAPABILITIES, CLIENTS, STATS } from "../data/content.js";
import Marquee from "./Marquee.jsx";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-y-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="font-grotesk text-sm font-bold uppercase tracking-widest text-sun">
              About Maya
            </p>
            <h2 className="mt-2 font-display text-5xl uppercase leading-none sm:text-6xl">
              Design with a loud heart
            </h2>
            <div className="mt-6 overflow-hidden border-2 border-paper">
              <img
                src="https://picsum.photos/seed/designer-portrait/700/760"
                alt="Portrait of the designer at work"
                loading="lazy"
                className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="mt-5 leading-relaxed opacity-80">
              I help ambitious teams turn fuzzy ideas into sharp visual
              stories. My sweet spot sits where brand meets interface: systems
              with soul, screens with rhythm, launches people remember.
            </p>
            <p className="mt-3 leading-relaxed opacity-80">
              Previously with studios in Bengaluru and Berlin. Now independent,
              working with founders and cultural teams worldwide.
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl uppercase">Capabilities</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {CAPABILITIES.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                  className="border-2 border-paper bg-ink p-4 transition-colors hover:bg-accent"
                >
                  <p className="font-display text-lg uppercase">{c.title}</p>
                  <p className="mt-1 text-sm leading-relaxed opacity-80">{c.detail}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="mt-10 font-display text-2xl uppercase">
              Numbers that matter
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="border-2 border-paper p-4 text-center">
                  <p className="font-display text-3xl text-sun sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 font-grotesk text-xs font-bold uppercase tracking-widest opacity-80">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-center font-grotesk text-xs font-bold uppercase tracking-widest opacity-70">
            Trusted by teams at
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CLIENTS.map((c) => (
              <div
                key={c}
                className="border-2 border-paper px-4 py-4 text-center font-display text-lg uppercase tracking-wide opacity-90"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Marquee
        dark
        slow
        items={[
          "Available for Q1 2026",
          "Brand",
          "Interface",
          "Web",
          "Motion",
          "Lets talk",
        ]}
      />
    </section>
  );
}
