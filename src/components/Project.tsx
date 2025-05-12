import React from 'react'
import {ProjectType} from '@/../types/project'

type ProjectProps = {
    project: ProjectType
}

const Project: React.FC<ProjectProps> = ({project}) => {
    return (
        <div className={''}>
            <h1>{project.title}</h1>
        </div>
    )
}
export default Project
