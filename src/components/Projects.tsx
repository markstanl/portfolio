import React from 'react';
import Project from './Project';
import { ProjectType } from '@/../types/project';

import { type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/client';

const PROJECTS_QUERY = `*[_type == "projectType"]{_id, title, link, order, image, body, tags}`;
const options = { next: { revalidate: 30 } };

export default async function Projects() {
    const projects: SanityDocument[] = await client.fetch(PROJECTS_QUERY, {}, options);
    projects.sort((a: SanityDocument, b: SanityDocument) => {
        const orderA = (a as unknown as ProjectType).sortOrder;
        const orderB = (b as unknown as ProjectType).sortOrder;
        return orderA - orderB;
    });

    return (
        <div className="flex flex-wrap justify-evenly mx-auto min-h-screen w-full p-16 gap-4">
            {projects.map((project: SanityDocument) => {
                const castProject = project as unknown as ProjectType;
                return <Project key={castProject._id} project={castProject} />;
            })}
        </div>
    );
}
