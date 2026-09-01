/**
 * schema.org structured data.
 *
 * The Person node is declared once, on the homepage, under a stable `@id`.
 * Other pages reference that `@id` as their author rather than redeclaring the
 * person, which is what tells a crawler that every post shares one identity and
 * that the identity owns the profiles listed in `sameAs`.
 */
import { SITE_URL } from "./site";

export const PERSON_ID = `${SITE_URL}/#person`;

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Mark Stanley",
  url: SITE_URL,
  image: `${SITE_URL}/mark_tree.jpg`,
  jobTitle: "Undergraduate AI Researcher",
  description:
    "Computer Science, Mathematics, and Philosophy student at UW-Madison researching machine learning and AI safety.",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Wisconsin–Madison",
    url: "https://www.wisc.edu/",
  },
  knowsAbout: [
    "Machine Learning",
    "AI Safety",
    "Computer Vision",
    "Natural Language Processing",
    "Philosophy of Mind",
  ],
  sameAs: [
    "https://github.com/markstanl",
    "https://www.linkedin.com/in/markstanl/",
    "https://huggingface.co/markstanl",
    "https://scholar.google.com/citations?hl=en&user=cIGMGwUAAAAJ",
    "https://musescore.com/user/43149374",
  ],
};
