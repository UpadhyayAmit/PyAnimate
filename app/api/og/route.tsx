import { ImageResponse } from "next/og";

/**
 * /api/og?title=...&eyebrow=... — raster (1200×630 PNG) social card.
 * Used as the per-item cover image in the RSS feeds (dev.to / Medium pick up
 * a raster cover; SVGs are unreliable as covers). Title/eyebrow come from the
 * query string so one route serves every track and lesson.
 *
 * Lives under /api so the next-intl 'always' locale middleware doesn't redirect
 * it to /<locale>/og (proxy.ts bypasses /api/*).
 */

export const contentType = "image/png";
const SIZE = { width: 1200, height: 630 };

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") ?? "PyAnimate").slice(0, 120);
  const eyebrow = (searchParams.get("eyebrow") ?? "Learn Python, visually").slice(0, 80);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0b1120 0%, #0f172a 60%, #0b1120 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div style={{ width: "56px", height: "10px", background: "#38bdf8", borderRadius: "6px", display: "flex" }} />
          <div style={{ color: "#38bdf8", fontSize: "30px", fontWeight: 600, letterSpacing: "1px" }}>{eyebrow}</div>
        </div>

        <div
          style={{
            color: "#f8fafc",
            fontSize: title.length > 48 ? "70px" : "88px",
            fontWeight: 800,
            lineHeight: 1.05,
            display: "flex",
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "44px", height: "44px", background: "#38bdf8", borderRadius: "12px", display: "flex" }} />
            <div style={{ color: "#f8fafc", fontSize: "36px", fontWeight: 700 }}>PyAnimate</div>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "28px" }}>pyanimate.com</div>
        </div>
      </div>
    ),
    {
      ...SIZE,
      headers: { "Cache-Control": "public, max-age=31536000, immutable" },
    },
  );
}
