import { useEffect, useState } from 'react';
import './productForm.css';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function StoryForm(){
    const history = useNavigate()
    const location = useLocation()
    const editData = location.state?.storyData

    const date = new Date()
    const [story, setStory] = useState({
        title:"",
        location:"",
        gen:"",
        save:"",
        story:"",
        image1:"",
        image2:"",
        image3:"",
        image4:"",
        upDate:date,
        type:"",
        live:""
    })

    const [preImage, setPreImage] = useState({
        image1:null,
        image2:null,
        image3:null,
        image4:null,
    })

    useEffect(()=>{
        if(editData){
            setStory({
                title:editData.storytitle,
                location:editData.storylocation,
                gen:editData.storygen,
                save:editData.storysave,
                story:editData.storystory,
                image1:editData.image1,
                image2:editData.image2,
                image3:editData.image3,
                image4:editData.image4,
                upDate:date,
                type:editData.storytype,
                live:editData.storyLive,
            })
            setPreImage({
                image1:`http://localhost:8801/upload/${editData.image1}`, 
                image2:`http://localhost:8801/upload/${editData.image2}`,
                image3:`http://localhost:8801/upload/${editData.image3}`,
                image4:`http://localhost:8801/upload/${editData.image4}`,
            })
        }
    },[])

    const changeStory =(e)=>{
        const {name, value}=e.target;
        setStory((preData)=>({
            ...preData,
            [name]:value
        }))

    }
    const ChangeImage = (e) =>{
        const name = e.target.name
        const imageFile = e.target.files[0];
        setStory({ ...story, [name]: imageFile });

        const reader=new FileReader();
        
        reader.onloadend = () => {
            setPreImage({...preImage, [name]:reader.result});
        };
  
        if (imageFile) {
            reader.readAsDataURL(imageFile);
        }
    }

    const submitStory = (e)=>{
        e.preventDefault()

        const newStory = new FormData()
        newStory.append('storytitle',story.title);
        newStory.append('storylocation',story.location);
        newStory.append('storygen',story.gen);
        newStory.append('storysave',story.save);
        newStory.append('storystory',story.story);        
        newStory.append('image1',story.image1);
        newStory.append('image2',story.image2);
        newStory.append('image3',story.image3);
        newStory.append('image4',story.image4);
        newStory.append('date',story.upDate);
        newStory.append('type',story.type);
        newStory.append('live',story.live);

        axios.post('http://localhost:8801/addStory', newStory)
        .then(res=>{
            if (res.status===200){
                setStory({
                    title:"",
                    location:"",
                    gen:"",
                    save:"",
                    story:"",
                    image1:"",
                    image2:"",
                    image3:"",
                    image4:"",
                    upDate:date,
                    type:"",
                    live:""
                })
                history('/storyListing')
            } else{
                console.error('Server returned an error status:', res.status);
            }
        })
        .catch(error=>{
            console.error('Error:',error);
        })
    }

    const editStory = (e)=>{
        e.preventDefault()
        
        const editStory = new FormData()
        editStory.append('id',editData.id);
        editStory.append('storytitle',story.title);
        editStory.append('storylocation',story.location);
        editStory.append('storygen',story.gen);
        editStory.append('storysave',story.save);
        editStory.append('storystory',story.story);        
        editStory.append('image1',story.image1);
        editStory.append('image2',story.image2);
        editStory.append('image3',story.image3);
        editStory.append('image4',story.image4);
        editStory.append('date',story.upDate);
        editStory.append('type',story.storytype);
        editStory.append('live',story.storylive);

        axios.post('http://localhost:8801/updateStory', editStory)
        .then(res=>{
            if (res.status===200){
                setStory({
                    title:"",
                    location:"",
                    gen:"",
                    save:"",
                    story:"",
                    image1:"",
                    image2:"",
                    image3:"",
                    image4:"",
                    upDate:date,
                    type:"",
                    live:""
                })
                history('/storyListing')
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
                <h2>Add Story</h2>
                <Link to={'/dashboard'}><button>Dashboard</button></Link>
            </div>
            <form onSubmit={editData?editStory:submitStory}>
                <div className='inputContainer'>
                    <label>Title:</label>
                    <input
                        type='text'
                        name='title'
                        value={story.title}
                        onChange={changeStory}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <label>Location:</label>
                    <input
                        type='text'
                        name='location'
                        value={story.location}
                        onChange={changeStory}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <label>Power Generated:</label>
                    <input
                        type='text'
                        name='gen'
                        value={story.gen}
                        onChange={changeStory}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <label>Savings:</label>
                    <input
                        type='number'
                        name='save'
                        value={story.save}
                        onChange={changeStory}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <label>Story:</label>
                    <textarea
                        name='story'
                        value={story.story}
                        onChange={changeStory}
                        required
                    ></textarea>
                </div>
                <div className='inputContainer'>
                    <label>Type of Project:</label>
                    <select
                        name='type'
                        value={story.type}
                        onChange={changeStory}
                        required
                    >
                        <option value={"Residential"}>Residential</option>
                        <option value={"Commercial"}>Commercial</option>
                    </select>
                </div>
                <div className='inputContainer'>
                    <label>Live Now:</label>
                    <select
                        name='live'
                        value={story.live}
                        onChange={changeStory}
                        required
                    >
                        <option value={"y"}>Yes</option>
                        <option value={"n"}>No</option>
                    </select>
                </div>

                <div className='imageUploadContainer'>
                    <div className='FormimageContainer'>                    
                        <div className='uploadImage'>
                            <img src={story.image1?preImage.image1:'../images/plus.png'} style={story.image1?{width:'80%'}:{width:'30%'}} alt='upload'/>
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
                            <img src={story.image2?preImage.image2:'../images/plus.png'} style={story.image2?{width:'80%'}:{width:'30%'}} alt='upload'/>
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
                            <img src={story.image3?preImage.image3:'../images/plus.png'} style={story.image3?{width:'80%'}:{width:'30%'}} alt='upload'/>
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
                            <img src={story.image4?preImage.image4:'../images/plus.png'} style={story
                                .image4?{width:'80%'}:{width:'30%'}} alt='upload'/>
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