'use client'

import React, {useState} from 'react'
import type {SanityDocument} from "next-sanity";
import Link from "next/link";

const TagFilter = ({posts, tags}: { posts: SanityDocument[], tags: string[] }) => {

    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const filteredPosts = selectedTag ? posts.filter((post: SanityDocument) => post.tags?.includes(selectedTag)) : posts;

    return (
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 w-full">
            <h2 className="text-xl sm:text-2xl text-brand-acc underline mb-2 w-full max-w-4xl">Filter</h2>

            {/* filter tags */}
            <div className="flex items-center flex-wrap gap-2 w-full max-w-4xl mb-8">
                {tags.map((tag: string) => {
                    if (!tag) return null;
                    return (
                        <button
                            key={tag}
                            onClick={() =>
                                setSelectedTag(prev => (prev === tag ? null : tag))
                            }
                            className={`text-sm px-2 py-1 rounded-sm select-none text-nowrap cursor-pointer transition-colors duration-300 border-brand-border
                        ${selectedTag === tag
                                ? "bg-brand-prim text-brand-bg hover:bg-brand-prim-hover"
                                : "bg-brand-text text-brand-bg hover:bg-brand-text-hover"}`}
                        >
                            {tag}
                        </button>
                    );
                })}
            </div>

            {/* blog posts */}
            <ul className="flex flex-col gap-y-4 w-full items-center">
                {filteredPosts.map((post: SanityDocument) => (
                    <li
                        key={post._id}
                        className="w-full max-w-3xl bg-brand-text rounded-lg text-brand-bg md:p-4 p-2 flex flex-row justify-between gap-4 items-start"
                    >
                        <div className="flex flex-col md:gap-2 gap-1 text-sm w-full">
                            <Link href={`/blog/${post.slug.current}`}>
                                <h2 className="lg:text-xl md:text-xl sm:text-base text-sm font-semibold transition-colors hover:text-brand-prim-dark duration-300 cursor-pointer underline">
                                    {post.title}
                                </h2>
                            </Link>
                            <div className="flex flex-wrap sm:gap-2 gap-1">
                                {post.tags?.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className={`md:text-sm text-xs px-2 py-1 rounded-sm select-none transition-all duration-300 cursor-pointer whitespace-nowrap inline-block
                                        ${tag === selectedTag
                                            ? 'bg-brand-sec hover:bg-brand-sec-hover text-brand-bg border-2 border-brand-border'
                                            : 'bg-brand-bg text-brand-text hover:bg-brand-bg-hover'}
                                        ${tag === "Published" ? "hover:text-brand-prim" : ""}`}
                                        onClick={() =>
                                            setSelectedTag(prev => (prev === tag ? null : tag))
                                        }
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <p className="text-nowrap sm:text-sm text-xs pt-1 whitespace-nowrap">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </p>
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default TagFilter
