import { useEffect, useState } from 'react'
import './productForm.css'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function TestForm(){
    const history = useNavigate()
    const location = useLocation()
    const editData = location.state?.testData

    const date = new Date()
    const [test, setTest] = useState({
        title:"",
        name:"",
        rating:"",
        content:"",
        image:"",        
        upDate:date
    })

    const [preImage, setPreImage] = useState(null)

    useEffect(()=>{
        if(editData){
            setTest({
                title:editData.testtitle,
                name:editData.testname,
                rating:editData.testrating,
                content:editData.testcontent,
                image:editData.testimage,        
                upDate:date
            })
            setPreImage(`http://localhost:8801/upload/${editData.testimage}`)

        }
    },[])
    const changeTest =(e)=>{
        const {name, value}=e.target;
        setTest((preData)=>({
            ...preData,
            [name]:value
        }))

    }
    const ChangeImage = (e) =>{
        const name = e.target.name
        const imageFile = e.target.files[0];
        setTest({ ...test, [name]: imageFile });

        const reader=new FileReader();
        
        reader.onloadend = () => {
            setPreImage(reader.result);
        };
  
        if (imageFile) {
            reader.readAsDataURL(imageFile);
        }
    }

    const submitTest = (e)=>{
        e.preventDefault()
        
        const newTest = new FormData()
        newTest.append('testTitle',test.title);
        newTest.append('testName',test.name);
        newTest.append('testContent',test.content);
        newTest.append('testRating',test.rating);
        newTest.append('testImage',test.image);        
        newTest.append('date',test.upDate);

        axios.post('http://localhost:8801/addTest', newTest)
        .then(res=>{
            if (res.status===200){
                setTest({
                    title:"",
                    name:"",
                    rating:"",
                    content:"",
                    image:"",        
                    upDate:date
                })
                history('/testListing')
            } else{
                console.error('Server returned an error status:', res.status);
            }
        })
        .catch(error=>{
            console.error('Error:',error);
        })
    }

    const editTest = (e)=>{
        e.preventDefault()
        
        const editTest = new FormData()
        editTest.append('id',editData.id)
        editTest.append('testTitle',test.title);
        editTest.append('testName',test.name);
        editTest.append('testContent',test.content);
        editTest.append('testRating',test.rating);
        editTest.append('testImage',test.image);        
        editTest.append('date',test.upDate);

        axios.post('http://localhost:8801/updateTest', editTest)
        .then(res=>{
            if (res.status===200){
                setTest({
                    title:"",
                    name:"",
                    rating:"",
                    content:"",
                    image:"",        
                    upDate:date
                })
                history('/testListing')
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
                <h2>Add Testimonial</h2>
                <Link to={'/dashboard'}><button>Dashboard</button></Link>
            </div>
            <form onSubmit={editData?editTest:submitTest}>
                <div className='inputContainer'>
                    <label>Testimonial Title:</label>
                    <input
                        type='text'
                        name='title'
                        value={test.title}
                        onChange={changeTest}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <label>Client Name:</label>
                    <input
                        type='text'
                        name='name'
                        value={test.name}
                        onChange={changeTest}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <label>Testimonial Rating:</label>
                    <input
                        type='number'
                        name='rating'
                        value={test.rating}
                        onChange={changeTest}
                        required
                    />
                </div>                
                <div className='inputContainer'>
                    <label>Testimonial Content:</label>
                    <textarea
                        name='content'
                        value={test.content}
                        onChange={changeTest}
                        required
                    ></textarea>
                </div>

                <div className='imageUploadContainer testImageCont'>
                    <label>Client Image:</label>
                    <div className='FormimageContainer'>                    
                        <div className='uploadImage'>
                            <img src={test.image?preImage:'../images/plus.png'} style={test.image?{width:'80%'}:{width:'30%'}} alt='upload'/>
                        </div>
                        <input
                            type='file'
                            name='image'
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