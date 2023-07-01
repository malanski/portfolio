// import './Header.scss';
import './footer.scss'
import earth from '../../../src/assets/planet-earth-png-8.png';
import satelite from '../../../src/assets/satelite.png';
import { Nav } from '../Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faBehance, faCodepen, faFreeCodeCamp, faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export function Footer() {
     return (
        <footer>
            <Nav />
            <h3>
                <FontAwesomeIcon className='iconeLink' icon={faCheck} />&ensp;
                Check my professional profile, repositories, codes, challenges and illustrations at:&ensp; 
                <FontAwesomeIcon className='iconeLink' icon={faArrowDown} /> 
            </h3>

            <div className='social-links'>
                
                <a className='social-media' target="_blank" rel="noreferrer"
                    title='Linkedin'
                    href="https://www.linkedin.com/in/ulisses-malanski/">
                    <FontAwesomeIcon className='iconeLink' icon={faLinkedin} /><br/>
                    <p className='social-link-name' >Linedin</p>
                </a>

                <a className='social-media' target="_blank" rel="noreferrer"
                    title='Github'
                    href="https://github.com/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faGithubAlt} /><br/>
                    <p className='social-link-name' >Github</p>
                </a>

                <a className='social-media' target="_blank" rel="noreferrer"
                    title='Codepen'
                    href="https://codepen.io/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faCodepen} /><br/>
                    <p className='social-link-name' >Codepen</p>
                </a>

                <a className='social-media' target="_blank" rel="noreferrer"
                    title='Free Code Camp'
                    href="https://www.freecodecamp.org/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faFreeCodeCamp} /><br/>
                    <p className='social-link-name' >FreeCodeCamp</p>
                </a>

                <a className='social-media' target="_blank" rel="noreferrer"
                    title='Behance'
                    href="https://www.behance.net/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faBehance} /><br/>
                    <p className='social-link-name' >Behance</p>
                </a>

            </div>
            
            <div className="footerAnimation">

                <div className="scene">
                    <img src={earth} alt="API icon" className="App-logo earth" />
                    <img src={satelite} alt="API icon" className="App-logo moon" />
                </div>

                <p>
                    Open to work around de globe
                </p>
                
            </div>
        </footer>
     )
}