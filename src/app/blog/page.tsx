import {type SanityDocument} from "next-sanity";
import Navbar from "@/components/Navbar";

import {client} from "@/sanity/client";

import TagFilter from "@/app/blog/TagFilter";

const POSTS_QUERY = `*[_type=="post" || _type == "publishedPaper" || _type == "philosophyPaper" || _type == "musicType"] | order(publishedAt desc) {_id, title, slug, publishedAt, tags}`;
const TAGS_QUERY = '*[_type == "post" || _type == "publishedPaper" || _type == "philosophyPaper" || _type == "musicType"].tags[]';

const options = {next: {revalidate: 30}};

export default async function IndexPage() {
    const posts: SanityDocument[] = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
    const tags: string[] = await client.fetch<SanityDocument[]>(TAGS_QUERY, {}, options) as unknown as string[];

    const tagCounts: Record<string, number> = {};
    for (const tag of tags) {
        if (!tag) continue;
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    }
    const sortedTags: string[] = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([tag]) => tag);

    return (
        <main
            className="min-h-screen w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 flex flex-col items-center font-jetbrains bg-brand-bg">
            <Navbar/>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-12 mb-6 font-inter text-brand-sec text-center">
                Blog
            </h1>
            <h4 className="text-brand-text text-justify indent-4 text-sm sm:text-base md:text-lg px-4 sm:px-8 md:px-12 max-w-3xl md:mb-8">
                Here is a collection of various creative works. Ranging from computer science blog posts, to philosophy
                papers, and even music arrangements!
            </h4>
            <TagFilter posts={posts} tags={sortedTags}/>
        </main>

    );
}