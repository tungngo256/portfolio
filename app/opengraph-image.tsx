import { ImageResponse } from "next/og";

export const alt = "Ngo Huu Thanh Tung — Front-End Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1a1a2e 0%, #000000 55%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#8b8ba7",
            marginBottom: 24,
          }}
        >
          Front-End Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          Ngo Huu Thanh Tung
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#c4c4d4",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Fast, accessible, beautiful web experiences — React · Next.js · SEO &
          Core Web Vitals
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 26,
            color: "#6c6c8a",
          }}
        >
          portfolio-corbin-dev.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
