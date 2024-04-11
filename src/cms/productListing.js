import { useEffect, useState } from 'react'
import './productListing.css'
import { Link } from 'react-router-dom'

export default function ProductListing(){
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8801/products")
        .then(res=>res.json())
        .then(data=>setProducts(data.rows))
    },[])
    return(
        <div className='listingWrapper'>
            <div className='CMSHeader'>
                <h2>Products</h2>
                <div className='CMSnavBTN'>
                    <Link to={'/productForm'}><button>Add Product</button></Link>
                    <Link to={'/dashboard'}><button>Dashboard</button></Link>
                </div>
            </div>
            <div className='listContainer'>
                <table>
                    <thead>
                    <tr
                    >
                        <th style={{width:"10rem"}}>Catagory</th>
                        <th style={{width:"15rem"}}>Name</th>
                        <th>Type</th>
                        <th>Range</th>
                        <th style={{width:"5rem"}}>Price</th>
                        <th style={{width:"4rem"}}>EMI</th>
                        <th style={{width:".25rem", backgroundColor:"transparent", border:"none"}}></th>
                        <th colSpan={2} style={{width:"8rem", border:"none"}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={{height:".25rem"}}></tr>
                    {
                        products.map((product,key)=>(
                            <>
                            <tr key={key}>
                                <td>{product.catagory}</td>
                                <td>{product.name}</td>
                                <td>{product.type}</td>
                                <td>{product.range}</td>
                                <td>{product.price}</td>
                                <td>{product.emi}</td>
                                <td style={{border:"none"}}></td>
                                <td className='listBNT' style={{border:"none",textAlign:"center"}}>
                                    <div><Link to='/productForm' state={{productData:product}}>Edit</Link></div>
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