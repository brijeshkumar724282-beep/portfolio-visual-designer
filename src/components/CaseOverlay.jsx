import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseOverlay({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-ink/70 p-3 sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto max-w-4xl border-2 border-ink bg-paper"
          >
            <div
              className="flex items-center justify-between border-b-2 border-ink px-4 py-3 sm:px-6"
              style={{ backgroundColor: project.block }}
            >
              <span className="font-grotesk text-sm font-bold uppercase tracking-widest text-cream">
                {project.category} case study
              </span>
              <button
                onClick={onClose}
                className="border-2 border-cream px-3 py-1 font-grotesk text-sm font-bold text-cream transition-colors hover:bg-cream hover:text-ink"
              >
                Close X
              </button>
            </div>

            <img
              src={project.cover}
              alt={`${project.title} hero visual`}
              loading="lazy"
              className="h-64 w-full border-b-2 border-ink object-cover sm:h-96"
            />

            <div className="px-4 py-6 sm:px-8 sm:py-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-4xl uppercase sm:text-5xl">
                  {project.title}
                </h3>
                <span className="font-grotesk text-sm font-bold text-smoke">
                  {project.year}
                </span>
              </div>
              <p className="mt-1 font-grotesk text-base font-medium text-accent">
                {project.tagline}
              </p>

              <div className="mt-5 grid gap-3 border-2 border-ink bg-cream p-4 sm:grid-cols-3">
                <div>
                  <p className="font-grotesk text-xs font-bold uppercase tracking-widest text-smoke">
                    Client
                  </p>
                  <p className="mt-1 font-grotesk text-sm font-bold">{project.client}</p>
                </div>
                <div>
                  <p className="font-grotesk text-xs font-bold uppercase tracking-widest text-smoke">
                    Role
                  </p>
                  <p className="mt-1 font-grotesk text-sm font-bold">{project.role}</p>
                </div>
                <div>
                  <p className="font-grotesk text-xs font-bold uppercase tracking-widest text-smoke">
                    Year
                  </p>
                  <p className="mt-1 font-grotesk text-sm font-bold">{project.year}</p>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-smoke">{project.summary}</p>

              <h4 className="mt-7 font-display text-xl uppercase">Results</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                {project.outcomes.map((o) => (
                  <li
                    key={o}
                    className="border-2 border-ink bg-sun px-3 py-3 font-grotesk text-sm font-bold"
                  >
                    {o}
                  </li>
                ))}
              </ul>

              <h4 className="mt-7 font-display text-xl uppercase">Process shots</h4>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {project.shots.map((s) => (
                  <img
                    key={s}
                    src={s}
                    alt={`${project.title} process visual`}
                    loading="lazy"
                    className="h-44 w-full border-2 border-ink object-cover"
                  />
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="border-2 border-ink bg-cream px-3 py-1 font-grotesk text-xs font-bold uppercase tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="mt-7 inline-block border-2 border-ink bg-accent px-7 py-3 font-grotesk text-sm font-bold uppercase tracking-widest text-cream"
              >
                Start a similar project
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
