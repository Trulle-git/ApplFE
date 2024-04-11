import { useEffect, useState } from 'react'
import './productListing.css'
import { Link } from 'react-router-dom'

export default function StoryListing(){
    const [stories, setStory]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8801/stories")
        .then(res=>res.json())
        .then(data=>setStory(data.rows))
    },[])
    return(
        <div className='listingWrapper'>
            <div className='CMSHeader'>
                <h2>Products</h2>
                <div className='CMSnavBTN'>
                    <Link to={'/storyForm'}><button>Add Product</button></Link>
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
                                <td className='listBNT' style={{border:"none",textAlign:"center"}}><div>Del</div></td>
                            </tr>
                            <tr style={{height:".25rem"}}></tr>
                            </>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}