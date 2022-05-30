import './miscellaneous.scss'
import printSite from '../../assets/misc.png'

export const Miscellaneous = (props) => {
    return (
        <div className='miscellaneous'>
            <h2>Miscellaneous</h2>


            {/* <img className="print-site"
                src={printSite}
                alt="youtube print"/> */}

            <section className="projects-section">
                <h3 className="projects-section-header">These are some of my projects</h3>

                <div className="projects-grid">
                    <a href="https://poke-store-next.vercel.app/"
                        target="_blank"
                        className="project project-tile">
                        <p className="project-title">
                            Poke-Store<br/>
                            Next.js + pokeAPI + Vercel Deploy
                        </p>
                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/pokeStoreNext.png"
                            alt="project"/>
                            
                    </a>

                    <a href="https://node-example-uli.herokuapp.com/"
                        target="_blank"
                        className="project project-tile">
                        <p className="project-title">
                            User cadaster Form<br/>
                            Express + Backend + Heroku Deploy
                        </p>
                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/nodeExample.png"
                            alt="project"/>
                        
                    </a>

                    <a href="https://codepen.io/malanski/full/qBxEVMP"
                        target="_blank"
                        className="project project-tile">
                        <p className="project-title">
                            Tribute Page
                        </p>
                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/TributePage.png"
                            alt="project"/>
                        
                    </a>

                    <a href="https://malanski.github.io/GessingColorGame/"
                        target="_blank"
                        className="project project-tile">
                        <p className="project-title">
                            Color Guessing Game
                        </p>
                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/color-guessing.png"
                            alt="project"/>
                        
                    </a>

                    
                    <a href="https://codepen.io/malanski/full/xxYGmYY"
                        target="_blank"
                        className="project project-tile">
                        <p className="project-title">
                            Meteorites on Earth
                        </p>
                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/Meteor.png"
                            alt="project"/>
                        
                    </a>
                    <a href="https://malanski.github.io/cron/"
                        target="_blank"
                        className="project project-tile">
                        <p className="project-title">
                            ReactJS Cronometer
                        </p>
                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/CronReactJS.png"
                            alt="project"/>
                        
                    </a>
                        <a href="https://codepen.io/malanski/pen/xxYGBqw"
                        target="_blank"
                        className="project project-tile">
                        <p className="project-title">
                            Wiki Search
                        </p>
                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/Wiki.png"
                            alt="project"/>
                        
                    </a>
                    <a href="https://codepen.io/malanski/full/QWQjgaZ"
                        target="_blank"
                        className="project project-tile">
                        <p className="project-title">
                            Quote Generator
                        </p>
                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/Quote.png"
                            alt="project"/>
                        
                    </a>
                    <a href="https://codepen.io/malanski/full/qBxOVvq"
                        target="_blank"
                        className="project project-tile">
                        <p className="project-title">
                            Tic-tac-toe Game
                        </p>
                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/XGame.png"
                            alt="project"/>
                        
                    </a>
                    <a href="https://malanski.github.io/pokeLoja2/"
                        target="_blank"
                        className="project project-tile">
                        <p className="project-title">
                            Pokéstore Card Game Style
                        </p>
                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/pokestore1.png"
                            alt="project"/>
                        
                    </a>

                    <a href="https://malanski.github.io/CalculatorX/"
                        target="_blank"
                        className="project project-tile">
                        <p className="project-title">
                            JavaScript Calculator
                        </p>
                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/calculator.png"
                            alt="project" />
                        
                    </a>

                    <a href="https://malanski.github.io/courses-rank/"
                        target="_blank"
                        className="project project-tile">
                        <p className="project-title">
                            Courses Rate Form
                        </p>
                        <img className="project-image"
                            src="https://github.com/malanski/images/raw/main/CoursesRank.png"
                            alt="project"/>
                        
                    </a>

                    
                </div>
            </section>
        </div>
    )
}