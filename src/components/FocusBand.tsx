import { Fragment } from "react";
import { focusAreas } from "@/content";
import { Container } from "./Container";

export function FocusBand() {
  return (
    <div className="on-dark bg-ink text-paper">
      <Container>
        <ul
          aria-label="Focus areas"
          className="grid grid-cols-2 gap-x-6 gap-y-3 py-[22px] text-[12px] font-semibold uppercase tracking-[0.16em] sm:text-[13px] lg:flex lg:justify-between"
        >
          {focusAreas.map((area, i) => (
            <Fragment key={area}>
              {i > 0 && (
                <li aria-hidden="true" className="hidden text-petal lg:block">
                  ✦
                </li>
              )}
              <li>{area}</li>
            </Fragment>
          ))}
        </ul>
      </Container>
    </div>
  );
}
