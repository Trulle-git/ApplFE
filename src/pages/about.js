import './about.css'
import Talk from '../components/talk'
import { useState, useEffect } from 'react'

export default function About(){
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 
      
    return(
        <>
            <div className='aboutBanner'>
                <div className='aboutBannerTxt'>
                    <h1>We the Change of the Future
                    Let's be the Change, for our  
                    <span> Future</span></h1>
                </div>
                <div className='aboutImage'>
                    <img src='./images/aboutImage.png' alt='About Appl'/>
                </div>
            </div>
            <div className='aboutWrapper'>
                <h1>About US</h1>
                <p>
                    At APPL, we take immense pride in cultivating exclusive partnerships with industry-leading, premium brands. 
                    These collaborations stand as a testament to our steadfast dedication to upholding the highest standards of quality and pioneering technology. 
                    Our unwavering commitment to excellence is exemplified through our selective associations, 
                    ensuring that every product or brand we align with mirrors our vision of delivering nothing short of the best. 
                    We view our partnerships not merely as connections but as reflections of our relentless pursuit of superior quality, 
                    cutting-edge innovation, and unwavering dedication to our customers. This dedication forms the cornerstone of our ethos, 
                    empowering us to offer unparalleled solutions that redefine excellence in every aspect of our service and product offerings.
                </p>
                <h1>Our Technical Expertise</h1>
                {/* <div className='abtTech'>
                    <img src='./images/aboutDummy.png' alt=''/>
                </div> */}
                <p>
                At APPL, we take immense pride in cultivating exclusive partnerships with industry-leading, premium brands. 
                    These collaborations stand as a testament to our steadfast dedication to upholding the highest standards of quality and pioneering technology. 
                    Our unwavering commitment to excellence is exemplified through our selective associations, 
                    ensuring that every product or brand we align with mirrors our vision of delivering nothing short of the best. 
                    We view our partnerships not merely as connections but as reflections of our relentless pursuit of superior quality, 
                    cutting-edge innovation, and unwavering dedication to our customers. This dedication forms the cornerstone of our ethos, 
                    empowering us to offer unparalleled solutions that redefine excellence in every aspect of our service and product offerings.
                </p>
                <div className='subAbout'>
                    <h2>Empowering Informed Choices</h2>
                    <p>
                        We strive to empower our clients by guiding them toward cost-effective planning strategies. 
                        Our experts assist in making informed decisions that align seamlessly with individual requirements and budget constraints
                    </p>
                    <h2>Seamless Execution and Support</h2>
                    <p>
                        From selection to on-time installation, our team takes the lead. We pride ourselves on providing not only superior products but also a hassle-free experience, 
                        ensuring smooth operations from day one.
                    </p>
                    <h2>Dedication to Service Excellence</h2>
                    <p>
                        At APPL, our commitment transcends installation. We offer prompt after-sales service, supported by our skilled workforce and a commitment to ongoing customer support.
                    </p>
                </div>
                <h1>Vision</h1>
                <p>
                    Empowering our Nation in terms of Sustainable Development.
                </p>
                <h1>Mission</h1>
                <p>
                    Solar energy for a Greener Tomorrow. Aspiring to be "the leading and trusted organization" for creating awareness among general public for using Solar power.
                </p>
                <h1>Value</h1>
                <div className='aboutValue'>
                    <img src='./images/aboutValue.png' alt=''/>
                </div>
                <h1>Our Partner</h1>
                <div className='aboutClients'>
                    <div className='clients'>
                        <img src='./images/client1.png' alt=''/>
                    </div>
                    <div className='clients'>
                        <img src='./images/client2.png' alt=''/>
                    </div>
                    <div className='clients'>
                        <img src='./images/client3.png' alt=''/>
                    </div>
                    <div className='clients'>
                        <img src='./images/client4.png' alt=''/>
                    </div>
                    <div className='clients'>
                        <img src='./images/client5.svg' alt=''/>
                    </div>
                    <div className='clients'>
                        <img src='./images/client6.svg' alt=''/>
                    </div>
                    <div className='clients'>
                        <img src='./images/client7.png' alt=''/>
                    </div>
                </div>
                <div className='contactUS estTAlk'>
                    <Talk/>
                </div>
            </div>
        </>
    )
}