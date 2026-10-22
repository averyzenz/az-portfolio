/**
 * All site copy and data lives here.
 *
 * Formatting inside any text string:
 *   **bold**        renders as semibold text
 *   [placeholder]   renders with a dashed outline so missing info is obvious.
 *                   Replace the brackets with real content before launch.
 *
 * Images: put files in /public/images using the `file` names below. If a file
 * exists it is shown automatically; otherwise a palette placeholder is shown.
 *
 * Resume: drop the PDF at /public/resume.pdf. Until it exists, resume buttons
 * are hidden and the header button links to the contact section instead.
 *
 * House style: no em dashes, no invented numbers.
 */

export const profile = {
  name: "Avery Zenz",
  wordmark: "ZENZ",
  school: "Vanderbilt University",
  email: "avery.a.zenz@vanderbilt.edu",
  linkedin: "https://www.linkedin.com/in/avery-zenz/",
  resume: "/resume.pdf",
};

export const seo = {
  title: "Avery Zenz | Wealth and Asset Management",
  description:
    "Avery Zenz is a Vanderbilt senior seeking full-time roles in private credit, equity research and real estate private equity, starting summer 2027.",
};

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
];

export const hero = {
  label: "Wealth and Asset Management · Vanderbilt ’27",
  firstName: "Avery",
  lastName: "Zenz",
  intro:
    "Seeking full-time roles in **private credit, equity research and real estate private equity**, starting summer 2027.",
  // Shown when /public/resume.pdf exists, otherwise `primaryCtaFallback`.
  primaryCta: { label: "Download Resume", href: "/resume.pdf" },
  primaryCtaFallback: { label: "Get in Touch", href: "#contact" },
  // Shown when at least one research note exists, otherwise `secondaryCtaFallback`.
  secondaryCta: { label: "Read My Research", href: "#research" },
  secondaryCtaFallback: { label: "See My Experience", href: "#experience" },
  photo: {
    file: "headshot.jpg",
    alt: "Professional headshot of Avery Zenz",
    placeholder: "Professional headshot",
  },
};

export const focusAreas = [
  "Private Credit",
  "Equity Research",
  "Real Estate PE",
  "Sector Analysis",
];

export const statement = {
  label: "How I think",
  lead: "I look at businesses the way an owner would,",
  accent: "because I have built them.",
};

export const stats = [
  {
    value: "4+",
    label: "alternative funds analyzed across private credit, real estate and direct lending",
  },
  {
    value: "10+",
    label: "fund pitches and portfolio updates to an investment committee",
  },
  {
    value: "8",
    label: "equity positions managed in a firm-wide stock picking competition",
  },
  {
    value: "CFA",
    label: "Institute Investment Foundations Certificate",
  },
];

export type Chapter = {
  num: string;
  tab: string;
  title: string;
  meta: string;
  body: string;
  /** `position` is an optional focal point for cropping, e.g. "50% 30%". */
  photo: { file: string; alt: string; placeholder: string; position?: string };
};

export const experience = {
  label: "Experience",
  heading: "The story so far",
  chapters: [
    {
      num: "01",
      tab: "Validus Capital",
      title: "Inside the investment committee",
      meta: "Summer 2026 · Wealth Management Intern",
      body:
        "At Validus Capital, I analyzed 4+ alternative investment funds across private credit, real estate and direct lending, evaluating IRR, MOIC and distribution waterfall structures to support investment committee decisions. I presented 10+ weekly fund pitches and portfolio updates, and met senior professionals at 6 asset managers and institutions.",
      photo: {
        file: "validus.jpg",
        alt: "Avery Zenz with members of the Validus Capital team in front of the firm's sign",
        placeholder: "Internship photo",
        position: "50% 36%",
      },
    },
    {
      num: "02",
      tab: "Equity Portfolio",
      title: "Reading markets from the top down",
      meta: "Summer 2026 · Firm-wide Stock Picking Competition",
      body:
        "I managed an 8-position diversified equity portfolio in a firm-wide stock picking competition, delivering weekly performance analysis and market outlook briefings to senior investment professionals.",
      photo: {
        file: "portfolio.jpg",
        alt: "Chart of Avery Zenz's stock picking competition portfolio",
        placeholder: "Portfolio performance chart",
      },
    },
    {
      num: "03",
      tab: "Sweet Couture",
      title: "Building a business from the cost structure up",
      meta: "2022 to present · Co-Founder",
      body:
        "I co-founded a direct-to-consumer bakery and took it from concept to market. I set pricing and go-to-market strategy through cost-structure, competitive and positioning analysis, built the brand identity, packaging and e-commerce site from scratch, and grew our social following organically.",
      photo: {
        file: "sweet-couture.jpg",
        alt: "Pastries from Sweet Couture, the bakery Avery Zenz co-founded",
        placeholder: "Sweet Couture product photo",
      },
    },
  ] satisfies Chapter[],
};

export type ResearchNote = {
  type: string;
  date: string;
  title: string;
  summary: string;
  href: string;
  linkLabel: string;
};

export const research = {
  label: "Research",
  heading: "Market notes",
  intro:
    "Sector and investment analysis I write on my own time. Each note states the thesis, the numbers behind it, and the risks.",
  /**
   * The Research section, its nav link and the "Read My Research" button only
   * appear once this list has at least one note. Put each PDF in
   * /public/research/ and add an entry like:
   *
   * {
   *   type: "Sector Note",              // or "Equity Pitch", "Private Markets"
   *   date: "November 2026",
   *   title: "Data center REITs: power is the new land",
   *   summary: "Two sentences on the thesis and what drives it.",
   *   href: "/research/sector-note.pdf",
   *   linkLabel: "Read the note (PDF)",
   * },
   *
   * Public information only: no confidential Validus fund names or figures.
   */
  notes: [] as ResearchNote[],
};

export const about = {
  label: "About",
  heading: "Off the clock",
  bio: [
    "I study Human and Organizational Development with a minor in Business at Vanderbilt, graduating May 2027. I studied business in Barcelona and the business of fashion in Paris, Florence and Milan.",
    "I have been building things for a while: I founded a marine mammal rescue nonprofit that raised $2,500+ and an entrepreneurs club that grew to 30+ members, and I led PR and marketing for Vanderbilt’s Panhellenic Council. Away from work, I paint, surf and ski.",
  ],
  photos: [
    { file: "painting.jpg", alt: "One of Avery Zenz's paintings", placeholder: "Painting", tone: "ink" },
    { file: "travel.jpg", alt: "Avery Zenz traveling in Europe", placeholder: "Travel", tone: "blush" },
    { file: "surf.jpg", alt: "Avery Zenz surfing", placeholder: "Surf or ski", tone: "petal" },
  ] as const,
};

export const contact = {
  heading: "Let’s",
  accent: "talk.",
  line: "Open to full-time roles in wealth and asset management, starting summer 2027.",
  buttons: {
    email: "Email Avery",
    resume: "Download Resume",
    linkedin: "LinkedIn",
  },
};
