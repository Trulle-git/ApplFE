import { Link } from 'react-router-dom';

export default function Card({item}){
    return(
        <div className='live-main'>
            <div className='live-title'>
                <h2>{item.storytype}</h2>
                <p>{item.storylocation}</p>
            </div>
            <div className='live-power'>
                <h1>{item.storygen} KW</h1>
                <div className='sun-image'>
                    <img src='./images/sun.svg' alt=''/>
                </div>
            </div>
            <div className='live-story-image'>
                <img src={`http://localhost:8801/upload/${item.image1}`} alt='Site'/>
            </div>
            <div className='live-read'>
                <Link to={'/storydetails'} state={{storyData:item}}>
                    <p>Read More</p>
                    <div className='live-read-arrow'>
                        <img src='./images/live-arrow.svg' alt='Site'/>
                    </div>
                </Link>
            </div>
        </div>
    );
    }