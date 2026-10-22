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
  wordmark: "Avery Zenz",
  school: "Vanderbilt University",
  email: "avery.a.zenz@vanderbilt.edu",
  linkedin: "https://www.linkedin.com/in/avery-zenz/",
  resume: "/resume.pdf",
};

export const seo = {
  title: "Avery Zenz | Wealth and Asset Management",
  description:
    "Avery Zenz is a Vanderbilt senior seeking full-time roles in private credit, equity research, and real estate private equity, starting summer 2027.",
};

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#research" },
  { label: "About", href: "#about" },
];

export const hero = {
  label: "Wealth and Asset Management · Vanderbilt ’27",
  firstName: "Avery",
  lastName: "Zenz",
  // Shown when /public/resume.pdf exists, otherwise `primaryCtaFallback`.
  primaryCta: { label: "View Resume", href: "/resume.pdf" },
  primaryCtaFallback: { label: "Get in Touch", href: "#contact" },
  // Shown when at least one writing entry exists, otherwise `secondaryCtaFallback`.
  secondaryCta: { label: "Read My Writing", href: "#research" },
  secondaryCtaFallback: { label: "See My Experience", href: "#experience" },
  photo: {
    file: "headshot.jpg",
    alt: "Professional headshot of Avery Zenz",
    placeholder: "Professional headshot",
  },
};

export const focusAreas = [
  "Wealth Management",
  "Asset Management",
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
    label: "alternative funds analyzed across private credit, real estate, and direct lending",
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
  photo?: { file: string; alt: string; placeholder: string; position?: string };
  /** Shown instead of a photo: a designed panel of holdings and allocation. */
  portfolio?: Portfolio;
};

export type Portfolio = {
  label: string;
  holdings: string[];
  /** Largest first. Percentages should add up to 100. */
  allocation: { label: string; percent: number }[];
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
        "At Validus Capital, I analyzed 4+ alternative investment funds across private credit, real estate, and direct lending, evaluating IRR, MOIC, and distribution waterfall structures to support investment committee decisions. I presented 10+ weekly fund pitches and portfolio updates, and met senior professionals at 6 asset managers and institutions.",
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
      portfolio: {
        label: "Competition portfolio",
        holdings: ["AAPL", "NVDA", "ABBV", "TSLA", "JOBY", "VTWO", "ACWX", "GS"],
        allocation: [
          { label: "US large cap", percent: 60 },
          { label: "US small cap", percent: 20 },
          { label: "International", percent: 20 },
        ],
      },
    },
    {
      num: "03",
      tab: "Sweet Couture",
      title: "Building a business from the cost structure up",
      meta: "2022 to present · Co-Founder",
      body:
        "I co-founded a direct-to-consumer bakery and took it from concept to market with a 13-item menu of cookies, bars, and brownies. I set pricing and go-to-market strategy through cost-structure, competitive, and positioning analysis, built the brand identity, packaging, and ordering website from scratch, and grew our social following organically.",
      photo: {
        file: "sweet-couture.jpg",
        alt: "Chocolate chip cookies from Sweet Couture, the bakery Avery Zenz co-founded",
        placeholder: "Sweet Couture product photo",
      },
    },
  ] satisfies Chapter[],
};

/** Skills from the resume only. Add a tool here once she actually uses it. */
export const toolkit = {
  label: "Toolkit",
  heading: "What I work with",
  groups: [
    {
      title: "Investment analysis",
      items: [
        "Alternative investments: private credit, real estate, direct lending",
        "Fund performance: IRR, MOIC, distribution waterfalls",
        "Portfolio management",
        "Market and sector research",
        "Equity analysis",
      ],
    },
    {
      title: "Certifications and honors",
      items: [
        "CFA Institute Investment Foundations Certificate",
        "Digital Marketing Certificate",
        "Vanderbilt Dean’s List",
      ],
    },
    {
      title: "Tools and languages",
      items: ["Microsoft Excel", "Microsoft PowerPoint", "Spanish (conversational)"],
    },
  ],
};

export type ResearchNote = {
  type: string;
  date: string;
  title: string;
  /** Where it was published, shown under the title. */
  source?: string;
  /** Optional recognition, shown as a small badge. */
  award?: string;
  summary: string;
  href: string;
  linkLabel: string;
};

export const research = {
  label: "Writing",
  heading: "Published work",
  intro:
    "Articles I have written for the Vanderbilt Business Review and beyond, from how private equity creates value to building a professional network.",
  /**
   * The section, its nav link and the "Read My Writing" button only appear
   * when this list has at least one entry. `href` can be an outside article
   * or a PDF in /public/research/. Public information only: no confidential
   * Validus fund names or figures.
   */
  notes: [
    {
      type: "Private Equity",
      date: "November 2025",
      title: "Fixer-Uppers of Finance: How Private Equity Turns Struggling Companies into Gold",
      source: "Vanderbilt Business Review",
      summary:
        "How private equity firms buy, improve, and sell businesses, explained through a house-flipping lens, from venture capital and growth equity to leveraged buyouts and distressed investing.",
      href: "https://vanderbiltbusinessreview.com/2564/fixer-uppers-of-finance-how-private-equity-turns-struggling-companies-into-gold/",
      linkLabel: "Read the article",
    },
    {
      type: "Careers",
      date: "October 2025",
      title: "Turning Connections into Careers: Mastering LinkedIn Networking",
      source: "Vanderbilt Business Review",
      award: "Article of the Month",
      summary:
        "Why so many roles are filled through connections, and how a current profile, industry groups, and personalized outreach turn LinkedIn into real professional relationships.",
      href: "https://vanderbiltbusinessreview.com/2535/turning-connections-into-careers-mastering-linkedin-networking/",
      linkLabel: "Read the article",
    },
    {
      type: "Social Media",
      date: "July 2022",
      title: "Social Media: Where are the Youth Going?",
      source: "Two Minds Think Better Than One",
      summary:
        "A look at how Instagram, Snapchat, and TikTok shape the way younger generations communicate, learn, and spend their time.",
      href: "https://twominds.substack.com/p/social-media-where-are-the-youth",
      linkLabel: "Read the article",
    },
  ] as ResearchNote[],
};

export const about = {
  label: "About",
  heading: "Off the clock",
  bio: [
    "I study Human and Organizational Development with a minor in Business at Vanderbilt University, graduating May 2027. I studied Business in Barcelona and the Business of Fashion in Paris, Florence, and Milan.",
    "Outside the classroom, I have founded and led organizations from the ground up: the Pacific Mammal Rescue Project, a nonprofit that raised over $2,500, and the Future Entrepreneurs Club, which grew to more than 30 members. At Vanderbilt, I served as VP of PR and Marketing for the Panhellenic Council. I also started AZ Paintings, an independent art business.",
    "Away from work, I surf, ski, and read. I was also a competitive dancer and danced on the Vanderbilt Dance Team.",
  ],
  // Small list of outside links under the bio. Leave empty to hide it.
  links: [] as { label: string; title: string; source: string; href: string }[],
  photos: [
    { file: "painting.jpg", alt: "A spread of Avery Zenz's fashion-inspired paintings, including a Vogue cover and pink bows", placeholder: "Painting", tone: "ink" },
    { file: "travel.jpg", alt: "Avery Zenz tandem paragliding above a mountain town and lake", placeholder: "Travel", tone: "blush" },
    { file: "dance.jpg", alt: "Avery Zenz mid-leap on stage at a dance competition", placeholder: "Dance", tone: "petal" },
  ] as const,
};

export const contact = {
  heading: "Let’s",
  accent: "talk.",
  line: "Open to full-time financial analyst roles, starting summer 2027.",
  buttons: {
    email: "Email Avery",
    resume: "Download Resume",
    linkedin: "LinkedIn",
  },
};
