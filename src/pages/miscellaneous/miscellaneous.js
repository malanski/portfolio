import './miscellaneous.scss';

import apiIcon from '../../../src/assets/api-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faCss3Alt, faHtml5, faJs, faReact, faSass, faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { faCalculator, faDatabase, faGamepad, faList, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons';

export const Miscellaneous = (props) => {
    return (
        <div className='miscellaneous'>
            <h2>Miscellaneous</h2>
           
            <section className="projects-section">
                <h3 className="projects-section-header">These are some of my other projects</h3>

                <div className="projects-grid">
                    <a href="https://malanski.github.io/spotify-client/"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                        <div className='project-header'>
                            <p className="project-title">
                                <big><b>Spotify Playlists</b></big><br/>
                                Consuming the Spotify API <br/>
                                JavaScript
                            </p>
                            <div className='tech-badge-card'>
                                <img src={apiIcon} className="iconBall" width="50px" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/spotify-client.png"
                            alt="project"/>
                    </a>

                    <a href="https://poke-store-next.vercel.app/"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                  
                        <div className='project-header'>
                            <p className="project-title">
                                <big><b>Poke-Store</b></big><br/>
                                Consuming the pokapi - Pokémon API<br/>
                                NextJs 
                            </p>
                            <div className='tech-badge-card'>
                                <img src={apiIcon} className="iconBall" width="50px" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                                <FontAwesomeIcon icon={faReact} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            
                            src="https://github.com/malanski/images/raw/main/pokeStoreNext.png"
                            alt="project"/>

                        
                    </a>

                    <a href="https://malanski.github.io/weather-weekly/"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                      
                        <div className='project-header'>
                            <p className="project-title">
                            <big><b>Weather Weekly</b></big><br/>
                                Consuming openweathermap.org API<br/>
                                JavaScript + HTML + CSS
                            </p>
                            <div className='tech-badge-card'>
                                <img src={apiIcon} className="iconBall" width="50px" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/weather-weekly.png"
                            alt="project"/>
                            
                    </a>

                    <a href="https://malanski.github.io/sintaxe-e-operadores/"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                        
                        <div className='project-header'>
                            <p className="project-title">
                            <big><b>Star Wars Characters</b></big><br/>
                                Consuming swapi.dev - Star Wars API<br/>
                                JavaScript + HTML + CSS
                            </p>
                            <div className='tech-badge-card'>
                                <img src={apiIcon} className="iconBall" width="50px" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/starwars1.png"
                            alt="project"/>
                    </a>

                    <a href="https://node-example-uli.herokuapp.com/"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                        
                        <div className='project-header'>
                            <p className="project-title">
                            <big><b>User cadaster Form</b></big><br/>
                                Express + Backend + Heroku Deploy<br/>
                                JavaScript
                            </p>
                            <div className='tech-badge-card'>
                                <img src={apiIcon} className="iconBall" width="50px" />
                                <FontAwesomeIcon icon={faDatabase} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/nodeExample.png"
                            alt="project"/>
                    </a>

                    <a href="https://malanski.github.io/GessingColorGame/"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                       
                        <div className='project-header'>
                            <p className="project-title">
                            <big><b>Color Guessing Game</b></big><br/>
                                Game based on RGB code numbers<br/>
                                JavaScript + HTML + CSS
                            </p>
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faGamepad} className="iconBall" />
                                <FontAwesomeIcon icon={faCss3} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/color-guessing.png"
                            alt="project"/>
                    </a>


                    <a href="https://codepen.io/malanski/full/xxYGmYY"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                      
                        <div className='project-header'>
                            <p className="project-title">
                            <big><b>Meteorites on Earth</b></big><br/>
                                Nasa registry about meteorite that hit the Earth<br/>
                                HTML + CSS 
                            </p>
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faCss3} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/Meteor.png"
                            alt="project"/>
                        
                    </a>
                    <a href="https://malanski.github.io/cron/"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                     
                        <div className='project-header'>
                            <p className="project-title">
                            <big><b>Stopwatch</b></big><br/>
                                ReactJs <br/>
                                JavaScript + SASS 
                            </p>
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faReact} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                                <FontAwesomeIcon icon={faSass} className="iconBall" />
                            </div>
                        </div>


                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/CronReactJS.png"
                            alt="project"/>
                        
                    </a>
                        <a href="https://codepen.io/malanski/pen/xxYGBqw"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                      
                        <div className='project-header'>
                            <p className="project-title">
                            <big><b>Wiki Search</b></big><br/>
                                Remotely search the wikipedia<br/>
                                JavaScript + HTML + CSS
                            </p>
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faSearch} className="iconBall" />
                                <FontAwesomeIcon icon={faWikipediaW} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/Wiki.png"
                            alt="project"/>
                        
                    </a>
                    <a href="https://codepen.io/malanski/full/QWQjgaZ"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                      

                        <div className='project-header'>
                            <p className="project-title">
                                <big><b>Quote Generator</b></big><br/>
                                Using a remote Json file with quotes to fetch them ramdomly<br/>
                                JavaScript + HTML + CSS 
                            </p>


                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faSearch} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/Quote.png"
                            alt="project"/>
                        
                    </a>
                    <a href="https://codepen.io/malanski/full/qBxOVvq"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                        
                        <div className='project-header'>
                            <p className="project-title">
                            <big><b>Tic-tac-toe Game</b></big><br/>
                                "Jogo da Velha"<br/>
                                JavaScript + HTML + CSS
                            </p>
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faGamepad} className="iconBall" />
                                <FontAwesomeIcon icon={faHtml5} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/XGame.png"
                            alt="project"/>
                        
                    </a>
                    <a href="https://malanski.github.io/pokeLoja2/"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                     
                        <div className='project-header'>
                            <p className="project-title">
                                <big><b>Poke-Store Card Game Style</b></big><br/>
                                Consuming the pokapi - Pokémon API<br/>
                                JavaScript + HTML + SASS
                            </p>
                            <div className='tech-badge-card'>
                                <img src={apiIcon} className="iconBall" width="50px" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                                <FontAwesomeIcon icon={faSass} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/pokestore1.png"
                            alt="project"/>
                    </a>

                    <a href="https://malanski.github.io/CalculatorX/"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                       
                        <div className='project-header'>
                            <p className="project-title">
                            <big><b>Calculator</b></big><br/>
                                Learning JS Operators an functions<br/>
                                JavaScript + HTML + CSS
                            </p>
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faCalculator} className="iconBall" />
                                <FontAwesomeIcon icon={faHtml5} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/calculator.png"
                            alt="project" />
                    </a>

                    <a href="https://codepen.io/malanski/full/qBxEVMP"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                   
                        <div className='project-header'>
                            <p className="project-title">
                            <big><b>Tribute Page</b></big><br/>
                                Learning HTML clean coding<br/>
                                HTML + CSS
                            </p>
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faPerson} className="iconBall" />
                                <FontAwesomeIcon icon={faHtml5} className="iconBall" />
                                <FontAwesomeIcon icon={faCss3Alt} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/TributePage.png"
                            alt="project"/>
                    </a>

                    <a href="https://malanski.github.io/courses-rank/"
                        target="_blank" rel='noreferrer'
                        className="project project-tile">
                     
                        <div className='project-header'>
                            <p className="project-title">
                            <big><b>HTML Form</b></big><br/>
                                Learning HTML form properties<br/>
                                HTML + CSS
                            </p>
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faList} className="iconBall" />
                                <FontAwesomeIcon icon={faHtml5} className="iconBall" />
                                <FontAwesomeIcon icon={faCss3Alt} className="iconBall" />
                            </div>
                        </div>

                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/CoursesRank.png"
                            alt="project"/>
                        
                    </a>

                    
                </div>
            </section>
        </div>
    )
}