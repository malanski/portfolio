import listProjects from './listProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { Box } from '@mui/material';
import React from 'react';
import './ProjectCard.scss';

const ProjectCard = () => {
  return (
    <Box className="projects-grid">
      {listProjects.map((project, index) => (

        <Box key={index} className="project">

          <Box className='sections sectionOne'>
            <h3 className="project-name"><big><b>{project.name}</b></big></h3>

            <Box className="imageSpin">
                <img className="project-image"
                  src={project.image}
                  alt={project.imgAlt} />
            </Box>

            <Box sx={{ 
              textAlign: 'justify',
              width: '80%',
              margin: '10px auto' }}>                
              <p>{project.details}</p>
            </Box>

            <a href={project.deployLink}
              className='deployLink' target="_blank" rel='noreferrer'
              title={`Try the ${project.name} deploy link`}>
              Click here to try yourself the deploy.
            </a>
          </Box>

          <Box className='sections sectionTwo'>
            <p className='projectType textContainer' title='Project Type'>
              <span>Type:</span> {project.type}
            </p>

            <p className='describe textContainer' title='Project description'>
              <span>Functionalities:</span> {project.describe}
            </p>

            <div className='tech'>
              <p title='Project Requirements'>{project.skills}</p>
              <Box className='tech-badges'>
                {Object.keys(project.badgeFont).map((font, index) => (
                  <span key={index}>{project.badgeFont[font]}</span>
                ))}
              </Box>
            </div>

            <a href={project.repositoryLink}
              target="_blank" rel='noreferrer'
              title="Code and documentation at this repository"
              className='repository'>
              <FontAwesomeIcon icon={faGithubAlt} /> Repository
            </a>
          </Box>

        </Box>
      ))}
    </Box>
  );
};

export default ProjectCard;