// import './Header.scss';

import { Nav } from '../Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
export function Footer() {
     return (
        <footer>
            <Nav />
            <p>
                Footer
            </p>

            
            <div className="App-header">
                <FontAwesomeIcon icon={faEarth} className="App-logo" />
                
                <p>
                    Open to work around de world
                </p>
            </div>
        </footer>
     )
}