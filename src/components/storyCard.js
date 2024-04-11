import './storyCard.css'
import { useRef, useState, useEffect } from 'react';
import Card from './cardStory';
    
export default function Liveprop (){

    // const story=[
    //     ['Commercial', 'Vellore', 2.5, './images/story.png'],
    //     ['Residental', 'Ambur', 5.5, './images/story.png'],
    //     ['Commercial', 'Kanammangalam', 3.5, './images/story.png'],
    //     ['Residental', 'Tiruvannamalai', 1.5, './images/story.png'],
    //     ['Residental', 'Ranipet', 2.5, './images/story.png'],
    //     ['Commercial', 'Arni', 3.0, './images/story.png'],
    //     ['Residental', 'Katpadi', 1.0, './images/story.png'],
    // ]
    const [story, setStory]= useState([])
    useEffect(()=>{
      fetch("http://localhost:8801/liveProject")
        .then(res=>res.json())
        .then(data=>setStory(data))
    })

    const sliderWidth = `${story.length*350+50}px`
    
    const scrollableRef = useRef(null);

    const handleMouseEnter = () => {
      const scrollable = scrollableRef.current;
      if (scrollable) {
        scrollable.addEventListener('wheel', handleScroll);
      }
    };
  
    const handleMouseLeave = () => {
      const scrollable = scrollableRef.current;
      if (scrollable) {
        scrollable.removeEventListener('wheel', handleScroll);
      }
    };
  
    const handleScroll = (e) => {
      const scrollable = scrollableRef.current;
      if (scrollable) {
        e.preventDefault();
        scrollable.scrollLeft += e.deltaY*.5;

        if (scrollable.scrollLeft === (scrollable.scrollWidth - scrollable.clientWidth)) {
            scrollable.removeEventListener('wheel', handleScroll);
          } else if (scrollable.scrollLeft <= 0) {
            scrollable.scrollLeft = 0;
            scrollable.removeEventListener('wheel', handleScroll);
          }
      }

    }
    return(
        <div 
        className='pop-slider-container'
        ref={scrollableRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <div className='pop-slider livePad' style={{width:`${sliderWidth}`}}>
                {story.map((item, key)=>{
                    return(
                        <Card
                        item={item}/>
                    )
                })}
            </div>
        </div>
        
    )
}