import listProjects from './listProjects';
import './projects2.scss';
// import Modal from '@mui/material/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { Box, Button, Typography, Popover } from '@mui/material';
import React from 'react';
// import { useState, useEffect } from 'react';


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: "auto",
//   // bgcolor: 'background.paper',
//   border: '2px solid #000',
//   // boxShadow: 24,
//   p: 4,
// };


const ProjectCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Box className="projects-grid">
      {listProjects.map((project, index) => (
        <Box key={index} className="project">
          <p className="title-name"><big><b>{project.name}</b></big></p>

          <a href={project.deployLink}
            className='deployLink' target="_blank" rel='noreferrer' title={`Check the ${project.name}  deploy link`}>
            <Box className="imageSpin">
              <img className="project-image"
                src={project.image}
                alt={project.imgAlt} />
            </Box>
          </a>
          <p className='describe'>{project.describe}</p>

          <Box className='project-header'>
            <Box className='tech-badge-card'>
              {Object.keys(project.badgeFont).map((font, index) => (
                <span key={index}>{project.badgeFont[font]}</span>
              ))}
            </Box>

            <Box className="project-title">

              <p>{project.skills}</p>

              {/* <Button
                aria-describedby={id} 
                variant="contained"
                onClick={handleClick}
                //  onClick={handleOpen}
                color="grey"
                aria-owns={open ? 'mouse-over-popover' : undefined}
                // aria-haspopup="true"
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}>
                About
              </Button> */}

              {/* <Popover id={id}
                disableRestoreFocus
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                onScrollCapture={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                sx= {{ 
                    pointerEvents: 'none',
                    width:'350px'}}
                >
                <Typography sx={{ width:'350px', p: 2 }}>{project.details}</Typography>
              </Popover> */}


                  <Box sx={{textAlign:'justify'}}>
                    <details>{project.details}</details>
                  </Box>

              <a href={project.repositoryLink} target="_blank" rel='noreferrer'
                title="Code and documentation at this repository" className='repository'>
                <FontAwesomeIcon icon={faGithubAlt} /> Repository
              </a>

              {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {project.name}
                  </Typography>
                  <Box id="modal-modal-description" sx={{ mt: 2 }}>
                    {project.about}
                    <br /><br />
                    <Box className="imageSpin">
                      <img className="project-image"
                        src={project.image}
                        alt={project.imgAlt} />
                    </Box>
                    <br /><br />

                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>

                      <Button sx={{ width: '176px', height: '40px', margin: '10px auto' }} variant="outlined"
                        color="error"
                        onClick={handleClose}
                        title="Cancel delete">
                        Close
                      </Button>
                    </Box>

                  </Box>
                </Box>
              </Modal> */}

            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProjectCard;