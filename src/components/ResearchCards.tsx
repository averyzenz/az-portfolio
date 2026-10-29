"use client";

import { useState } from "react";
import type { ResearchNote } from "@/content";
import { Rich } from "./Rich";

// Phones: one swipeable row of every card. Tablet and up: a grid that shows
// the newest few (2 on tablet, 3 on desktop) until "Show all" is pressed.
const VISIBLE = 3;

export function ResearchCards({ notes }: { notes: ResearchNote[] }) {
  const [expanded, setExpanded] = useState(false);
  const collapsible = notes.length > VISIBLE;

  function hiddenClass(i: number) {
    if (expanded || !collapsible) return "";
    if (i >= VISIBLE) return "md:hidden";
    if (i === VISIBLE - 1) return "md:max-lg:hidden";
    return "";
  }

  return (
    <div className="flex flex-col gap-8">
      <ul
        id="research-list"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 lg:grid-cols-3"
      >
        {notes.map((note, i) => (
          <li key={note.href} className={`w-[85%] shrink-0 snap-start md:w-auto ${hiddenClass(i)}`}>
            <article className="flex h-full min-h-[280px] flex-col gap-3.5 bg-paper p-6 text-ink [--focus:var(--color-ink)] sm:p-7">
              <div className="flex justify-between gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-rose">
                <span>{note.type}</span>
                <span>
                  <Rich text={note.date} />
                </span>
              </div>
              {note.award && (
                <p className="self-start bg-blush px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-rose">
                  <span aria-hidden="true">✦ </span>
                  {note.award}
                </p>
              )}
              <h3 className="font-display text-[24px] font-medium leading-[1.2] sm:text-[26px]">
                <Rich text={note.title} />
              </h3>
              {note.source && <p className="-mt-1 text-[13px] italic text-body">{note.source}</p>}
              <p className="text-[15px] leading-[1.6] text-body">
                <Rich text={note.summary} />
              </p>
              <a
                href={note.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex min-h-11 items-center self-start text-[13px] font-semibold uppercase tracking-[0.12em] text-ink underline underline-offset-4 hover:text-rose"
              >
                {note.linkLabel}
                <span aria-hidden="true">&nbsp;↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
          </li>
        ))}
      </ul>
      {collapsible && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="research-list"
          onClick={() => setExpanded((e) => !e)}
          className="hidden min-h-11 items-center justify-center self-center border-[1.5px] border-paper px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-paper transition-colors duration-200 hover:bg-paper hover:text-ink md:inline-flex"
        >
          {expanded ? "Show less" : `Show all writing (${notes.length})`}
        </button>
      )}
    </div>
  );
}
