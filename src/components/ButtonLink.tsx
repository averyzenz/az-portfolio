import type { AnchorHTMLAttributes } from "react";

type Variant = "solid" | "outline" | "solid-light" | "outline-light";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper border-ink hover:bg-rose hover:border-rose",
  outline: "border-ink text-ink hover:bg-ink hover:text-paper",
  "solid-light": "bg-blush text-ink border-blush hover:bg-paper hover:border-paper",
  "outline-light": "border-paper text-paper hover:bg-paper hover:text-ink",
};

export function ButtonLink({
  variant = "solid",
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a
      {...props}
      className={`inline-flex min-h-11 items-center justify-center border-[1.5px] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 ${variants[variant]} ${className}`}
    />
  );
}
