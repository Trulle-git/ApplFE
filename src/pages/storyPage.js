import { useLocation, useNavigate } from 'react-router-dom';
import './storyPage.css'
import Talk from '../components/talk';
import { useEffect, useState } from 'react';

export default function StoryPage (){
    const navigate = useNavigate()
    const location = useLocation()
    const story = location.state?.storyData

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 
    // const storyImage = ['./images/estImage.png','./images/packageImage.png','./images/packageImage.png','./images/packageImage.png']
    const storyImage = [
        `http://localhost:8801/upload/${story.image1}`,
        `http://localhost:8801/upload/${story.image2}`,
        `http://localhost:8801/upload/${story.image3}`,
        `http://localhost:8801/upload/${story.image4}`
    ]
    const [mainImage, setMainImage] = useState(storyImage[0])
    const [selectedStory, setselectedStory] = useState('one')

    useEffect(()=>{
        switch (selectedStory) {
            case 'one':
                setMainImage(storyImage[0])
                break;
            case 'two':
                setMainImage(storyImage[1])
                break;
            case 'three':
                setMainImage(storyImage[2])
                break;
            case 'four':
                setMainImage(storyImage[3])
                break;
            default:
                break;
        }
    },[selectedStory])

    //Home Estimator Form
    const [homeEst, sethomeEst] = useState({
        pincode:'',
        bill:'',
        area:'',
        type:''
    })
    const homeEstChange = (e) =>{
        const {name, value}=e.target
        sethomeEst((preData)=>({
            ...preData,
            [name]:value,
        }))
    }
    const homeEstSubmit = (e) =>{
        e.preventDefault()
        console.log(homeEst)
    }
    return(
        <div className='storyPageWrapper'>
            <div className='filterBack' onClick={()=> navigate(-1)}>
                        <img src='../images/back.svg' alt='back'/>
                    </div>
            <div className='storyPageTitle'>
                <h1>{story.storytitle}</h1>
                <p>{story.storylocation}</p>
            </div>
            <div className='storyPageContainer'>
                <div className='storyImageContainer'>
                    <div className='storyMainImage'>
                        <img src={mainImage} alt=''/>
                    </div>
                    <div className='storyImages'>
                        <div className={selectedStory==='one'?'storyImage selectedImage':'storyImage'} onClick={()=>setselectedStory('one')}>
                            <img src={storyImage[0]} alt=''/>
                        </div>
                        <div className={selectedStory==='two'?'storyImage selectedImage':'storyImage'} onClick={()=>setselectedStory('two')}>
                            <img src={storyImage[1]} alt=''/>
                        </div>
                        <div className={selectedStory==='three'?'storyImage selectedImage':'storyImage'} onClick={()=>setselectedStory('three')}>
                            <img src={storyImage[2]} alt=''/>
                        </div>
                        <div className={selectedStory==='four'?'storyImage selectedImage':'storyImage'} onClick={()=>setselectedStory('four')}>
                            <img src={storyImage[3]} alt=''/>
                        </div>
                    </div>
                </div>
                <div className='storyPageDescription'>
                    <h2>Highlights</h2>
                    <div className='storyHighContainer'>
                        <div className='storyHigh'>
                            <p>Power Generation</p>
                            <h3>{story.storygen} KW</h3>
                        </div>
                        <div className='storyHigh'>
                            <p>Savings</p>
                            <h3>Rs {story.storysave}</h3>
                        </div>
                    </div>
                    <h2>Story</h2>
                    <p>
                    {story.storystory}
                    </p>
                </div>
            </div>
            {/* <div className='hero-estimator-container'>
                <form onSubmit={homeEstSubmit}>
                    <div className='hero-input-container'>
                        <input
                            type='number'
                            name='pincode'
                            placeholder='pincode'
                            value={homeEst.name}
                            onChange={homeEstChange}
                            required
                        />
                        <label>Pincode</label>
                    </div>
                    <div className='hero-input-container'>
                        <input
                            type='number'
                            name='bill'
                            placeholder='Average Bill'
                            value={homeEst.bill}
                            onChange={homeEstChange}
                            required
                        />
                        <label>Average Bill</label>
                    </div>
                    <div className='hero-input-container'>
                        <input
                            type='number'
                            name='area'
                            placeholder='Roof Area'
                            value={homeEst.area}
                            onChange={homeEstChange}
                            required
                        />
                        <label>Roof Area</label>
                    </div>
                    <div className='hero-input-container'>
                        <select
                            name='type'
                            value={homeEst.type}
                            onChange={homeEstChange}
                            required
                        >
                            <option value='' hidden>Property Type</option>
                            <option value='residential'>Residential</option>
                            <option value='commertial' >Commertial</option>
                        </select>
                    </div>
                    <div className='hero-input-container'>
                        <input
                            type='submit'
                            value='Design'
                        />
                    </div>
                </form>                    
            </div>   */}
            <div className='contactUS estTAlk'>
                <Talk/>
            </div>             
        </div>
    );
} 