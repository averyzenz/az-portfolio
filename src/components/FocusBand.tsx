import { Fragment } from "react";
import { focusAreas } from "@/content";
import { Container } from "./Container";

const star = (
  <span aria-hidden="true" className="text-petal">
    ✦
  </span>
);

/**
 * Black band of focus areas. Scrolls like a ticker tape and pauses on hover.
 * With reduced motion it falls back to a static row.
 */
export function FocusBand() {
  // Repeat the list so one half of the track is always wider than the screen.
  const run = [...focusAreas, ...focusAreas];

  return (
    <div className="on-dark bg-ink text-paper">
      <ul className="sr-only">
        {focusAreas.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>

      <div className="marquee overflow-hidden motion-reduce:hidden" aria-hidden="true">
        <div className="marquee-track flex w-max py-[22px] text-[12px] font-semibold uppercase tracking-[0.16em] sm:text-[13px]">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14">
              {run.map((area, i) => (
                <Fragment key={`${area}-${i}`}>
                  <span className="whitespace-nowrap">{area}</span>
                  {star}
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Container className="hidden motion-reduce:block">
        <div
          aria-hidden="true"
          className="flex flex-wrap justify-between gap-x-8 gap-y-3 py-[22px] text-[12px] font-semibold uppercase tracking-[0.16em] sm:text-[13px]"
        >
          {focusAreas.map((area) => (
            <span key={area} className="whitespace-nowrap">
              {area}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
