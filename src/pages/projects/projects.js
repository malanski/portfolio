import './Projects.scss';

import ProjectCard from './ProjectCard'

export const Projects = () => {
    return (
        <div className='projects'>
            <section className="projects-section">
                <div >
                    <ProjectCard />
                </div>
            </section>
        </div>
    )
}