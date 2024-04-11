import { useState, useEffect } from 'react';
import './navMob.css'
import { Link, useLocation } from 'react-router-dom';

export default function NavMob(){
    const location = useLocation()
    const current_location = location.pathname.substring(1)
    const [menuClick, setMenuClick] = useState(false)
    
    
    return(
        // <div className='nav_container_mob' style={{backgroundColor:navBG, boxShadow:boxShadow}}>
        <div className='nav_container_mob'>
            <div className='nav_main_mob'>
                <div className='nav_logo'>
                    <Link to={'/'}>
                        <img src='./images/navLogo.svg' alt='trulle'/>
                    </Link>
                </div>
                <div className={menuClick?'nav_mob_menu':'dispalyNone'}>
                    <div className={menuClick?'nav_mob_menu_container':"displayNone"}>
                        <Link to={'/'} onClick={()=>setMenuClick(!menuClick)}>
                            <div className={current_location===""?"color-bar":''}></div>
                            <p>Home</p>
                        </Link>
                        <Link to={'/estimator'} onClick={()=>setMenuClick(!menuClick)}>
                            <div className={current_location==="estimator"?"color-bar":''}></div>
                            <p>Estimator</p>
                        </Link>
                        <Link to={'/solarkits'} onClick={()=>setMenuClick(!menuClick)}>
                            <div className={current_location==="solarkits"||current_location==="packagedetails"?"color-bar":''}></div>
                            <p>Solar Kits</p>
                        </Link>
                        <Link to={'/products'} onClick={()=>setMenuClick(!menuClick)}>
                            <div className={current_location==="products"||current_location==="productdetails"?"color-bar":''}></div>
                            <p>Products</p>
                        </Link>
                        <Link to={'/story'} onClick={()=>setMenuClick(!menuClick)}>
                            <div className={current_location==="story"||current_location==="storydetails"?"color-bar":''}></div>    
                            <p>Story</p>
                        </Link>                        
                        <Link to={'/about'} onClick={()=>setMenuClick(!menuClick)}>
                            <div className={current_location==="about"?"color-bar":''}></div>    
                            <p>About Us</p>
                        </Link>                        
                    </div>
                </div>
                <div className='nav_mob_menu_btn' onClick={()=>setMenuClick(!menuClick)}>
                    <div className={menuClick?'bar right':'bar'}></div>
                    <div className={menuClick?'opaZero':'bar'} style={{transition:'all 1s'}}></div>
                    <div className={menuClick?'bar left':'bar'}></div>
                </div>
            </div>
        </div>
    );
}