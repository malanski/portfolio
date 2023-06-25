import './projects2.scss';

import ProjectList from './ProjectsList'



export const MalanskiProjects = (props) => {
    return (
        <div className='projects2'>
            <h2>Projects</h2>

            <section className="projects-section">
                <hr />
                
                <div >
                    <ProjectList />
                </div>
            </section>
        </div>
    )
}