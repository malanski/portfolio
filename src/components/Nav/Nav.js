// import './Header.scss';
import './nav.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
    Link,
    useMatch,
    useResolvedPath
} from 'react-router-dom';


// Cutomization for Link Actions
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true })

    return (
        <Link className={match ? "active" : "links"} to={to} {...props}>{children}</Link>
    );
}

export function Nav() {
     return (
        <nav>
            <CustomLink  to="/">
                <span className="nav-links">Project</span>
            </CustomLink>

            <CustomLink  to="/miscellaneous">
                <span className="nav-links">Miscellaneous</span>
            </CustomLink>

            <CustomLink  to="/skills">
                <span className="nav-links">Skills</span>
            </CustomLink>
        </nav>
     )
}