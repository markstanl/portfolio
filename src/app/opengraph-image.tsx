import { ImageResponse } from "next/og";

export const alt = "Mark Stanley — Undergraduate AI Researcher at UW-Madison";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default link preview card, inherited by every route without its own image. */
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#333333",
        padding: "80px",
        borderLeft: "24px solid #afe1fd",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 92,
          fontWeight: 700,
          color: "#f2f2f2",
          letterSpacing: "-0.02em",
        }}
      >
        Mark Stanley
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 40,
          color: "#afe1fd",
          marginTop: 16,
        }}
      >
        Undergraduate AI Researcher @ UW-Madison
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 30,
          color: "#46c898",
          marginTop: 48,
        }}
      >
        markstanl.com
      </div>
    </div>,
    { ...size },
  );
}
