export type ProjectType = {
    _id: string;
    title: string;
    description: string;
    link: string;
    slug: { current: string };
    tags: string[];
    image: {
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
    sortOrder: number;
};
