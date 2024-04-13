import { useEffect, useState } from 'react'
import './productListing.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ProductListing(){
    const history = useNavigate()
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8801/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const [loadingest, setLoadingest] = useState(false)
    const delprod = (e,product) =>{
        e.preventDefault()
        setLoadingest(true)

        axios.delete('http://localhost:8801/RemoveProduct', { 
            data:{
                id:product.productId,
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
                                <td>{product.Prodrange}</td>
                                <td>{product.price}</td>
                                <td>{product.emi}</td>
                                <td style={{border:"none"}}></td>
                                <td className='listBNT' style={{border:"none",textAlign:"center"}}>
                                    <div><Link to='/productForm' state={{productData:product}}>Edit</Link></div>
                                </td>
                                <td className='listBNT delBtn' style={{border:"none",textAlign:"center"}} onClick={(e)=>delprod(e,product)}><div>Del</div></td>
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