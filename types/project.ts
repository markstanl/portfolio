export type ProjectType = {
    _id: string;
    title: string;
    body: string;
    link: string;
    tags: string[];
    image?: {
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
    sortOrder: number;
};
