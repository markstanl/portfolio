'use client'

import React, {useState} from 'react'
import type {SanityDocument} from "next-sanity";
import Link from "next/link";

const TagFilter = ({posts, tags}: { posts: SanityDocument[], tags: string[] }) => {

    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const filteredPosts = selectedTag ? posts.filter((post: SanityDocument) => post.tags?.includes(selectedTag)) : posts;

    return (
        <>
            <h2 className={'text-xl text-brand-acc underline mb-2 w-3/4'}>Filter</h2>
            <div className={'flex items-center flex-wrap justify-items-start gap-2 w-3/4 mb-8'}>
                {tags.map((tag: string) => {
                    if (tag === null || tag === undefined) {
                        return null;
                    }
                    const stringTag = tag as unknown as string;
                    if (stringTag.length == 0) {
                        return null;
                    }

                    return (
                        <button
                            key={stringTag}
                            onClick={() =>
                                setSelectedTag(prev => (prev === stringTag ? null : stringTag))
                            }
                            className={`text-sm px-2 py-1 rounded-sm select-none text-nowrap cursor-pointer transition-colors duration-300 border-brand-border
                                ${selectedTag === stringTag
                                ? "bg-brand-prim text-brand-bg hover:bg-brand-prim-hover"
                                : "bg-brand-text text-brand-bg hover:bg-brand-text-hover"}`}
                        >
                            {stringTag}
                        </button>)
                })}
            </div>
            <ul className="flex flex-col gap-y-4 w-full items-center">
                {filteredPosts.map((post: SanityDocument) => (
                    <li className="w-2/3 bg-brand-text rounded-lg text-brand-bg p-3 pl-4 flex justify-between gap-2"
                        key={post._id}>
                        <div className={'flex flex-col gap-2'}>
                            <Link href={`/blog/${post.slug.current}`}>
                                <h2 className="font-semibold transition-colors hover:text-brand-prim-dark duration-300 cursor-pointer underline">{post.title}</h2>
                            </Link>
                            <div>
                                {post.tags && post.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className={`text-sm px-2 py-1 rounded-sm mr-3 select-none 
                                        ${
                                            tag === selectedTag ? 'bg-brand-sec text-brand-bg border-2 border-brand-border' : 'bg-brand-bg text-brand-text'
                                        }
                                        ${
                                            tag === "Published" && "hover:bg-brand-sec hover:text-brand-bg transition-colors duration-300"
                                        }`}
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>
                        </div>
                        <p className={'text-nowrap text-sm'}>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default TagFilter
