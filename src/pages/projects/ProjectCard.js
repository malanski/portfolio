import listProjects from './listProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { Box } from '@mui/material';
import React from 'react';
import './ProjectCard.scss';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = () => {
  return (
    <Box className="projects-grid">
      {listProjects.map((project, index) => (

        <Box key={index} className="project">

          <div className='sections sectionOne'>
            <h3 className="project-name">
              <span>{project.id}</span><big><b>{project.name}</b></big>
            </h3>

            <p className='describe textContainer' title='Project description'>
              <span>Features:</span>
              <span>{project.describe}</span>
            </p>

            <img className="project-image"
              src={project.image}
              alt={project.imgAlt}
            />            

            <a href={project.deployLink}
              className='button' target="_blank" rel='noreferrer'
              title={`Try the ${project.name} deploy link`}>
              <FontAwesomeIcon icon={faEye} />
              <span> {project.name} deploy</span>
            </a>
          </div>

          <div className='sections sectionTwo'>



            <h3 className='projectType textContainer' title='Project Type'>
              <span>Type:</span> {project.type}
            </h3>

            <div className='tech'>
              <p title='Project Requirements'>{project.skills}</p>
              <div className='tech-badges'>
                {Object.keys(project.badgeFont).map((font, index) => (
                  <span key={index}>{project.badgeFont[font]}</span>
                ))}
              </div>
            </div>

            <div className="details">
              <p>&ensp;&ensp;&ensp;&ensp; {project.name} is {project.details}</p>
            </div>
            

            <a href={project.repositoryLink}
              target="_blank" rel='noreferrer'
              title="Code and documentation at this repository"
              className='button'>
              <FontAwesomeIcon icon={faGithubAlt} /> Repository
            </a>
          </div>

        </Box>
      ))}
    </Box>
  );
};

export default ProjectCard;