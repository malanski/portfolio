import './projects2.scss';

import ProjectList from './ProjectsList'

export const Projects = () => {
    return (
        <div className='projects2'>

            <section className="projects-section">
                <hr />
                
                <div >
                    <ProjectList />
                </div>
            </section>
        </div>
    )
}