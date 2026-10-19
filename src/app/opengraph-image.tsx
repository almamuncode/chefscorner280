import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
export const alt = "Chef’s Corner · Lunch, Dinner & Catering · Pittston, PA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function Image() {
  const font = await readFile(
    path.join(process.cwd(), "src/app/fonts/oswald-semibold.ttf"),
  );
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#faf7f2",
        color: "#191919",
        padding: "65px 80px",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Oswald",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
        }}
      >
        <span>CHEF’S CORNER</span>
        <span>PITTSTON, PA · EST. 2016</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 100,
          lineHeight: 1.1,
          letterSpacing: -3,
        }}
      >
        <span>GOOD FOOD. GREAT COMPANY.</span>
        <span style={{ color: "#a33c2f" }}>YOUR CORNER.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 23,
          borderTop: "1px solid #cfc9bd",
          paddingTop: 22,
        }}
      >
        <span>LUNCH · DINNER · CATERING</span>
        <span>570-569-2591 · B.Y.O.B.</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Oswald", data: font, weight: 600, style: "normal" }],
    },
  );
}
