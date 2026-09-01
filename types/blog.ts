import { PortableTextBlock } from "next-sanity";

export type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

/**
 * Blog posts and philosophy papers share one type. `foreword` is optional:
 * papers use it for framing, posts generally omit it.
 */
export type Post = {
  _id: string;
  _type: "post";
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt?: string;
  metaDescription?: string;
  foreword?: string;
  image?: SanityImage;
  body: PortableTextBlock[];
  tags?: string[];
};

export type PublishedPaper = {
  _id: string;
  _type: "publishedPaper";
  title: string;
  abstract?: string;
  publishedIn?: string;
  publishedAt: string;
  link?: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  metaDescription?: string;
  tags?: string[];
};

export type Music = {
  _id: string;
  _type: "musicType";
  title: string;
  composer?: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt?: string;
  metaDescription?: string;
  foreword?: string;
  body: PortableTextBlock[];
  tags?: string[];
  musicLink?: string;
  conductingVideoEmbed?: string;
};

export type BlogEntry = Post | PublishedPaper | Music;
