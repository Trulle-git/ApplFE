import './story.css'
import Card from '../components/cardStory';
import Talk from '../components/talk';
import { useEffect, useState } from 'react';

export default function Story(){
    const [stories, setStory]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8801/stories")
        .then(res=>res.json())
        .then(data=>setStory(data.rows))
    },[])

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 
    const story=[
        ['Commercial', 'Vellore', 2.5, './images/story.png'],
        ['Residental', 'Ambur', 5.5, './images/story.png'],
        ['Commercial', 'Kanammangalam', 3.5, './images/story.png'],
        ['Residental', 'Tiruvannamalai', 1.5, './images/story.png'],
        ['Residental', 'Ranipet', 2.5, './images/story.png'],
        ['Commercial', 'Arni', 3.0, './images/story.png'],
        ['Residental', 'Katpadi', 1.0, './images/story.png'],
    ]
    return(
        <>
            <div className='productBanner'>
                <img src='./images/prodDummyBanner.png' alt=''/>
            </div>
            <div className='storyWrapper'>
                <div className='storyList'>
                    {stories.map((item)=>{
                        return<Card item={item}/>
                    })}
                </div>
                <div className='contactUS estTAlk'>
                    <Talk/>
                </div>
            </div>
        </>
    );
}