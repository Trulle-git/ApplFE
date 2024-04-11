import './solar.css'
import Kitcard from '../components/kitCard';
import Talk from '../components/talk';
import { useEffect } from 'react';

export default function Solar(){
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 
    return(
        // <div className='solarWrapper'>
        //     <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //     <br/>Integer sodales metus ut diam placerat efficitur.</h2>
        //     <div className='solarListing'>
        //         <Kitcard/>
        //         <Kitcard/>
        //         <Kitcard/>
        //         <Kitcard/>
        //         <Kitcard/>
        //         <Kitcard/>
        //         <Kitcard/>
        //         <Kitcard/>
        //         <Kitcard/> 
        //     </div>
        //     <div className='contactUS'>
        //         <Talk/>
        //     </div>
        // </div>

        <div style={{width:"100%",height:'100dvh',display:'flex',justifyContent:'center', alignItems:'center'}}>
            <h1>Soon...</h1>
        </div>
    );
}