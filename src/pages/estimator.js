import { useState, useEffect } from 'react';
import './estimator.css'
import PropularProduct from '../components/popularProd';
import Talk from '../components/talk';
import { useLocation, useNavigate} from 'react-router-dom'

export default function Estimator(){
    const location = useLocation()
    const homeEst = location.state

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 
    const [estpage, setEstPage] = useState({
        pincode:'',
        bill:'',
        area:'',
        type:''
    })
    const formatter = new Intl.NumberFormat('en-IN');
    const [estimated, setEstimated]=useState({
        amount:0,
        plan:0,
        saving:"xxxx",
        reqArea:"xxx",
        genWatt:"xxxx",
        district:""
    })
    const estiChange = (e) =>{
        const {name, value} = e.target;
        setEstPage((preData)=>({
            ...preData,
            [name]:value
        }))
    }
    const [loadingest, setLoadingest] = useState(false)
    const [estimatedDiv, setEstimatedDiv] = useState(false)
    const submitEst = (e) =>{
        e.preventDefault()
        setLoadingest(true)
        // setEstPage({
        //     amount:0,
        //     plan:0,
        //     saving:"xxxx",
        //     reqArea:"xxx",
        //     genWatt:"xxxx",
        //     district:""
        // })
        fetch(`https://api.postalpincode.in/pincode/${estpage.pincode}`)
        .then(res=>res.json())
        .then(data=>{
            setEstimatedDiv(true)
            setLoadingest(false)            
            if (data[0].PostOffice){
                // console.log(data[0].PostOffice[0].Block)
                if(estpage.bill<1080){
                    setEstimated((preData)=>({
                        ...preData,
                        amount:formatter.format(1*67000),
                        plan:1,
                        saving:"xxxx",
                        reqArea:"xxx",
                        genWatt:"xxxx",
                        district:data[0].PostOffice[0].District
                    }))
                }else if(estpage.bill>=1080 && estpage.bill<6400){
                    setEstimated((preData)=>({
                        ...preData,
                        amount:formatter.format(3*67000),
                        plan:3,
                        saving:"xxxx",
                        reqArea:"xxx",
                        genWatt:"xxxx",
                        district:data[0].PostOffice[0].District
                    }))
                }else if(estpage.bill>=6400 && estpage.bill<13000){
                    setEstimated((preData)=>({
                        ...preData,
                        amount:formatter.format(5*67000),
                        plan:5,
                        saving:"xxxx",
                        reqArea:"xxx",
                        genWatt:"xxxx",
                        district:data[0].PostOffice[0].District
                    }))
                }else if(estpage.bill>=13000 && estpage.bill<25000){
                    setEstimated((preData)=>({
                        ...preData,
                        amount:formatter.format(10*67000),
                        plan:10,
                        saving:"xxxx",
                        reqArea:"xxx",
                        genWatt:"xxxx",
                        district:data[0].PostOffice[0].District
                    }))
                }else{
                    setEstimated((preData)=>({
                        ...preData,
                        amount:formatter.format(15*67000),
                        plan:15,
                        saving:"xxxx",
                        reqArea:"xxx",
                        genWatt:"xxxx",
                        district:data[0].PostOffice[0].District
                    }))
                }
            }else{
                console.log("not Valid")
            }
        })
        .catch(err=>console.error("erroe:",err))        
    }

    useEffect(()=>{
        console.log(homeEst)
        if(homeEst){
            setLoadingest(true)
            fetch(`https://api.postalpincode.in/pincode/${homeEst.pincode}`)
            .then(res=>res.json())
            .then(data=>{
                setEstimatedDiv(true)
                setLoadingest(false)            
                if (data[0].PostOffice){
                    // console.log(data[0].PostOffice[0].Block)
                    if(homeEst.bill<1080){
                        setEstimated((preData)=>({
                            ...preData,
                            amount:formatter.format(1*67000),
                            plan:1,
                            saving:"xxxx",
                            reqArea:"xxx",
                            genWatt:"xxxx",
                            district:data[0].PostOffice[0].District
                        }))
                    }else if(homeEst.bill>=1080 && homeEst.bill<6400){
                        setEstimated((preData)=>({
                            ...preData,
                            amount:formatter.format(3*67000),
                            plan:3,
                            saving:"xxxx",
                            reqArea:"xxx",
                            genWatt:"xxxx",
                            district:data[0].PostOffice[0].District
                        }))
                    }else if(homeEst.bill>=6400 && homeEst.bill<13000){
                        setEstimated((preData)=>({
                            ...preData,
                            amount:formatter.format(5*67000),
                            plan:5,
                            saving:"xxxx",
                            reqArea:"xxx",
                            genWatt:"xxxx",
                            district:data[0].PostOffice[0].District
                        }))
                    }else if(homeEst.bill>=13000 && homeEst.bill<25000){
                        setEstimated((preData)=>({
                            ...preData,
                            amount:formatter.format(10*67000),
                            plan:10,
                            saving:"xxxx",
                            reqArea:"xxx",
                            genWatt:"xxxx",
                            district:data[0].PostOffice[0].District
                        }))
                    }else{
                        setEstimated((preData)=>({
                            ...preData,
                            amount:formatter.format(15*67000),
                            plan:15,
                            saving:"xxxx",
                            reqArea:"xxx",
                            genWatt:"xxxx",
                            district:data[0].PostOffice[0].District
                        }))
                    }
                }else{
                    console.log("not Valid")
                }
            })
            .catch(err=>console.error("erroe:",err))        
        }
    },[homeEst])
    
    return(
        <>
        <div className='estimatorWrapper'>
            <div className='estimatorContainer'>
                <div className='estimator'>
                    <div className='stripText'>
                        <div className='before'></div>
                        <h1><span className='span1'>LET’S PLAN YOUR</span> <span className='span2'>SOLAR</span></h1>
                        <div className='after'></div>
                    </div>
                    <div  className='formcontainer'>
                        <form onSubmit={submitEst}>
                            <div className='formRow'>
                                <div className='est-input-container'>
                                    <label>Pincode</label>
                                    <input
                                        type='text'
                                        name='pincode'
                                        value={estpage.pincode}
                                        onChange={estiChange}
                                        minLength="6"
                                        maxLength="6"
                                        pattern='[0-9]*'
                                        required
                                    />
                                </div>
                                <div className='est-input-container'>
                                    <label>Average Bill</label>
                                    <input
                                        type='number'
                                        name='bill'
                                        value={estpage.bill}
                                        onChange={estiChange}
                                        required
                                    />
                                </div>
                                <div className='est-input-container'>
                                    <label>Available Area</label>
                                    <input
                                        type='number'
                                        name='area'
                                        value={estpage.area}
                                        onChange={estiChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='formRow'>
                                <div className='est-input-container'>
                                    <label>Available Area</label>
                                    <select
                                        name='type'
                                        value={estpage.type}
                                        onChange={estiChange}
                                    >                                        
                                        <option value='residential'>Residential</option>
                                        <option value='commercial'>Commercial</option>
                                    </select>
                                </div>
                                <div className='est-input-container est-sumbit'>
                                    <br/>
                                    <input
                                        type='submit'
                                        value='Submit'
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='est-image-container'>
                    <img src='./images/estImage.png' alt='Panel'/>
                </div>
            </div>
            <div className='whatToShowEstimated'>
                {estimatedDiv?(
                <div className='estimated'>
                    <div className='saving-details'>
                        <div className='estiHeader'>
                            <h1>Your Solar Plan is {estimated.plan} KW</h1>
                            <p>{estimated.district}</p>
                        </div>
                        <div className='piggyContainer'>
                            <div className='piggy'>
                                <div className='piggyImage'>
                                    <img src='./images/piggy.png' alt=''/>
                                </div>
                                <h2>Rs {estimated.saving}</h2>
                                <p>Monthly Savings</p>
                            </div>
                            <div className='piggy'>
                                <div className='piggyImage'>
                                    <img src='./images/piggy.png' alt=''/>
                                </div>
                                <h2>{estimated.reqArea} Sqft</h2>
                                <p>Required Area</p>
                            </div>
                            <div className='piggy'>
                                <div className='piggyImage'>
                                    <img src='./images/piggy.png' alt=''/>
                                </div>
                                <h2>{estimated.genWatt} W</h2>
                                <p>Monthly Generation</p>
                            </div>
                        </div>
                        <div className='estSpecifications'>
                            <h2>Critical Note</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales metus ut diam placerat efficitur.</p>
                            <h2>Specification</h2>
                            <p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Curabitur non mauris quis urna lobortis congue et quis ex.</li>
                                    <li>Mauris feugiat augue in turpis pharetra elementum.</li>
                                    <li>Nullam pulvinar lorem in est molestie dignissim.</li>
                                    <li>Aliquam et tellus eu neque condimentum placerat sit amet vitae turpis.</li>
                                    <li>Nam a metus quis orci semper condimentum at sit amet dui.</li>
                                    <li>Curabitur gravida est at cursus gravida.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className='saving-money'>
                        <div className='est-price'>
                            <h1>Rs. {estimated.amount}</h1>
                            <p>Estimated Price</p>
                        </div>
                        <div className='estiTerms'>
                            <p>
                                Easy EMI Available<br/>
                                Price Included Installation<br/>
                                Teams to be added<br/>
                                Teams to be added<br/>
                            </p>
                        </div>
                        <div className='estiTalkBtn'>
                            <button>Let's Talk</button>
                        </div>
                    </div>
                </div>
            ):(
            <div className='estimated'>
                <div className='fillForm'>
                    <h1>Fill the Above Form <br/>Get an Estimation</h1>
                </div>
            </div>
            )}
            </div>
            {/* <div className={estimatedDiv?'estimated show':'estimated hide'}>
                <div className='saving-details'>
                    <div className='estiHeader'>
                        <h1>Your Solar Plan is 4 KW</h1>
                        <p>Vellore</p>
                    </div>
                    <div className='piggyContainer'>
                        <div className='piggy'>
                            <div className='piggyImage'>
                                <img src='./images/piggy.png' alt=''/>
                            </div>
                            <h2>Rs 2000</h2>
                            <p>Monthly Savings</p>
                        </div>
                        <div className='piggy'>
                            <div className='piggyImage'>
                                <img src='./images/piggy.png' alt=''/>
                            </div>
                            <h2>350 Sqft</h2>
                            <p>Required Area</p>
                        </div>
                        <div className='piggy'>
                            <div className='piggyImage'>
                                <img src='./images/piggy.png' alt=''/>
                            </div>
                            <h2>500 W</h2>
                            <p>Monthly Generation</p>
                        </div>
                    </div>
                    <div className='estSpecifications'>
                        <h2>Critical Note</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales metus ut diam placerat efficitur.</p>
                        <h2>Specification</h2>
                        <p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Curabitur non mauris quis urna lobortis congue et quis ex.</li>
                                <li>Mauris feugiat augue in turpis pharetra elementum.</li>
                                <li>Nullam pulvinar lorem in est molestie dignissim.</li>
                                <li>Aliquam et tellus eu neque condimentum placerat sit amet vitae turpis.</li>
                                <li>Nam a metus quis orci semper condimentum at sit amet dui.</li>
                                <li>Curabitur gravida est at cursus gravida.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='saving-money'>
                    <div className='est-price'>
                        <h1>Rs. 1,26,000</h1>
                        <p>Estimated Price</p>
                    </div>
                    <div className='estiTerms'>
                        <p>
                            Easy EMI Available<br/>
                            Price Included Installation<br/>
                            Teams to be added<br/>
                            Teams to be added<br/>
                        </p>
                    </div>
                    <div className='estiTalkBtn'>
                        <button>Let's Talk</button>
                    </div>
                </div>
            </div> */}
            <div className='popular-products'>
                <h1>Popular Product</h1>
            </div>
            <div className='pop-container estPOP'>
                    <PropularProduct/>
            </div>
            <div className='contactUS estTAlk'>
                <Talk/>
            </div>
        </div>
        <div className={loadingest?'estloadingContainer showFlex':'estloadingContainer hide'}>
            <div className='estloadingBG'></div>
            <div className='estloading'>
                <img src='../images/loading.png' />
            </div>
        </div>
        </>
    );
}