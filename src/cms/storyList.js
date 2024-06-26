import { useEffect, useState } from 'react'
import './productListing.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function StoryListing(){
    const [stories, setStory]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8801/stories")
        .then(res=>res.json())
        .then(data=>setStory(data))
    },[])

    const [loadingest, setLoadingest] = useState(false)
    const delprod = (e,product) =>{
        e.preventDefault()
        setLoadingest(true)

        axios.delete('http://localhost:8801/RemoveStory', { 
            data:{
                id:product.storyid,
                image1:product.image1,
                image2:product.image2,
                image3:product.image3,
                image4:product.image4,
            }})
        .then(res=>{
            setLoadingest(false) 
            if(res.status===200){
                window.location.reload();
            }
        })
    }
    return(
        <>
        <div className='listingWrapper'>
            <div className='CMSHeader'>
                <h2>Stories</h2>
                <div className='CMSnavBTN'>
                    <Link to={'/storyForm'}><button>Add story</button></Link>
                    <Link to={'/dashboard'}><button>Dashboard</button></Link>
                </div>
            </div>
            <div className='listContainer'>
                <table>
                    <thead>
                    <tr
                    >
                        <th style={{width:"10rem"}}>Title</th>
                        <th style={{width:"10rem"}}>Location</th>
                        <th style={{width:"5rem"}}>Power Generation</th>
                        <th style={{width:"4rem"}}>Money Saved</th>
                        <th style={{width:".25rem", backgroundColor:"transparent", border:"none"}}></th>
                        <th colSpan={2} style={{width:"8rem", border:"none"}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={{height:".25rem"}}></tr>
                    {
                        stories.map((story,key)=>(
                            <>
                            <tr key={key}>
                                <td>{story.storytitle}</td>
                                <td>{story.storylocation}</td>
                                <td>{story.storygen}</td>
                                <td>{story.storysave}</td>
                                <td style={{border:"none"}}></td>
                                <td className='listBNT' style={{border:"none",textAlign:"center"}}>
                                    <div><Link to='/storyForm' state={{storyData:story}}>Edit</Link></div>
                                </td>
                                <td className='listBNT delBtn' style={{border:"none",textAlign:"center"}} onClick={(e)=>delprod(e,story)}><div>Del</div></td>
                            </tr>
                            <tr style={{height:".25rem"}}></tr>
                            </>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
         <div className={loadingest?'estloadingContainer showFlex':'estloadingContainer hide'}>
            <div className='estloadingBG'></div>
            <div className='estloading'>
                <img src='../images/loading.png' />
            </div>
        </div>
     </>
    )
}