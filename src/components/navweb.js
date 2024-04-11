import { useEffect, useState } from 'react';
import './navweb.css'
import { Link, useLocation } from 'react-router-dom';

export default function Navweb(){
    const location = useLocation()
    const current_location = location.pathname.substring(1)
    return(
        <div className='navContainer'>
            <div className='navLogo'>
                <Link to={'/'}>
                    <img src='./images/navLogo.svg' alt='logo'/>
                </Link>
            </div>
            <div className='navElements'>
                <Link to={'/'}>
                    <div className={current_location===""?"color-bar":''}></div>
                    <p>Home</p>
                </Link>
                <Link to={'/estimator'}>
                    <div className={current_location==="estimator"?"color-bar":''}></div>
                    <p>Estimator</p>
                </Link>
                {/* <Link to={'/offer'}>
                    <div className={current_location==="offer"?"color-bar":''}></div>
                    <p>Offer</p>
                </Link> */}
                <Link to={'/solarkits'}>
                    <div className={current_location==="solarkits"||current_location==="packagedetails"?"color-bar":''}></div>
                    <p>Solar Kits</p>
                </Link>
                <Link to={'/products'}>
                    <div className={current_location==="products"||current_location==="productdetails"?"color-bar":''}></div>
                    <p>Products</p>
                </Link>
                <Link to={'/story'}>
                    <div className={current_location==="story"||current_location==="storydetails"?"color-bar":''}></div>    
                    <p>Story</p>
                </Link>
                <Link to={'/about'}>
                    <div className={current_location==="about"?"color-bar":''}></div>    
                    <p>About Us</p>
                </Link>
            </div>
            <div className='navCall'>
                <img src='./images/navCall.png' alt='call'/>
            </div>
        </div>
    );
}