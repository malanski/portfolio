import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Nav } from '../Nav';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Header({ isNightMode, toggleNightMode }) {

          return (
            <header className={isNightMode? 'night-mode' : ''}>
              <button className="night-mode-btn" onClick={toggleNightMode}>
                {isNightMode? 
                <div className='mode-btn-icons'>
                  <FontAwesomeIcon icon={faSun} />
                  <span>&ensp;Day Mode&ensp;</span>
                  <FontAwesomeIcon icon={faSun} />
                </div> : 
                <div className='mode-btn-icons'>
                  <FontAwesomeIcon icon={faMoon} />
                  <span>&ensp;Night Mode&ensp;</span>
                  <FontAwesomeIcon icon={faMoon} />
                </div> }

              </button>

              <h1 className="title">
                Ulisses Malanski Portfolio
              </h1>

              <Nav />
            </header>
     )
}

