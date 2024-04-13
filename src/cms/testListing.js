import { useEffect, useState } from 'react'
import './productListing.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function TestListing(){
    const [tests, setTests]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8801/testimonial")
        .then(res=>res.json())
        .then(data=>setTests(data))
    },[])

    const [loadingest, setLoadingest] = useState(false)
    const delprod = (e,product) =>{
        e.preventDefault()
        setLoadingest(true)

        axios.delete('http://localhost:8801/RemoveTest', { 
            data:{
                id:product.id,
                image:product.testimage,                
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
                <h2>Testimonials</h2>
                <div className='CMSnavBTN'>
                    <Link to={'/testForm'}><button>Add Testimonial</button></Link>
                    <Link to={'/dashboard'}><button>Dashboard</button></Link>
                </div>
            </div>
            <div className='listContainer'>
                <table>
                    <thead>
                    <tr
                    >
                        <th style={{width:"10rem"}}>Name</th>
                        <th style={{width:"10rem"}}>Title</th>
                        <th style={{width:"5rem"}}>Rating</th>
                        <th style={{width:".25rem", backgroundColor:"transparent", border:"none"}}></th>
                        <th colSpan={2} style={{width:"8rem", border:"none"}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={{height:".25rem"}}></tr>
                    {
                        tests.map((test,key)=>(
                            <>
                            <tr key={key}>
                                <td>{test.testname}</td>
                                <td>{test.testtitle}</td>
                                <td>{test.testrating}</td>
                                <td style={{border:"none"}}></td>
                                <td className='listBNT' style={{border:"none",textAlign:"center"}}>
                                    <div><Link to='/testForm' state={{testData:test}}>Edit</Link></div>
                                </td>
                                <td className='listBNT delBtn' style={{border:"none",textAlign:"center"}} onClick={(e)=>delprod(e,test)}><div>Del</div></td>
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