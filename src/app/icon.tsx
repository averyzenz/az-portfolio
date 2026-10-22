import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-fonts";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F4D6DD",
          color: "#111111",
          fontFamily: "Bodoni Moda",
          fontWeight: 700,
          fontSize: 34,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          paddingBottom: 4,
        }}
      >
        AZ
      </div>
    ),
    { ...size, fonts: await loadOgFonts() },
  );
}
