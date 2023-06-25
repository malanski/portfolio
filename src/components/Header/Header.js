import { Nav } from '../Nav';
import './Header.scss';

export function Header({ isNightMode, toggleNightMode }) {

          return (
            <header className={isNightMode? 'night-mode' : ''}>
        
              <button className="night-mode-btn" onClick={toggleNightMode}>
                {isNightMode? 'Day Mode' : 'Night Mode'}
              </button>
              <h1 className="title">
                Ulisses Malanski <br />
                Portfolio
              </h1>
              <Nav />
            </header>
     )
}