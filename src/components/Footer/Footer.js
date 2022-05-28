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
            <h3>Meus perfis profissionais</h3>

            <div className='social-links'>
                
                <a 
                    target="blanc"
                    title='Linkedin'
                    href="https://www.linkedin.com/in/ulisses-malanski/">
                    <FontAwesomeIcon className='iconeLink' icon={faLinkedin} /><br/>
                    Linedin
                </a>

                <a 
                    target="blanc"
                    title='Github'
                    href="https://github.com/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faGithubAlt} /><br/>
                    Github
                </a>

                <a 
                    target="blanc"
                    title='Codepen'
                    href="https://codepen.io/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faCodepen} /><br/>
                    Codepen
                </a>

                <a 
                    target="blanc"
                    title='Free Code Camp'
                    href="https://www.freecodecamp.org/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faFreeCodeCamp} /><br/>
                    Free Code Camp
                </a>

                <a 
                    target="blanc"
                    title='Behance'
                    href="https://www.behance.net/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faBehance} /><br/>
                    Behance
                </a>

            </div>
            
            <div className="App-header">
                <FontAwesomeIcon className='iconeLink' icon={faEarth} className="App-logo" />
                
                <p>
                    Open to work around de world
                </p>
                
                <FontAwesomeIcon className='iconeLink' icon={faBehance} />

            </div>
        </footer>
     )
}