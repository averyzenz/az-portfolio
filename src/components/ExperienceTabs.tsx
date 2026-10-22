"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { Chapter } from "@/content";
import { Photo } from "./Photo";
import { PortfolioPanel } from "./PortfolioPanel";
import { Rich } from "./Rich";

type Props = {
  heading: string;
  label: string;
  chapters: (Chapter & { src: string | null })[];
};

export function ExperienceTabs({ heading, label, chapters }: Props) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = chapters[active];

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const last = chapters.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? active === last ? 0 : active + 1
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? active === 0 ? last : active - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-rose">{label}</p>
          <h2
            id="experience-heading"
            className="mt-2 font-display font-medium leading-none text-[clamp(44px,6vw,64px)]"
          >
            {heading}
          </h2>
        </div>
      </div>

      <div
        role="tablist"
        aria-label="Experience chapters"
        className="grid border-[1.5px] border-ink"
        style={{ gridTemplateColumns: `repeat(${chapters.length}, minmax(0, 1fr))` }}
      >
        {chapters.map((c, i) => {
          const selected = i === active;
          return (
            <button
              key={c.num}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`tab-${c.num}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${c.num}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
              className={`flex min-h-11 cursor-pointer flex-col items-start gap-1 px-3 py-3 text-left transition-colors duration-200 sm:flex-row sm:items-baseline sm:gap-3 sm:px-5 sm:py-4 ${
                i > 0 ? "border-l-[1.5px] border-ink" : ""
              } ${selected ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-blush"}`}
            >
              <span
                className={`font-display text-[22px] leading-none sm:text-[28px] ${selected ? "text-blush" : "text-rose"}`}
              >
                {c.num}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] sm:text-[13px]">{c.tab}</span>
            </button>
          );
        })}
      </div>

      <div
        id={`panel-${current.num}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.num}`}
        tabIndex={0}
        className="grid gap-10 pt-2 lg:grid-cols-2 lg:gap-12"
      >
        <div className="relative h-[300px] overflow-hidden bg-blush md:h-auto md:aspect-[16/9] lg:aspect-auto lg:min-h-[440px]">
          {chapters.map((c, i) => (
            <div
              key={c.num}
              aria-hidden={i !== active}
              className={`absolute inset-0 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              {c.portfolio ? (
                <PortfolioPanel portfolio={c.portfolio} active={i === active} />
              ) : c.photo ? (
                <Photo
                  src={c.src}
                  alt={c.photo.alt}
                  placeholder={c.photo.placeholder}
                  position={c.photo.position}
                  tone="blush"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              ) : null}
            </div>
          ))}
        </div>
        <div className="flex min-w-0 flex-col justify-center gap-[18px]">
          <p aria-hidden="true" className="font-display text-[clamp(64px,7vw,88px)] leading-none text-rose">
            {current.num}
          </p>
          <h3 className="font-display text-[clamp(30px,3.6vw,42px)] font-medium leading-[1.1]">{current.title}</h3>
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">{current.meta}</p>
          <p className="text-[17px] leading-[1.7] text-body sm:text-[18px]">
            <Rich text={current.body} />
          </p>
        </div>
      </div>
    </div>
  );
}
