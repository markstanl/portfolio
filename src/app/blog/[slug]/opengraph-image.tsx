import { ImageResponse } from "next/og";
import type { SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

export const alt = "Blog post by Mark Stanley";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TITLE_QUERY = `*[slug.current == $slug][0]{title, publishedIn, _type}`;

/** Long titles need to shrink or they overflow the card. */
const titleSize = (title: string): number => {
  if (title.length > 80) return 52;
  if (title.length > 50) return 64;
  return 80;
};

const LABELS: Record<string, string> = {
  post: "Writing",
  publishedPaper: "Paper",
  musicType: "Arrangement",
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(
    TITLE_QUERY,
    { slug },
    { next: { revalidate: 30 } },
  );

  const title = post?.title ? String(post.title) : "Mark Stanley";
  const label = post?.publishedIn || LABELS[post?._type] || "Writing";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#333333",
        padding: "72px 80px",
        borderLeft: "24px solid #e1affd",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 30,
          color: "#46c898",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: titleSize(title),
          fontWeight: 700,
          color: "#f2f2f2",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 30,
          color: "#afe1fd",
        }}
      >
        Mark Stanley · markstanl.com
      </div>
    </div>,
    { ...size },
  );
}
