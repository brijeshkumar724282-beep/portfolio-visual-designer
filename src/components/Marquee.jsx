export default function Marquee({ items, dark = false, slow = false }) {
  const row = [...items, ...items];
  return (
    <div
      className={`overflow-hidden border-y-2 border-ink py-3 ${
        dark ? "bg-ink text-paper" : "bg-accent text-cream"
      }`}
    >
      <div
        className={`flex w-max items-center gap-8 whitespace-nowrap pr-8 ${
          slow ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-lg uppercase sm:text-xl">
              {item}
            </span>
            <span
              className={`inline-block h-3 w-3 rounded-full ${
                dark ? "bg-accent" : "bg-ink"
              }`}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
