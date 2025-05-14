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
            className="container mx-auto min-h-screen w-screen p-8 flex flex-col items-center font-jetbrains bg-brand-bg">
            <Navbar />
            <h1 className="text-4xl font-bold mb-8 font-inter text-brand-sec">Blog</h1>
            <h4 className={'p-4 w-2/3'}>Here is a collection of various creative works. Ranging from computer science
                blog posts, to philosophy papers, and even music arrangements!</h4>
            <TagFilter posts={posts} tags={sortedTags}/>
        </main>
    );
}