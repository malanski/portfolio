
import './home.scss'

export const Home = (props) => {
    return (
        <div className='project1'>
            <h2>Project <small>(work in progress)</small></h2>

            <p className='aboutProject1'>
                &ensp;&ensp;&ensp;&ensp;
                Developed with the intention of 
                working on Agile / Scrum teams in order to
                accumulate experience and simulate all the necessary 
                steps in the construction of an application.<br/>
                &ensp;&ensp;&ensp;&ensp;
                Building complex software systems that have been 
                successfully delivered to customers.
                Knowledge of professional software engineering 
                practices and best practices for the full software 
                development life cycle, including coding standards, 
                code reviews, source control management, build processes, 
                testing, and operations.
            </p>

            <h3>Objective of the product</h3>
            <ul>
                <li>
                    A web courses rate system for students.
                </li>
            </ul>

            <h3>The user can:</h3>
            <ul>
                <li>
                    Create a comment with a form that will store that information.
                </li>

                <li>
                    Read his and other people's comments stored.
                </li>

                <li>
                    Update or edit his comments.
                </li>

                <li>
                    Delete his comments.
                </li>

            </ul>

            <h3>Repository</h3>

            <a
            href='https://github.com/malanski/projeto1'
            target="_blank" rel='noreferrer'>
                 https://github.com/malanski/projeto1
             </a>

             <h3>Prototype development</h3>

            <a
             href='https://malanski.github.io/courses-rank/'
             target="_blank" rel='noreferrer'>
                https://malanski.github.io/courses-rank/
                <img src='https://github.com/malanski/projeto1/raw/main/FigmaPrototype.png'
                className='project1-prototype' alt='project prototype'/>
            </a>

        </div>
    )
}