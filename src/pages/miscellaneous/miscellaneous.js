import './miscellaneous.scss';

import apiIcon from '../../../src/assets/api-logo.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faCss3Alt, faGithubSquare, faHtml5, faJs, faReact, faSass, faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { faCalculator, faDatabase, faGamepad, faList, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons';

export const Miscellaneous = (props) => {
    return (
        <div className='miscellaneous'>
            <h2>Miscellaneous</h2>
           
            <section className="projects-section">
                <h3 className="projects-section-header">These are some of my other projects</h3>

                <div className="projects-grid">
                    <div className="project project-tile">
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>Spotify Playlists</b></big></p>
                                <p>Consuming the Spotify API</p>
                                <p>JavaScript + HTML + CSS</p>
                                <a href="https://github.com/malanski/spotify-client" title="Repository" >
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                            <div className='tech-badge-card'>
                                <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://malanski.github.io/spotify-client/"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/spotify-client.png"
                                alt="project"/>
                        </a>
                    </div>

                    <div className="project project-tile">
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>Poke-Store</b></big></p>
                                <p>Consuming the pokapi - Pokémon API</p>
                                <p>NextJs</p>
                                <a href="https://github.com/malanski/poke-store-nexthttps://github.com/malanski/poke-store-next" title="Repository">
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                            <div className='tech-badge-card'>
                                <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                                <FontAwesomeIcon icon={faReact} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://poke-store-next.vercel.app/"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                            
                                src="https://github.com/malanski/images/raw/main/pokeStoreNext.png"
                                alt="project"/>
                        </a>
                    </div>

                    <div className="project project-tile">
                      
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>Weather Weekly</b></big></p>
                                <p>Consuming openweathermap.org API</p>
                                <p>JavaScript + HTML + CSS</p>
                                <a href="https://github.com/malanski/weather-weekly" title="Repository">
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                            
                            <div className='tech-badge-card'>
                                <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://malanski.github.io/weather-weekly/"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/weather-weekly.png"
                                alt="project"/>
                        </a>
                    </div>

                    <div className="project project-tile">
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>Star Wars Characters</b></big></p>
                                <p>Consuming swapi.dev - Star Wars API</p>
                                <p>JavaScript + HTML + CSS</p>
                                <a href="https://github.com/malanski/sintaxe-e-operadores" title="Repository">
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                            
                            <div className='tech-badge-card'>
                                <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://malanski.github.io/sintaxe-e-operadores/"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/starwars1.png"
                                alt="project"/>
                        </a>
                    </div>

                    <div className="project project-tile">
                        
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>User cadaster Form</b></big></p>
                                <p>Express + Backend + Heroku Deploy</p>
                                <p>JavaScript + HTML + CSS</p>
                                <a href="https://github.com/malanski/node_example" title="Repository">
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                            
                            <div className='tech-badge-card'>
                                <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />
                                <FontAwesomeIcon icon={faDatabase} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://node-example-uli.herokuapp.com/"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/nodeExample.png"
                                alt="project"/>
                        </a>
                    </div>

                    <div className="project project-tile">
                       
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>Color Guessing Game</b></big></p>
                                <p>Game based on RGB code numbers</p>
                                <p>JavaScript + HTML + CSS</p>
                                <a href="https://github.com/malanski/GessingColorGame" title="Repository">
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                           
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faGamepad} className="iconBall" />
                                <FontAwesomeIcon icon={faCss3} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://malanski.github.io/GessingColorGame/"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/color-guessing.png"
                                alt="project"/>
                        </a>
                    </div>


                    <div className="project project-tile">
                      
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>Meteorites on Earth</b></big></p>
                                <p>Nasa registry about meteorite that hit the Earth</p>
                                <p>JavaScript + HTML + CSS</p>
                                <a href="https://codepen.io/malanski/pen/xxYGmYY" title="Code Pen">
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                            
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faCss3} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://codepen.io/malanski/full/xxYGmYY"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/Meteor.png"
                                alt="project"/>
                        </a>
                    </div>

                    <div className="project project-tile">
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>Stopwatch</b></big></p>
                                <p>JavaScript + HTML + CSS</p>
                                <a href="https://github.com/malanski/cron" title="Repository">
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                           
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faReact} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                                <FontAwesomeIcon icon={faSass} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://malanski.github.io/cron/"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/CronReactJS.png"
                                alt="project"/>
                        </a>
                    </div>

                    <div className="project project-tile">
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>Wiki Search</b></big></p>
                                <p>Remotely search the wikipedia</p>
                                <p>JavaScript + HTML + CSS</p>
                                <a href="https://codepen.io/malanski/pen/xxYGBqw" title="Code Pen">
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                            
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faSearch} className="iconBall" />
                                <FontAwesomeIcon icon={faWikipediaW} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://codepen.io/malanski/full/xxYGBqw"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/Wiki.png"
                                alt="project"/>
                        </a>
                    </div>

                    <div className="project project-tile">
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>Quote Generator</b></big></p>
                                <p>Using a remote Json file with quotes to fetch them ramdomly</p>
                                <p>JavaScript + HTML + CSS</p>
                                <a href="https://codepen.io/malanski/pen/QWQjgaZ" title="Code Pen">
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>

                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faSearch} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://codepen.io/malanski/full/QWQjgaZ"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/Quote.png"
                                alt="project"/>
                        </a>
                    </div>

                    <div className="project project-tile">
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>Tic-tac-toe Game</b></big></p>
                                <p>"Jogo da Velha"</p>
                                <p>JavaScript + HTML + CSS</p>
                                <a href="https://codepen.io/malanski/pen/qBxOVvq" title="Repository">
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                            
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faGamepad} className="iconBall" />
                                <FontAwesomeIcon icon={faHtml5} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://codepen.io/malanski/full/qBxOVvq"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/XGame.png"
                                alt="project"/>
                        </a>
                    </div>

                    <div className="project project-tile">
                     
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>Poke-Store Card Game Style</b></big></p>
                                <p>Consuming the pokapi - Pokémon API</p>
                                <p>JavaScript + HTML + CSS</p>
                                <a href="https://github.com/malanski/pokeLoja2" title="Repository" >
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                            
                            <div className='tech-badge-card'>
                                <img src={apiIcon} alt="API icon" className="iconBall" width="50px" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                                <FontAwesomeIcon icon={faSass} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://malanski.github.io/pokeLoja2/"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/pokestore1.png"
                                alt="project"/>
                        </a>
                    </div>

                    <div className="project project-tile">
                       
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>Calculator</b></big></p>
                                <p>Learning JS Operators an functions</p>
                                <p>JavaScript + HTML + CSS</p>
                                <a href="https://github.com/malanski/CalculatorX" title="Repository">
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                            
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faCalculator} className="iconBall" />
                                <FontAwesomeIcon icon={faHtml5} className="iconBall" />
                                <FontAwesomeIcon icon={faJs} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://malanski.github.io/CalculatorX/"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/calculator.png"
                                alt="project" />
                        </a>
                    </div>

                    <div className="project project-tile">
                   
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>Tribute Page</b></big></p>
                                <p>Learning HTML clean coding</p>
                                <p>HTML + CSS</p>
                                <a href="https://codepen.io/malanski/pen/qBxEVMP" title="Repository">
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                            
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faPerson} className="iconBall" />
                                <FontAwesomeIcon icon={faHtml5} className="iconBall" />
                                <FontAwesomeIcon icon={faCss3Alt} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://codepen.io/malanski/full/qBxEVMP"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/TributePage.png"
                                alt="project"/>
                        </a>
                    </div>

                    <div className="project project-tile">
                     
                        <div className='project-header'>
                            <div className="project-title">
                                <p><big><b>HTML Form</b></big></p>
                                <p>Learning HTML form properties</p>
                                <p>HTML + CSS</p>
                                <a href="https://github.com/malanski/courses-rank" title="Repository">
                                    <FontAwesomeIcon className='repository' icon={faGithubSquare} /> Repository
                                </a>
                            </div>
                            
                            <div className='tech-badge-card'>
                                <FontAwesomeIcon icon={faList} className="iconBall" />
                                <FontAwesomeIcon icon={faHtml5} className="iconBall" />
                                <FontAwesomeIcon icon={faCss3Alt} className="iconBall" />
                            </div>
                        </div>

                        <a href="https://malanski.github.io/courses-rank/"
                            target="_blank" rel='noreferrer' title='Deploy'>
                            <img className="project-image"
                                src="https://github.com/malanski/images/raw/main/CoursesRank.png"
                                alt="project"/>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}