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
        <Link className={match ? "active" : ""} to={to} {...props}>{children}</Link>
    );
}

export function Nav() {
     return (
        <nav>
            <CustomLink to="/">
                Project
            </CustomLink>

            <CustomLink to="/miscellaneous">
                Miscellaneous
            </CustomLink>

            <CustomLink to="/skills">
                Skills
            </CustomLink>
        </nav>
     )
}