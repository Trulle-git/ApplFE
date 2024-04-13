import { Link } from 'react-router-dom'
import './dashboard.css'
import { useEffect, useState } from 'react'

export default function Dashboard(){
    const [counts, setCounts] = useState({
        products:0,
        stories:0,
        tests:0,
    })

    useEffect(()=>{
        fetch("http://localhost:8801/counts")
        .then(res=>res.json())
        .then(data=>{
            setCounts({
                products:data.products[0].products,
                stories:data.story[0].story,
                tests:data.testimonial[0].testimonial,
            })
        })
    },[])
    return(
        <div className='dashWrapper'>
            <div className='CMSHeader'>
                <h2>Dashboard</h2>
            </div>
            <div className='dashboardContent'>
                <div className='dashCount'>
                    <div className='countContainer'>
                        <p>Products</p>
                        <h1>{counts.products}</h1>
                    </div>
                    <div className='countContainer'>
                        <p>Stories</p>
                        <h1>{counts.stories}</h1>
                    </div>
                    <div className='countContainer'>
                        <p>Testimonials</p>
                        <h1>{counts.tests}</h1>
                    </div>
                </div>
                <div className='dashBtnContainer'>
                    <Link to={'/productListing'}><button>Products</button></Link>
                    <Link to={'/storyListing'}><button>Stories</button></Link>
                    <Link to={'/testListing'}><button>Testimonials</button></Link>
                </div>
            </div>
        </div>
    )
}