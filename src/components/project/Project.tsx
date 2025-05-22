import React from 'react'
import {ProjectType} from '../../../types/project'
import ProjectTags from '@/components/project/ProjectTags'

import Image from 'next/image'

type ProjectProps = {
    project: ProjectType
}

const Project: React.FC<ProjectProps> = ({project}) => {
    return (
        <div className={'max-w-[90vw] w-96 h-full bg-brand-text text-brand-bg rounded-lg p-4 flex flex-col gap-4 justify-between'}>
            <div className={'flex flex-col items-start justify-evenly gap-4'}>
                <div
                    className={'flex justify-start items-center gap-2 hover:text-brand-prim-dark hover:tracking-wide transition-all duration-300'}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="-5 -2 24 24"
                         className={'mt-1 w-6 h-6'}>
                        <path fill="currentColor"
                              d="M5 18v2H3v-2H0V0h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM3 2H2v14h1zm2 0v14h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1 2h5v2H6zm0 3h5v2H6z"></path>
                    </svg>
                    <a href={project.link}
                       target={'_blank'}
                       rel={'noopener noreferrer'}
                       className={'md:text-xl sm:text-lg text-base font-bold underline underline-offset-4 decoration-[.1rem] align-middle'}>
                        {project.title}
                    </a>
                </div>
                {project.image ? (
                    <div className="relative w-full h-18 rounded-lg overflow-hidden bg-brand-prim outline-1 outline-brand-bg">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                ) : (
                    <div className="w-full h-18 bg-brand-prim rounded-lg outline-1 outline-brand-bg" />
                )}

                <p className={'md:text-sm text-xs'}>{project.body}</p>
            </div>
            <ProjectTags tags={project.tags}/>
        </div>
    )
}
export default Project
