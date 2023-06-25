import listProjects from './listProjects';
import './projects2.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const ProjectList = () => {
  return (
    <div className="projects-grid">
      {listProjects.map((project, index) => (

        <div key={index} className="project">
          <div className='project-header'>
            <div className="project-title">
              <p><big><b>{project.name}</b></big></p>
              <p>{project.describe}</p>
              <p>{project.skills}</p>
              <a href={project.repositoryLink}
                title="Code and documentation at this repository" className='repository'>
                <FontAwesomeIcon icon={faGithubAlt} /> Repository link
              </a>
            </div>
            
            <div className='tech-badge-card'>
              {Object.keys(project.badgeFont).map((font, index) => (
              <span key={index}>{project.badgeFont[font]}</span>
            ))}
            </div>
          </div>

          <a href={project.deployLink}
            className='deployLink' target="_blank" rel='noreferrer' title={`Check the ${project.name}  deploy link`}>
            <div className="imageSpin">
              <img className="project-image"
                src={project.image}
                alt={project.imgAlt} />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;