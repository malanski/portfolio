import './projects.scss';

import ProjectCard from './ProjectCard'

export const MyProjects = () => {
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