
import './home.scss'

export const Home = (props) => {
    return (
        <div className='project'>
            <h2>Project</h2>

            <p>
                &ensp;&ensp;&ensp;&ensp;Developed with the intention of 
                accumulating experience, simulating all the necessary 
                steps in the construction of an application.
            </p>

            <h3>Objetive of the product</h3>
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
        </div>
    )
}