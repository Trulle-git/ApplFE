import './kitCard.css'
import { Link} from 'react-router-dom';

export default function Kitcard(){
    return(
        <div className='kitCardContainer'>
            <div className='kitCardImage'>
                <img src='./images/solarkit.png' alt=''/>
            </div>
            <div className='kitCardContent'>
                <h2>Rs 66,666</h2>
                <div className='kitDesp'>
                    <p>Area</p>
                    <p>55555 Sqft</p>
                </div>
                <div className='kitDesp'>
                    <p>Power Generation</p>
                    <p>500 W</p>
                </div>
                <div className='kitDesp'>
                    <p>Annual Saving</p>
                    <p>Rs 66,666</p>
                </div>
            </div>
            <div className='kitCardBtnContainer'>
                <Link to={'/packagedetails'}><button>Buy Now</button></Link>
            </div>
        </div>
    )
}