import './popularProd.css'
import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function Card({image, title}){
    return(
          <div className='pop-card-container'>
            <Link to={'/products'}>
              <div className='pop-image'>
                  <img src={image} alt={image}/>
              </div>
              <div className='pop-title'>
                  <p>{title}</p>
              </div>
            </Link>
          </div>
        
    );
}
export default function PropularProduct(){
    // const pop_products = [
    //     ['Semi Integrated Light', './images/pop-prod-1.png'],
    //     ['Semi Integrated Light', './images/pop-prod-2.png'],
    //     ['Semi Integrated Light', './images/pop-prod-1.png'],
    //     ['Semi Integrated Light', './images/pop-prod-2.png'],
    //     ['Semi Integrated Light', './images/pop-prod-2.png'],
    //     ['Semi Integrated Light', './images/pop-prod-1.png'],
    //     ['Semi Integrated Light', './images/pop-prod-1.png'],
    //     ['Semi Integrated Light', './images/pop-prod-2.png'],
    //     ['Semi Integrated Light', './images/pop-prod-1.png'],
    //     ['Semi Integrated Light', './images/pop-prod-2.png'],
    // ] 

    const [pop_products, setPop_product] = useState([])
    useEffect(()=>{
      fetch("http://localhost:8801/liveProduct")
        .then(res=>res.json())
        .then(data=>setPop_product(data))
    })

    const sliderWidth = `${pop_products.length*300 + 50}px`
    
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
        <>
            <div 
            className='pop-slider-container'
            ref={scrollableRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
              {/* <div 
            className='pop-slider-container'
            > */}
                <div className='pop-slider' style={{width:`${sliderWidth}`}}>
                    {pop_products.map((item, key)=>{
                        return(
                            <Card
                            title={item.name}
                            image={`http://localhost:8801/upload/${item.image1}`}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    );
}