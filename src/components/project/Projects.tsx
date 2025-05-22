import React from 'react';
import Project from './Project';
import { ProjectType } from '../../../types/project';

import { type SanityDocument } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/client';
import {SanityImageSource} from "@sanity/asset-utils";

const PROJECTS_QUERY = `*[_type == "projectType"]{_id, title, link, order, image, body, tags}`;
const options = { next: { revalidate: 30 } };

export default async function Projects() {
    const builder = imageUrlBuilder(client);
    const urlFor = (source: SanityImageSource) => builder.image(source).url();

    const rawProjects: SanityDocument[] = await client.fetch(PROJECTS_QUERY, {}, options);

    const projects: ProjectType[] = rawProjects
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .slice(0, 6)
        .map((project) => {
            const typed = project as unknown as ProjectType & { image?: { asset: { _ref: string } } };
            return {
                ...typed,
                image: typed.image ? urlFor(typed.image) : undefined,
            };
        });

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full px-16 justify-items-center">
            {projects.map((project) => (
                <Project key={project._id} project={project} />
            ))}
        </div>
    );
}
