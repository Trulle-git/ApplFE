import './footer.css'

export default function Footer(){
    return(
        <div className='footerWrapper'>
            <div className='footerContainer'>
                <div className='footerColumn footerBorder'>
                    <div className='footerLogo'>
                        <img src='./images/footerLogo.svg' alt='APPL'/>
                    </div>
                    <div className='footerAddress'>
                        <h2>Address:</h2>
                        <p className='addressline'>
                        74 B2C, Bagalur Rd, Tvs Plant, Hosur, Eluvapalli, 
                        Tamil Nadu 635109
                        </p>
                        <p>Phone:  <span>9600580990</span></p>
                    </div>
                </div>
                <div className='footerColumn footer2'>
                    <div className='footermenu'>
                        <p>Home</p>
                        <p>Estimator</p>
                        <p>Offer</p>
                        <p>Solar Kits</p>
                        <p>Story</p>
                    </div>
                    <div className='footerSub'>
                        <p>Solar Street Light</p>
                        <p>Solar Water Pump</p>
                        <p>Solar Water Heater</p>
                        <p>UPS & Battery</p>
                    </div>
                </div>
                <div className='footerColumn footer3'>
                    <h2>Follow Us On</h2>
                    <div className='icons'>
                        <div className='icon'>
                            <img src='./images/linkedin.svg' alt='in'/>
                        </div>
                        <div className='icon'>
                            <img src='./images/insta.svg' alt='in'/>
                        </div>
                        <div className='icon'>
                            <img src='./images/fb.svg' alt='in'/>
                        </div>
                        <div className='icon'>
                            <img src='./images/share.svg' alt='in'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}