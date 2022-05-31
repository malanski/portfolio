// import './Header.scss';
import './footer.scss'

import { Nav } from '../Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { faBehance, faCodepen, faFreeCodeCamp, faGithubAlt, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
export function Footer() {
     return (
        <footer>
            <Nav />
            <h3>Professional Profile, Repositories, Codes, Challenges and Illustrations</h3>

            <div className='social-links'>
                
                <a className='social-media' target="_blank"
                    title='Linkedin'
                    href="https://www.linkedin.com/in/ulisses-malanski/">
                    <FontAwesomeIcon className='iconeLink' icon={faLinkedin} /><br/>
                    Linedin
                </a>

                <a className='social-media' target="_blank"
                    title='Github'
                    href="https://github.com/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faGithubAlt} /><br/>
                    Github
                </a>

                <a className='social-media' target="_blank"
                    title='Codepen'
                    href="https://codepen.io/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faCodepen} /><br/>
                    Codepen
                </a>

                <a className='social-media' target="_blank"
                    title='Free Code Camp'
                    href="https://www.freecodecamp.org/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faFreeCodeCamp} /><br/>
                    Free Code Camp
                </a>

                <a className='social-media' target="_blank"
                    title='Behance'
                    href="https://www.behance.net/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faBehance} /><br/>
                    Behance
                </a>

            </div>
            
            <div className="App-header">
                <FontAwesomeIcon icon={faEarth} className="App-logo" />
                
                <p>
                    Open to work around de world
                </p>
                
            </div>
        </footer>
     )
}