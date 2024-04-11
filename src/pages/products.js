import { useEffect, useState } from 'react'
import './products.css'
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

function Card({product}){
    return(
        <div className='cardContainer'>
            <div className='imageContainer'>
                {/* <img src='./images/productImage.png' alt=''/> */}
                <img src={`http://localhost:8801/upload/${product.image1}`} alt=''/>
            </div>
            <div className='description'>
                {/* <h1>Solar Water Heater</h1>
                <p>Poly</p>
                <h2>₹ 22,222</h2> */}
                <h1>{product.name}</h1>
                <p>{product.type}</p>
                <h2>₹ {product.price}</h2>
            </div>
            <div className='knowBtn'>
            <Link to={'/productdetails'} state={{productData:product}}><button>Know More</button></Link>
            </div>
        </div>
    )
}
export default function Products(){
    const navigate = useNavigate()
    
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 

      const optionList = {
        panel:["Mono", "Poly"],
        ups:["SINO", "Electro"],
        light:["All", "Semi", "Flood", "Garden"],
        heater:["ETC", "FPC"],
        pump:["AC","DC"],
        fencing:["Home","Agricultural","Security","Perimeter","Corporate"]
    }
    const [type, setType] = useState([])
    const [products, setProducts] = useState([])
    const [fetched, setFetched] = useState(false)
    const list = []
    // useEffect(()=>{
    //     fetch('http://localhost:8801/products')
    //     .then(res=>res.json())
    //     .then(data=>{setProducts(data.rows);setFetched(true)})
    // },[])
    

    const [filter, setFilter] = useState({
        category:'*',
        type:[].concat(...Object.values(optionList))
    })
    const filterChange = (e) =>{
        const {name, value} = e.target;
        if(name==='category'){
            if(value === "*"){
                setFilter((preData)=>({
                    ...preData,
                    [name]:value,
                    type:[].concat(...Object.values(optionList))
                })) 
            }else{
                setFilter((preData)=>({
                    ...preData,
                    [name]:value,
                    type:optionList[value]
                })) 
            }
               
        }else{
            setFilter((preData)=>({
                ...preData,
                [name]:value
            }))
        }       
        // if(name==="category" && value==="*"){
        //     console.log([].concat(...Object.values(optionList)))
        // }else{
        //     console.log(optionList[value])
        // }
    }

    useEffect(()=>{        
        const filterData = new FormData()
        filterData.append('category',filter.category==="*"?["panel","ups","light","pump","heater","fencing"]:filter.category);
        filterData.append('type',filter.type);
        axios.post('http://localhost:8801/filterProducts', filterData)
        .then(res=>{
            if (res.status===200){
                setProducts(res.data);setFetched(true)
            } else{
                console.error('Server returned an error status:', res.status);
            }
        })
        .catch(error=>{
            console.error('Error:',error);
        })    
    },[filter])
    // const [productChoosen, setproductChoosen] = useState()
    const productChoosen = ()=>{
        switch(filter.category){
            case "panel":
                return(
                    <>
                        <div className='filterField'>
                            <h2>Type</h2>                            
                            <div className='inputField'>
                                <select
                                    name='type'
                                    value={filter.type}
                                    onChange={filterChange}
                                 >
                                    <option value='*'>All Panels</option>
                                    <option value='Mono'>Mono</option>
                                    <option value='Poly'>Poly</option>
                                </select>
                            </div>                                                        
                        </div>
                        {/* <div className='filterSubmit'>
                            <button>Submit</button>
                        </div> */}
                    </>
                );
            case "ups":
                return(
                    <>
                        <div className='filterField'>
                            <h2>Type</h2>                            
                            <div className='inputField'>
                                <select
                                    name='type'
                                    value={filter.type}
                                    onChange={filterChange}
                                >
                                    <option value='*'>All UPS</option>
                                    <option value='SINO'>SINO</option>
                                    <option value='Electro'>Electro</option>
                                </select>
                            </div>                                                        
                        </div>                        
                    </>
                );
            case "light":
                return(
                    <>
                        <div className='filterField'>
                            <h2>Type</h2>                            
                            <div className='inputField'>
                                <select
                                    name='type'
                                    value={filter.type}
                                    onChange={filterChange}
                                >
                                    <option value='*'>All Lights</option>
                                    <option value='All'>All in One</option>
                                    <option value='Semi'>Semi</option>
                                    <option value='Flood'>Flood</option>
                                    <option value='Garden'>Garden</option>
                                </select>
                            </div>                                                        
                        </div>       
                    </>
                );
            case "pump":
                return(
                    <>
                        <div className='filterField'>
                            <h2>Type</h2>                            
                            <div className='inputField'>
                                <select
                                    name='type'
                                    value={filter.type}
                                    onChange={filterChange}
                                >
                                    <option value='*'>All Pumps</option>
                                    <option value='AC'>Sub AC</option>
                                    <option value='DC'>Sub DC</option>
                                </select>
                            </div>                                                        
                        </div>       
                    </>
                );
            case "heater":
                return(
                    <>
                        <div className='filterField'>
                            <h2>Type</h2>                            
                            <div className='inputField'>
                                <select
                                    name='type'
                                    value={filter.type}
                                    onChange={filterChange}
                                >
                                    <option value='*'>All Heaters</option>
                                    <option value='ETC'>ETC</option>
                                    <option value='FPC'>FPC</option>
                                </select>
                            </div>                                                        
                        </div>       
                    </>
                );
            case "fencing":
                return(
                    <>
                        <div className='filterField'>
                            <h2>Type</h2>                            
                            <div className='inputField'>
                                <select
                                    name='type'
                                    value={filter.type}
                                    onChange={filterChange}
                                >
                                    <option value='*'>All Fences</option>
                                    <option value='Home'>Solar Home Wall Fencing</option>
                                    <option value='Agricultural'>Solar Fencing For Agricultural Land</option>
                                    <option value='Security'>Solar Security Fencing</option>
                                    <option value='Perimeter'>Perimeter Security Fencing</option>
                                    <option value='Corporate'>Solar Corporate Fencing</option>
                                </select>
                            </div>                                                        
                        </div>       
                    </>
                );
            default:
                return(
                    <>
                        <div className='filterField'>
                            <h3>All Products are Shown</h3>
                        </div>
                    </>
                );
        }
    }

    const [filterView, setFilterView] = useState(true)
    
    
    return(
        <div className='productsWrapper'>
            <div className='productBanner'>
                <img src='./images/prodDummyBanner.png' alt=''/>
            </div>
            <div className='productList'>
                <div className={'selectFilter showFiltermenu'}>
                    <div className='filterBack' onClick={()=> navigate(-1)}>
                        <img src='../images/back.svg' alt='back'/>
                    </div>
                    <div className='filter' onClick={()=>setFilterView(!filterView)}>
                        <img src='../images/filter.svg' alt='filter'/>
                    </div>
                </div>
                <div className={filterView?'productFilterContainer hideFilter':'productFilterContainer filterEffect'}> 
                    <div className='filterMenuBack' onClick={()=> setFilterView(!filterView)}>
                        <img src='../images/back.svg' alt='back'/>
                    </div>    
                    <div className='filterFieldContainer'>
                        <div className='filterField'>
                            <h2>Category</h2>
                            <div className='inputField'>
                                <select
                                    name='category'
                                    value={filter.category}
                                    onChange={filterChange}
                                >                                    
                                    <option value='*'>All Products</option>
                                    <option value='panel'>Panel</option>
                                    <option value='ups'>UPS</option>
                                    <option value='light'>Light</option>
                                    <option value='pump'>Water Pump</option>
                                    <option value='heater'>Water Heater</option>
                                    <option value='fencing'>Fencing </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='filterFieldContainer'>
                        {productChoosen()}
                    </div>          
                    <div className={filterView?'hideBtn':'filterSubmit'} onClick={()=> setFilterView(!filterView)}>
                        <button>View</button>
                    </div>          
                </div>
                <div className='productListContainer'>
                    <h1>Products</h1>
                    <div className='products'>
                        {products.map((product)=>{
                            return(
                            <Card
                            product={product}/>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}