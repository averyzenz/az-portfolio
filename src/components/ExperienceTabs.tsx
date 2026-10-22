"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { Chapter } from "@/content";
import { Photo } from "./Photo";
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
    <div className="flex flex-col gap-10">
      <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-rose">{label}</p>
          <h2
            id="experience-heading"
            className="mt-2 font-display font-medium leading-none text-[clamp(44px,6vw,64px)]"
          >
            {heading}
          </h2>
        </div>
        <div role="tablist" aria-label="Experience chapters" className="flex flex-wrap gap-2">
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
                className={`min-h-11 cursor-pointer border-[1.5px] border-ink px-[18px] py-3 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 ${
                  selected ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-blush"
                }`}
              >
                {c.num} {c.tab}
              </button>
            );
          })}
        </div>
      </div>

      <div
        id={`panel-${current.num}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.num}`}
        tabIndex={0}
        className="grid gap-10 border-t border-ink pt-10 lg:grid-cols-2 lg:gap-12"
      >
        <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/9] bg-blush lg:aspect-auto lg:min-h-[440px]">
          {chapters.map((c, i) => (
            <div
              key={c.num}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Photo
                src={c.src}
                alt={c.photo.alt}
                placeholder={c.photo.placeholder}
                position={c.photo.position}
                tone="blush"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
        <div key={current.num} className="animate-fade-in flex min-w-0 flex-col justify-center gap-[18px]">
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
