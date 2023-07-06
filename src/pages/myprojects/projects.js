import './projects2.scss';
import ProjectsCards from './projectsCards';

import ProjectList from './projectsCards'

export const Projects = () => {
    return (
        <div className='projects2'>

            <section className="projects-section">
                <hr />
                
                <div >
                    <ProjectsCards />
                </div>
            </section>
        </div>
    )
}