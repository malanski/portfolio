import './miscellaneous.scss'
import printSite from '../../assets/misc.png'

export const Miscellaneous = (props) => {
    return (
        <div className='miscellaneous'>
            <h2>Miscellaneous</h2>
            <img className="print-site"
                src={printSite}
                alt="youtube print"/>


        </div>
    )
}