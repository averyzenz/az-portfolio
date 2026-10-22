import Image from "next/image";

export type Tone = "blush" | "petal" | "ink";

const tones: Record<Tone, string> = {
  blush: "bg-blush text-plum",
  petal: "bg-petal text-plum",
  ink: "bg-ink text-blush",
};

type Props = {
  src: string | null;
  alt: string;
  placeholder: string;
  tone?: Tone;
  sizes: string;
  priority?: boolean;
  className?: string;
  labelPosition?: "center" | "bottom";
  /** CSS object-position, e.g. "50% 30%", to keep the subject in frame when cropped. */
  position?: string;
};

/**
 * Shows the photo if it exists in /public/images, otherwise a block in the
 * site palette labeled with what belongs there. Fills its parent, which must
 * set a size and `position: relative`.
 */
export function Photo({
  src,
  alt,
  placeholder,
  tone = "petal",
  sizes,
  priority,
  className = "",
  labelPosition = "center",
  position,
}: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
        style={position ? { objectPosition: position } : undefined}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${placeholder} (photo coming soon)`}
      className={`absolute inset-0 flex p-4 text-center text-[11px] uppercase tracking-[0.14em] sm:text-[13px] ${tones[tone]} ${
        labelPosition === "bottom" ? "items-end justify-start text-left" : "items-center justify-center"
      } ${className}`}
    >
      <span aria-hidden="true">[{placeholder}]</span>
    </div>
  );
}
