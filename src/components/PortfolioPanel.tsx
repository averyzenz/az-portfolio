import type { Portfolio } from "@/content";

// Single-hue rose ramp, darkest for the largest slice. Validated as an ordinal
// ramp on white (monotone lightness, light end 3.6:1 against the surface).
const ramp = ["#4D1A2C", "#8C2F4F", "#C46A88"];

/** Typographic stand-in for a photo: allocation bar plus the list of holdings. */
export function PortfolioPanel({ portfolio }: { portfolio: Portfolio }) {
  const { label, holdings, allocation } = portfolio;
  return (
    <figure className="absolute inset-0 flex flex-col justify-between gap-4 border border-ink bg-paper p-5 sm:p-8">
      <figcaption className="flex items-baseline justify-between gap-4">
        <span className="eyebrow text-rose">{label}</span>
        <span className="font-display text-[clamp(28px,4vw,40px)] font-bold leading-none tracking-[-0.03em]">
          {holdings.length} <span className="text-[0.5em] font-medium italic">positions</span>
        </span>
      </figcaption>

      <div>
        <div aria-hidden="true" className="flex h-9 gap-0.5 sm:h-11">
          {allocation.map((slice, i) => (
            <div
              key={slice.label}
              className="flex items-center px-2 text-[13px] font-semibold text-paper sm:px-3 sm:text-[15px]"
              style={{ width: `${slice.percent}%`, background: ramp[i] }}
            >
              {slice.percent}%
            </div>
          ))}
        </div>
        <ul aria-label="Allocation" className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[12px] sm:text-[13px]">
          {allocation.map((slice, i) => (
            <li key={slice.label} className="flex items-center gap-2">
              <span aria-hidden="true" className="size-2.5" style={{ background: ramp[i] }} />
              <span>
                <span className="sr-only">{slice.percent}% </span>
                {slice.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ul
        aria-label="Holdings"
        className="grid grid-cols-4 border-t border-ink text-[13px] font-semibold tracking-[0.12em] sm:text-[15px]"
      >
        {holdings.map((ticker) => (
          <li key={ticker} className="border-b border-ink/15 py-2 sm:py-3">
            {ticker}
          </li>
        ))}
      </ul>
    </figure>
  );
}
