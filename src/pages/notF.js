import './solar.css'
import Kitcard from '../components/kitCard';
import Talk from '../components/talk';
import { useEffect } from 'react';

export default function NotF(){
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 
    return(        
        <div style={{width:"100%",height:'100dvh',display:'flex',justifyContent:'center', alignItems:'center'}}>
            <h1>Page Not Found</h1>
        </div>
    );
}