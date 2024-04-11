import './offer.css'
import { useEffect } from 'react';

export default function Offer(){
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 
    return(
        <div style={{width:"100%",height:'100dvh',display:'flex',justifyContent:'center', alignItems:'center'}}>
            <h1>Offers Yet to Update</h1>
        </div>
    );
}