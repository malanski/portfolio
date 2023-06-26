import './nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

// Customization for Link Actions
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true })

    return (
        <Link className={match ? "active" : "normal-link"} to={to} {...props}>{children}</Link>
    );
}

export function Nav() {
     return (
        <nav>
            <CustomLink title="About Ulisses Malanski" to="/">
                <span className="nav-links">
                    <FontAwesomeIcon icon={faGear} className="icons" />  About me <FontAwesomeIcon icon={faGear} className="iconsR" /></span>
            </CustomLink>

            <CustomLink title="Ulisses Malanski Web Dev Projects" to="/projects">
                <span className="nav-links"><FontAwesomeIcon icon={faGear} className="icons" /> Projects <FontAwesomeIcon icon={faGear} className="iconsR" /></span>
            </CustomLink>

            <CustomLink title="Ulisses Malanski skills" to="/skills">
                <span className="nav-links"> <FontAwesomeIcon icon={faGear} className="icons" /> Skills <FontAwesomeIcon icon={faGear} className="iconsR" /></span>
            </CustomLink>
        </nav>
    )
}