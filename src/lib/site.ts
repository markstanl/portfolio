/**
 * Canonical origin for the deployed site. Single source of truth for
 * metadataBase, canonical tags, the sitemap, and robots.txt. Change it here
 * and every generated absolute URL follows.
 */
export const SITE_URL = "https://markstanl.com";

/** Sanity document types that are published as pages under /blog. */
export const BLOG_TYPES = `_type == "post" || _type == "publishedPaper" || _type == "musicType"`;
