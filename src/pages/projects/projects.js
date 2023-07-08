import './Projects.scss';

import ProjectCard from './ProjectCard'

export const Projects = () => {
    return (
        <div className='projects'>

            <section className="projects-section">
                <hr />
                
                <div >
                    <ProjectCard />
                </div>
            </section>
        </div>
    )
}