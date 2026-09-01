import {
  PortableText,
  type PortableTextComponents,
  type SanityDocument,
} from "next-sanity";
import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { notFound } from "next/navigation";

import Link from "next/link";

import { Post, PublishedPaper, Music } from "@/../types/blog";

const POST_QUERY = `*[slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Rendering rules for the Portable Text body. Tailwind's preflight strips the
 * browser's default anchor styling, so link annotations need an explicit style
 * or they read as plain text.
 */
const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-4 indent-8 text-xs sm:text-sm md:text-base">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = String(value?.href ?? "");
      const isExternal = /^https?:\/\//i.test(href);
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-brand-prim underline underline-offset-2 hover:text-brand-prim-hover transition-colors duration-300"
        >
          {children}
        </a>
      );
    },
  },
};

/**
 * Description shown in search results and link previews. Falls back through the
 * on-page summaries so a post is never published without one, and trims to the
 * length search engines actually display.
 */
const describe = (post: SanityDocument): string | undefined => {
  const candidate =
    post.metaDescription || post.excerpt || post.foreword || post.abstract;
  if (!candidate) return undefined;
  const flat = String(candidate).replace(/\s+/g, " ").trim();
  return flat.length > 160 ? `${flat.slice(0, 157).trimEnd()}...` : flat;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: slug },
    options,
  );

  if (!post) return {};

  const title = String(post.title);
  const description = describe(post);

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/blog/${slug}`,
      publishedTime: post.publishedAt,
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: slug },
    options,
  );

  // a real 404 rather than a redirect, so crawlers do not log a soft 404
  if (!post) {
    notFound();
  }

  let RenderedPage;
  if (post._type === "post") {
    RenderedPage = <PostContent post={post as unknown as Post} />;
  } else if (post._type === "publishedPaper") {
    RenderedPage = (
      <PublishedPaperContent post={post as unknown as PublishedPaper} />
    );
  } else if (post._type == "musicType") {
    RenderedPage = <MusicTypeContent post={post as unknown as Music} />;
  } else {
    RenderedPage = <div>Unknown post type</div>;
  }

  return (
    <main className="container mx-auto min-h-screen w-screen p-8 flex flex-col gap-4 font-jetbrains bg-brand-bg">
      <Link
        href="/blog"
        className="text-brand-text hover:underline hover:text-brand-prim hover:tracking-wide transition-all duration-300"
      >
        ← Back to posts
      </Link>
      {RenderedPage}
    </main>
  );
}

/**
 * Covers both blog posts and philosophy papers. Papers carry a foreword and
 * posts generally do not, so that section is rendered only when present.
 */
const PostContent = ({ post }: { post: Post }) => {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-8 items-center px-4 sm:px-6 md:px-12">
      <div className="w-full max-w-2xl flex flex-col gap-2">
        <h1 className="text-brand-text text-2xl sm:text-3xl md:text-4xl mb-1">
          {post.title}
        </h1>
        <h2 className="text-brand-prim text-xl sm:text-2xl">
          {formatDate(post.publishedAt)}
        </h2>
        <h3 className="text-brand-sec text-lg sm:text-xl">Mark Stanley</h3>
      </div>
      {post.foreword && (
        <div className="w-full max-w-2xl">
          <h4 className="text-brand-acc text-xl sm:text-2xl mb-2">Foreword</h4>
          <p className="text-brand-text text-xs sm:text-sm md:text-base">
            {post.foreword}
          </p>
        </div>
      )}
      <div className="w-full max-w-2xl">
        <h4 className="text-brand-acc text-xl sm:text-2xl mb-2">Body</h4>
        <PortableText value={post.body} components={bodyComponents} />
      </div>
    </div>
  );
};

const PublishedPaperContent = ({ post }: { post: PublishedPaper }) => {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-8 items-center sm:px-6 md:px-12">
      <div className="w-full max-w-2xl flex flex-col gap-2">
        <h1 className="text-brand-text text-2xl sm:text-3xl md:text-4xl mb-1">
          {post.title}
        </h1>
        <p className="text-brand-prim text-xl sm:text-2xl">
          {formatDate(post.publishedAt)}
        </p>
        <h3 className="text-brand-sec text-lg sm:text-xl">Mark Stanley</h3>
        {/* anchor text names the work, since this link is the page's endorsement of it */}
        {post.link && (
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-brand-prim text-sm sm:text-base md:text-lg underline underline-offset-2 hover:text-brand-prim-hover hover:tracking-wide transition-all duration-300"
          >
            Read <span className="italic">{post.title}</span> on{" "}
            {post.publishedIn} →
          </a>
        )}
      </div>
      <div className="w-full max-w-2xl">
        <h4 className="text-brand-acc text-xl sm:text-2xl mb-2">Abstract</h4>
        <p className="text-brand-text text-xs sm:text-sm md:text-base">
          {post.abstract}
        </p>
      </div>
    </div>
  );
};

const MusicTypeContent = ({ post }: { post: Music }) => {
  return (
    <div className="w-full flex flex-col gap-8 items-center px-4 sm:px-6 md:px-12">
      <div className="w-full max-w-2xl flex flex-col gap-2">
        <h1 className="text-brand-text text-2xl sm:text-3xl md:text-4xl mb-1">
          {post.title} - <span className="italic">{post.composer}</span>
        </h1>
        <h2 className="text-brand-prim text-xl sm:text-2xl">
          {formatDate(post.publishedAt)}
        </h2>
        <h3 className="text-brand-sec text-lg sm:text-xl">Mark Stanley</h3>
      </div>
      <div className="w-full max-w-2xl">
        <p className="text-brand-text text-sm sm:text-base">{post.foreword}</p>
        {post.conductingVideoEmbed &&
          (post.conductingVideoEmbed.includes("google") ? (
            <iframe
              src={post.conductingVideoEmbed}
              className="w-full aspect-video mt-4 rounded"
              allow="autoplay"
            >
              This video is not supported in your browser. You can still view it
              here: {post.conductingVideoEmbed}
            </iframe>
          ) : (
            <video
              src={post.conductingVideoEmbed}
              controls
              className="w-full aspect-video mt-4 rounded"
              preload="metadata"
            >
              This video is not supported in your browser. You can still view it
              here: {post.conductingVideoEmbed}
            </video>
          ))}
      </div>
    </div>
  );
};
