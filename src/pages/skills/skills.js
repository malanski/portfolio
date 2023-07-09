import './skills.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBattery, faBattery2, faBattery3, faBattery4,
    faCode, faFlagUsa, faList, faMusic, faPaintbrush, faPenAlt, faPenToSquare,
    faRobot,
    faV
} from '@fortawesome/free-solid-svg-icons';
import {
    faAngular,
    faCss3, faFigma, faGit, faGitAlt, faHtml5, faJs,
    faLinux, faMicrosoft, faNodeJs, faReact, faSass
} from '@fortawesome/free-brands-svg-icons';


export const Skills = () => {
    return (
        <div className='skills'>
            <h2>Skills that I can work with:</h2>

            <ul className='abilities'>
                <li>
                    <FontAwesomeIcon className='icone' icon={faFlagUsa} />
                    <span>English: Advanced</span>
                    <FontAwesomeIcon className='icone' icon={faBattery} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faReact} />
                    ReactJs SPA framewok
                    <FontAwesomeIcon className='icone' icon={faBattery4} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faV} />
                    Vite
                    <FontAwesomeIcon className='icone' icon={faBattery3} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faReact} />
                    NextJs
                    <FontAwesomeIcon className='icone' icon={faBattery3} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faGit} />
                    Git and GitHub
                    <FontAwesomeIcon className='icone' icon={faBattery4} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faHtml5} />
                    HTML
                    <FontAwesomeIcon className='icone' icon={faBattery} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faCss3} />
                    CSS (SASS) responsivity
                    <FontAwesomeIcon className='icone' icon={faBattery} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faJs} />
                    JavaScript fundamentals
                    <FontAwesomeIcon className='icone' icon={faBattery4} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faSass} />
                    SASS
                    <FontAwesomeIcon className='icone' icon={faBattery} />
                </li>




            </ul>

            <h3>Studying right now</h3>

            <ul className='abilities'>

                <li>
                    <FontAwesomeIcon className='icone' icon={faPenToSquare} />
                    TypeScript fundamentals
                    <FontAwesomeIcon className='icone' icon={faBattery4} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faList} />
                    Backend
                    <FontAwesomeIcon className='icone' icon={faBattery2} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faJs} />
                    JavaScript advanced
                    <FontAwesomeIcon className='icone' icon={faBattery3} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faGitAlt} />
                    Git advanced
                    <FontAwesomeIcon className='icone' icon={faBattery4} />
                </li>
                <li>
                    <FontAwesomeIcon className='icone' icon={faAngular} />
                    Angular
                    <FontAwesomeIcon className='icone' icon={faBattery2} />
                </li>
            </ul>

            <h3>Softwares</h3>
            <ul className='abilities'>
                <li>
                    <FontAwesomeIcon className='icone' icon={faCode} />
                    VS Code
                    <FontAwesomeIcon className='icone' icon={faBattery} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faFigma} />
                    Figma
                    <FontAwesomeIcon className='icone' icon={faBattery3} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faNodeJs} />
                    Node.js
                    <FontAwesomeIcon className='icone' icon={faBattery3} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faPenAlt} />
                    Illustrator
                    <FontAwesomeIcon className='icone' icon={faBattery} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faPaintbrush} />
                    Photoshop
                    <FontAwesomeIcon className='icone' icon={faBattery} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faMusic} />
                    Ableton Live, Nuendo, Cubase
                    <FontAwesomeIcon className='icone' icon={faBattery} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faRobot} />
                    Virtual Box
                    <FontAwesomeIcon className='icone' icon={faBattery2} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faRobot} />
                    Automatic 1111
                    <FontAwesomeIcon className='icone' icon={faBattery3} />
                </li>
            </ul>

            <h3>OS</h3>
            <ul className='abilities'>
                <li>
                    <FontAwesomeIcon className='icone' icon={faMicrosoft} />
                    Windows
                    <FontAwesomeIcon className='icone' icon={faBattery4} />
                </li>

                <li>
                    <FontAwesomeIcon className='icone' icon={faLinux} />
                    Linux
                    <FontAwesomeIcon className='icone' icon={faBattery4} />
                </li>
            </ul>
        </div>
    )
}