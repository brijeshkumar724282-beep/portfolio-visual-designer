import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center bg-accent font-display text-lg text-cream">
            M
          </span>
          <span className="font-grotesk text-sm font-bold tracking-wide">
            MAYA RAO
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-grotesk text-sm font-medium transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border-2 border-ink bg-ink px-4 py-2 font-grotesk text-sm font-bold text-paper transition-colors hover:bg-accent hover:border-accent"
          >
            Hire me
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center border-2 border-ink md:hidden"
          aria-label="Toggle menu"
        >
          <span className="font-grotesk text-lg font-bold">{open ? "X" : "="}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t-2 border-ink bg-paper md:hidden"
          >
            <div className="flex flex-col px-4 py-2">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-sand py-3 font-grotesk text-base font-bold"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="my-3 bg-accent px-4 py-3 text-center font-grotesk text-base font-bold text-cream"
              >
                Hire me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
