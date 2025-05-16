import {PortableText, type SanityDocument} from "next-sanity";
// import imageUrlBuilder from "@sanity/image-url";
// import type {SanityImageSource} from "@sanity/image-url/lib/types/types";
import {client} from "@/sanity/client";

import Link from "next/link";

import {Post, PublishedPaper, PhilosophyPaper, Music} from "@/../types/blog";

const POST_QUERY = `*[slug.current == $slug][0]`;

// const {projectId, dataset} = client.config();
// const urlFor = (source: SanityImageSource) =>
//     projectId && dataset
//         ? imageUrlBuilder({projectId, dataset}).image(source)
//         : null;

const options = {next: {revalidate: 30}};

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

type PageProps = {
    params: Promise<{ slug: string }>;
};

export default async function PostPage({params}: PageProps){
    const { slug } = await params;
    const post = await client.fetch<SanityDocument>(POST_QUERY, {slug: slug}, options);
    // const postImageUrl = post.image
    //     ? urlFor(post.image)?.width(550).height(310).url()
    //     : null;


    let RenderedPage;
    if (post._type === "post") {
        RenderedPage = <PostContent post={post as unknown as Post}/>;
    } else if (post._type === "philosophyPaper") {
        RenderedPage = <PhilosophyPaperContent post={post as unknown as PhilosophyPaper}/>;
    } else if (post._type === "publishedPaper") {
        RenderedPage = <PublishedPaperContent post={post as unknown as PublishedPaper}/>;
    } else if (post._type == "musicType"){
        RenderedPage = <MusicTypeContent post={post as unknown as Music}/>;
    }
    else {
        RenderedPage = <div>Unknown post type</div>;
    }

    return (
        <main className="container mx-auto min-h-screen w-screen p-8 flex flex-col gap-4 font-jetbrains bg-brand-bg">
            <Link href="/blog" className="hover:underline hover:text-brand-prim hover:tracking-wide transition-all duration-300">
                ← Back to posts
            </Link>
            {RenderedPage}
        </main>
    );
}

const PostContent = ({ post }: { post: Post }) => {
    return (
        <div className="w-full flex flex-col gap-8 items-center px-4 sm:px-6 md:px-12">
            <div className="w-full max-w-2xl flex flex-col gap-2">
                <h1 className="text-brand-text text-2xl sm:text-3xl md:text-4xl mb-1">{post.title}</h1>
                <h2 className="text-brand-prim text-xl sm:text-2xl">{formatDate(post.publishedAt)}</h2>
                <h3 className="text-brand-sec text-lg sm:text-xl">Mark Stanley</h3>
            </div>
            <div className="w-full max-w-2xl">
                <h4 className="text-brand-acc text-xl sm:text-2xl mb-2">Body</h4>
                <PortableText
                    value={post.body}
                    components={{
                        block: {
                            normal: ({ children }) => (
                                <p className="mb-4 indent-8 text-xs sm:text-sm md:text-base">{children}</p>
                            ),
                        },
                    }}
                />
            </div>
        </div>
    );
};


const PhilosophyPaperContent = ({ post }: { post: PhilosophyPaper }) => {
    return (
        <div className="w-full flex flex-col gap-4 sm:gap-8 items-center sm:px-6 md:px-12">
            <div className="w-full max-w-2xl flex flex-col gap-2">
                <h1 className="text-brand-text text-2xl sm:text-3xl md:text-4xl mb-1">{post.title}</h1>
                <h2 className="text-brand-prim text-xl sm:text-2xl">{formatDate(post.publishedAt)}</h2>
                <h3 className="text-brand-sec text-lg sm:text-xl">Mark Stanley</h3>
            </div>
            <div className="w-full max-w-2xl">
                <h4 className="text-brand-acc text-xl sm:text-2xl mb-2">Foreword</h4>
                <p className="text-brand-text text-xs sm:text-sm md:text-base">{post.foreword}</p>
            </div>
            <div className="w-full max-w-2xl">
                <h4 className="text-brand-acc text-xl sm:text-2xl mb-2">Body</h4>
                <PortableText
                    value={post.body}
                    components={{
                        block: {
                            normal: ({ children }) => (
                                <p className="mb-4 indent-8 text-xs sm:text-sm md:text-base">{children}</p>
                            ),
                        },
                    }}
                />
            </div>
        </div>
    );
};


const PublishedPaperContent = ({ post }: { post: PublishedPaper }) => {
    return (
        <div className="w-full flex flex-col gap-4 md:gap-8 items-center sm:px-6 md:px-12">
            <div className="w-full max-w-2xl flex flex-col gap-2">
                <h1 className="text-brand-text text-2xl sm:text-3xl md:text-4xl mb-1">{post.title}</h1>
                <a
                    href={post.link}
                    className="text-brand-prim text-xl sm:text-2xl underline cursor-pointer hover:text-brand-prim-hover transition-colors duration-300"
                >
                    {post.publishedIn}: {formatDate(post.publishedAt)}
                </a>
                <h3 className="text-brand-sec text-lg sm:text-xl">Mark Stanley</h3>
            </div>
            <div className="w-full max-w-2xl">
                <h4 className="text-brand-acc text-xl sm:text-2xl mb-2">Abstract</h4>
                <p className="text-brand-text text-xs sm:text-sm md:text-base">{post.abstract}</p>
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
                <h2 className="text-brand-prim text-xl sm:text-2xl">{formatDate(post.publishedAt)}</h2>
                <h3 className="text-brand-sec text-lg sm:text-xl">Mark Stanley</h3>
            </div>
            <div className="w-full max-w-2xl">
                <p className="text-brand-text text-sm sm:text-base">{post.foreword}</p>
                {post.conductingVideoEmbed && (
                    <video
                        src={post.conductingVideoEmbed}
                        controls
                        className="w-full h-auto mt-4 rounded"
                        preload="metadata"
                    >
                        This video is not supported in your browser. You can still view it here:{" "}
                        {post.conductingVideoEmbed}
                    </video>
                )}
            </div>
        </div>
    );
};

