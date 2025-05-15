import React from 'react'
import {ProjectType} from '@/../types/project'
import Tags from '@/components/Tags'

type ProjectProps = {
    project: ProjectType
}

const Project: React.FC<ProjectProps> = ({project}) => {
    return (
        <div className={'w-96 bg-brand-text text-brand-bg rounded-lg p-4 flex flex-col gap-4 justify-between'}>
            <div className={'flex flex-col gap-4'}>
                <div
                    className={'flex justify-items-start items-center w-auto gap-2 hover:text-brand-prim-dark transition-colors duration-300'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="-5 -2 24 24" className={'mt-1'}>
                        <path fill="currentColor"
                              d="M5 18v2H3v-2H0V0h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM3 2H2v14h1zm2 0v14h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1 2h5v2H6zm0 3h5v2H6z"></path>
                    </svg>
                    <a href={project.link}
                       className={'text-xl font-bold underline underline-offset-4 decoration-[.1rem] align-middle'}>
                        {project.title}
                    </a>
                </div>
                <div className={'w-full h-18 bg-brand-prim rounded-lg outline-1 outline-brand-bg'}/>
                <p className={'text-sm'}>{project.body}</p>
            </div>
            <Tags tags={project.tags}/>
        </div>
    )
}
export default Project
