import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

export default function ProjectList({ projects }) {
    return (
        <div className="project-list section">
            {projects &&
                projects.map(project => {
                    return (
                        <Link to={'/projects/' + project.id} key={project.id}>
                            <ProjectSummary project={project} />
                        </Link>
                    )
                })
            //map будет исполняться только если существуют projects
            }
        </div>
    )
}
