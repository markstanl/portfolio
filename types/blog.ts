import { PortableTextBlock } from 'next-sanity';

export type Post = {
    _id: string;
    _type: 'post';
    title: string;
    slug: {
        current: string;
    };
    publishedAt: string;
    image?: {
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
    body: PortableTextBlock[];
};

export type PublishedPaper = {
    _id: string;
    _type: 'publishedPaper';
    title: string;
    abstract?: string;
    publishedIn?: string;
    publishedAt: string;
    link?: string;
    slug: {
        current: string;
    };
    tags?: string[];
};

export type PhilosophyPaper = {
    _id: string;
    _type: 'philosophyPaper';
    title: string;
    slug: {
        current: string;
    };
    publishedAt: string;
    foreword?: string;
    body: PortableTextBlock[];
    tags?: string[];
};

export type Music = {
    _id: string;
    _type: 'musicType';
    title: string;
    composer?: string;
    slug: {
        current: string;
    };
    publishedAt: string;
    foreword?: string;
    body: PortableTextBlock[];
    tags?: string[];
    musicLink?: string;
    conductingVideoEmbed?: string;
};
