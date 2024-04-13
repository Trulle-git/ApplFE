import { useEffect, useState } from 'react'
import './productForm.css'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ProductForm(){
    const history = useNavigate()
    const location = useLocation()
    const editData = location.state?.productData

    const date = new Date()
    const [product, setProduct] = useState({
        name:"",
        catagory:"",
        type:"",
        range:"",
        price:"",
        emi:"",
        image1:"",
        image2:"",
        image3:"",
        image4:"",
        feature:"",
        description:"",
        techSpec:"",
        upDate:date,
        popular:"y"
    })

    const [preImage, setPreImage] = useState({
        image1:null,
        image2:null,
        image3:null,
        image4:null,
    })

    const [rangelist, setRangelist] = useState([])
    const [typelist, setTypelist] = useState([])
    const optionList = {
        panel:{
            types:["Mono","Poly"],
        },
        ups:{
            types:["SINO", "Electro"],
        },
        light:{
            types:["All", "Semi", "Flood", "Garden"],
        },
        heater:{
            types:["ETC", "FPC"],
        },
        pump:{
            types:["AC","DC"],
        },
        fencing:{
            types:["Home","Agricultural","Security","Perimeter","Corporate"]
        }
    }

    useEffect(()=>{
        if(editData){
            setProduct({
                name:editData.name,
                catagory:editData.catagory,
                type:editData.type,
                range:editData.Prodrange,
                price:editData.price,
                emi:editData.emi,
                image1:editData.image1,
                image2:editData.image2,
                image3:editData.image3,
                image4:editData.image4,
                feature:editData.feature,
                description:editData.description,
                techSpec:editData.techspec,
                upDate:date,
                popular:editData.popular
            })
            setPreImage({
                image1:`http://localhost:8801/upload/${editData.image1}`, 
                image2:`http://localhost:8801/upload/${editData.image2}`,
                image3:`http://localhost:8801/upload/${editData.image3}`,
                image4:`http://localhost:8801/upload/${editData.image4}`,
            })
            switch(editData.catagory){
                case "panel":
                    setTypelist(optionList.panel.types)
                    return
                case "ups":
                    setTypelist(optionList.ups.types)
                    return
                case "light":
                    setTypelist(optionList.light.types)
                    return
                case "heater":
                    setTypelist(optionList.heater.types)
                    return
                case "pump":
                    setTypelist(optionList.pump.types)
                    return
                case "fencing":
                    setTypelist(optionList.fencing.types)
                    return
            }
            
        }
    },[])

    
    const changeProduct =(e)=>{
        const {name, value}=e.target;
        setProduct((preData)=>({
            ...preData,
            [name]:value
        }))

        if(name==='catagory'){
            switch(value){
                case "panel":
                    setTypelist(optionList.panel.types)
                    return
                case "ups":
                    setTypelist(optionList.ups.types)
                    return
                case "light":
                    setTypelist(optionList.light.types)
                    return
                case "heater":
                    setTypelist(optionList.heater.types)
                    return
                case "pump":
                    setTypelist(optionList.pump.types)
                    return
                case "fencing":
                    setTypelist(optionList.fencing.types)
                    return
            }
        }
    }
    const ChangeImage = (e) =>{
        const name = e.target.name
        const imageFile = e.target.files[0];
        setProduct({ ...product, [name]: imageFile });

        const reader=new FileReader();
        
        reader.onloadend = () => {
            setPreImage({...preImage, [name]:reader.result});
        };
  
        if (imageFile) {
            reader.readAsDataURL(imageFile);
        }
    }
    const submitProduct = (e)=>{
        e.preventDefault()
        console.log(product)

        const newProduct = new FormData()
        newProduct.append('name',product.name);
        newProduct.append('catagory',product.catagory);
        newProduct.append('type',product.type);
        newProduct.append('range',product.range);
        newProduct.append('price',product.price);
        newProduct.append('emi',product.emi);
        newProduct.append('feature',product.feature);
        newProduct.append('description',product.description);
        newProduct.append('techspec',product.techSpec);
        newProduct.append('date',product.upDate);
        newProduct.append('image1',product.image1);
        newProduct.append('image2',product.image2);
        newProduct.append('image3',product.image3);
        newProduct.append('image4',product.image4);
        newProduct.append('popular',product.popular);

        axios.post('http://localhost:8801/addProducts', newProduct)
        .then(res=>{
            if (res.status===200){
                setProduct({
                    name:"",
                    catagory:"",
                    type:"",
                    range:"",
                    price:"",
                    emi:"",
                    image1:"",
                    image2:"",
                    image3:"",
                    image4:"",
                    feature:"",
                    description:"",
                    techSpec:"",
                    upDate:date,
                    popular:"y"
                })
                history('/productListing' )
            } else{
                console.error('Server returned an error status:', res.status);
            }
        })
        .catch(error=>{
            console.error('Error:',error);
        })
    }

    const editProduct = (e)=>{
        e.preventDefault()
        console.log(product)

        const editProduct = new FormData()
        editProduct.append('id',editData.productId);
        editProduct.append('name',product.name);
        editProduct.append('catagory',product.catagory);
        editProduct.append('type',product.type);
        editProduct.append('range',product.range);
        editProduct.append('price',product.price);
        editProduct.append('emi',product.emi);
        editProduct.append('feature',product.feature);
        editProduct.append('description',product.description);
        editProduct.append('techspec',product.techSpec);
        editProduct.append('image1',product.image1);
        editProduct.append('image2',product.image2);
        editProduct.append('image3',product.image3);
        editProduct.append('image4',product.image4);
        editProduct.append('popular',product.popular);

        axios.put('http://localhost:8801/updateProduct', editProduct)
        .then(res=>{
            if (res.status===200){
                setProduct({
                    name:"",
                    catagory:"",
                    type:"",
                    range:"",
                    price:"",
                    emi:"",
                    image1:"",
                    image2:"",
                    image3:"",
                    image4:"",
                    feature:"",
                    description:"",
                    techSpec:"",
                    upDate:date,
                    popular:"y  "
                })
                history('/productListing' )
            } else{
                console.error('Server returned an error status:', res.status);
            }
        })
        .catch(error=>{
            console.error('Error:',error);
        })
    }
        
    return(
        <div className='formWrapper'>
            <div className='CMSHeader'>
                <h2>Add Product</h2>
                <Link to={'/dashboard'}><button>Dashboard</button></Link>
            </div>
            <form onSubmit={editData?editProduct:submitProduct}>
                <div className='inputContainer'>
                    <label>Product Name:</label>
                    <input
                        type='text'
                        name='name'
                        value={product.name}
                        onChange={changeProduct}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <label>Product Catagory:</label>
                    <select
                        name='catagory'
                        value={product.catagory}
                        onChange={changeProduct}
                        required
                    >
                        <option value="" hidden>------</option>
                        <option value="panel">Solar Panel</option>
                        <option value="ups">UPS</option>
                        <option value="light">Light</option>
                        <option value="heater">Water Heater</option>
                        <option value="pump">Solar Pump</option>
                        <option value="fencing">Fencing</option>
                    </select>
                </div>
                <div className='inputContainer'>
                    <label>Product Type:</label>
                    <select
                        name='type'
                        value={product.type}
                        onChange={changeProduct}
                        required
                    >
                        <option value="" hidden>------</option>
                        {typelist.map((type)=>(
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div className='inputContainer'>
                    <label>Product Range:</label>                    
                    <input
                        type='text'
                        name='range'
                        value={product.range}
                        onChange={changeProduct}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <label>Product Price:</label>
                    <input
                        type='number'
                        name='price'
                        value={product.price}
                        onChange={changeProduct}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <label>EMI Available:</label>
                    <select
                        name='emi'
                        value={product.emi}
                        onChange={changeProduct}
                        required
                    >
                        <option value="" hidden>------</option>
                        <option value="y">Yes</option>
                        <option value="n">No</option>
                    </select>
                </div>                
                <div className='inputContainer'>
                    <label>Product Feature:</label>
                    <textarea
                        name='feature'
                        value={product.feature}
                        onChange={changeProduct}
                        required
                    ></textarea>
                </div>
                <div className='inputContainer'>
                    <label>Product Descriptione:</label>
                    <textarea
                        name='description'
                        value={product.description}
                        onChange={changeProduct}
                        required
                    ></textarea>
                </div>
                <div className='inputContainer'>
                    <label>Product Tech-Specs:</label>
                    <textarea
                        name='techSpec'
                        value={product.techSpec}
                        onChange={changeProduct}
                        required
                    ></textarea>
                </div>
                <div className='inputContainer'>
                    <label>Popular Product:</label>
                    <select
                        name='popular'
                        value={product.popular}
                        onChange={changeProduct}
                        required
                    >
                        <option value="y">Yes</option>
                        <option value="n">No</option>
                    </select>
                </div> 
                <div className='imageUploadContainer'>
                    <div className='FormimageContainer'>                    
                        <div className='uploadImage'>
                            <img src={product.image1?preImage.image1:'../images/plus.png'} style={product.image1?{width:'80%'}:{width:'30%'}} alt='upload'/>
                        </div>
                        <input
                            type='file'
                            name='image1'
                            accept='image/**'
                            onChange={ChangeImage}
                        />
                    </div>
                    <div className='FormimageContainer'>
                        <div className='uploadImage'>
                            <img src={product.image2?preImage.image2:'../images/plus.png'} style={product.image2?{width:'80%'}:{width:'30%'}} alt='upload'/>
                        </div>
                        <input
                            type='file'
                            name='image2'
                            accept='image/**'
                            onChange={ChangeImage}
                        />
                    </div>
                    <div className='FormimageContainer'>
                        <div className='uploadImage'>
                            <img src={product.image3?preImage.image3:'../images/plus.png'} style={product.image3?{width:'80%'}:{width:'30%'}} alt='upload'/>
                        </div>
                        <input
                            type='file'
                            name='image3'
                            accept='image/**'
                            onChange={ChangeImage}
                        />
                    </div>
                    <div className='FormimageContainer'>
                        <div className='uploadImage'>
                            <img src={product.image4?preImage.image4:'../images/plus.png'} style={product.image4?{width:'80%'}:{width:'30%'}} alt='upload'/>
                        </div>
                        <input
                            type='file'
                            name='image4'
                            accept='image/**'
                            onChange={ChangeImage}
                        />                    
                    </div>
                </div>
                <div className='inputContainer'>
                    <input type='submit' />
                </div>
            </form>
        </div> 
    )
}