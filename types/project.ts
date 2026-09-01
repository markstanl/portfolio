import { SanityImage } from "./blog";

/** A projectType document as it comes back from Sanity. */
export type ProjectDocument = {
  _id: string;
  title: string;
  body: string;
  link: string;
  tags: string[];
  image?: SanityImage;
  order: number;
};

/** A project after `image` has been resolved to a URL for rendering. */
export type ProjectType = Omit<ProjectDocument, "image"> & {
  image?: string;
};
