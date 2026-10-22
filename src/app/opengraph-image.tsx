import { ImageResponse } from "next/og";
import { hero, profile } from "@/content";
import { loadOgFonts } from "@/lib/og-fonts";

export const alt = `${profile.name}, wealth and asset management`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FFFFFF",
          color: "#111111",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "64px 72px",
            gap: 28,
          }}
        >
          <div
            style={{
              fontFamily: "Work Sans",
              fontWeight: 600,
              fontSize: 18,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8C2F4F",
            }}
          >
            {hero.label}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Bodoni Moda",
              fontWeight: 700,
              fontSize: 168,
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
            }}
          >
            <span>{hero.firstName}</span>
            <span>{hero.lastName}</span>
          </div>
          <div style={{ fontFamily: "Work Sans", fontWeight: 600, fontSize: 24, color: "#2B2B2B" }}>
            Private Credit · Equity Research · Real Estate PE
          </div>
        </div>
        <div
          style={{
            width: 300,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            background: "#F4D6DD",
          }}
        >
          <div
            style={{
              fontFamily: "Bodoni Moda",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: 150,
              lineHeight: 1,
              color: "#8C2F4F",
              marginBottom: 20,
            }}
          >
            AZ
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await loadOgFonts() },
  );
}
