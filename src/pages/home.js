import './home.css'
import { useEffect, useState } from 'react';
import PropularProduct from '../components/popularProd';
import Testimonial from '../components/testimonial';
import Liveprop from '../components/storyCard';
import Talk from '../components/talk';
import { useNavigate } from 'react-router-dom'

export default function Home(){
    const history = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 
//landing
//sustainable switch
    const [solar, setSolar]= useState(false)
    const landing_image=['./images/landingOff.svg','./images/landingOn.svg' ]
    
    
    const [web, setWeb] = useState('desktop')
//Home Estimator Form
    const [homeEst, sethomeEst] = useState({
        pincode:'',
        bill:'',
        area:'',
        type:''
    })
    const [homeEstMob, sethomeEstMob] = useState({
        pincode:'',
        bill:'',
        area:'',
        type:''
    })
    const homeEstChange = (e) =>{
        const {name, value}=e.target
            sethomeEst((preData)=>({
                ...preData,
                [name]:value,
            }))
        
        
    }
    const homeEstSubmit = (e) =>{
        e.preventDefault()
        console.log(homeEst )
        history('/estimator',{state:homeEst} )
    }

// Home Estimator Selection
    const EstFormWeb = ()=>{
        return(
            <div className='hero-estimator-container'>
                <form onSubmit={homeEstSubmit}>
                    <div className='hero-input-container'>
                        <input
                            type='number'
                            name='pincode'
                            placeholder='pincode'
                            value={homeEst.pincode}
                            onChange={homeEstChange}
                            required
                        />
                        <label>Pincode</label>
                    </div>
                    <div className='hero-input-container'>
                        <input
                            type='number'
                            name='bill'
                            placeholder='Average Bill'
                            value={homeEst.bill}
                            onChange={homeEstChange}
                            required
                        />
                        <label>Average Bill</label>
                    </div>
                    <div className='hero-input-container'>
                        <input
                            type='number'
                            name='area'
                            placeholder='Roof Area'
                            value={homeEst.area}
                            onChange={homeEstChange}
                            required
                        />
                        <label>Roof Area</label>
                    </div>
                    <div className='hero-input-container'>
                        <select
                            name='type'
                            value={homeEst.type}
                            onChange={homeEstChange}
                            required
                        >
                            <option value='' hidden>Property Type</option>
                            <option value='residential'>Residential</option>
                            <option value='commertial' >Commertial</option>
                        </select>
                    </div>
                    <div className='hero-input-container'>
                        <input
                            type='submit'
                            value='Design'
                        />
                    </div>
                </form> 
            </div>
        )
    }

    const EstFormMob = () =>{
        return(
        <div className='hero_estimator_container_Mob'>
            <form onSubmit={homeEstSubmit}>
                    <div className='hero-input-container'>
                        <input
                            type='number'
                            name='pincode'
                            placeholder='pincode'
                            value={homeEstMob.name}
                            onChange={sethomeEstMob}
                            required
                        />
                        <label>Pincode</label>
                    </div>
                    <div className='hero-input-container'>
                        <input
                            type='number'
                            name='bill'
                            placeholder='Average Bill'
                            value={homeEstMob.bill}
                            onChange={sethomeEstMob}
                            required
                        />
                        <label>Average Bill</label>
                    </div>
                    <div className='hero-input-container'>
                        <input
                            type='number'
                            name='area'
                            placeholder='Roof Area'
                            value={homeEstMob.area}
                            onChange={sethomeEstMob}
                            required
                        />
                        <label>Roof Area</label>
                    </div>
                    <div className='hero-input-container'>
                        <select
                            name='type'
                            value={homeEstMob.type}
                            onChange={sethomeEstMob}
                            required
                        >
                            <option value='' hidden>Property Type</option>
                            <option value='residential'>Residential</option>
                            <option value='commertial' >Commertial</option>
                        </select>
                    </div>
                    <div className='hero-input-container'>
                        <input
                            type='submit'
                            value='Design'
                        />
                    </div>
                </form> 
        </div>
        )
    }

    const [homeEstForm, setHomeEstForm] = useState(<EstFormWeb/>)
    const formSelector = () =>{
        if(window.innerWidth<768){
            setWeb('mobile')
            setHomeEstForm(<EstFormMob/>)
        }else{
            setWeb('desktop')
            setHomeEstForm(<EstFormWeb/>)
        }
    }
    useEffect(()=>{
        if (window.innerWidth<768){
            setWeb('mobile')
            setHomeEstForm(<EstFormMob/>)
        }else{
            setWeb('desktop')
            setHomeEstForm(<EstFormWeb/>)
        }
        window.addEventListener('resize', formSelector);
        window.scrollTo(0, 0);
        return () => {
        window.scrollTo(0, 0);
        window.removeEventListener('resize', formSelector);
        }
    },[])

    

//why choose us
    const whyList = [
        [
            'Empowering Informed Choices',
            `APPL strives to empower our clients by guiding them toward cost-effective planning strategies. 
            Our experts assist in making informed decisions that align seamlessly with individual requirements and budget constraints`,
            './images/why-1.png',
            './images/why-icon-1.png',
            'dasfds'],
        [
            'Seamless Execution and Support',
            `From selection to on-time installation, our team takes the lead. We pride ourselves on providing not only superior products 
            but also a hassle-free experience, ensuring smooth operations from day one.`,
            './images/why-2.png',
            './images/why-icon-1.png',
            'dasfds'],
        [
            'Dedication to Service Excellence',
            `At APPL, our commitment transcends installation. We offer prompt after-sales service, supported by our skilled workforce and a commitment to ongoing customer support.`,
            './images/why-1.png',
            './images/why-icon-1.png',
            'dasfds'],
        ]
    const [index, setIndex] = useState(0)
//Next why
    const nextWhy = () => index<=1?setIndex(index+1):setIndex(0)
//Previous why
    const preWhy = () =>index>0?setIndex(index-1):setIndex(2)

//Testimonial
    // const test = [
    //     [
    //         'Ambrose M. Moore', 1, 'Execellent Service',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-1.png'
    //     ],
    //     [
    //         'Shiny', 2, 'Smart Solution',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-2.png'
    //     ],
    //     [
    //         'Meena', 3, 'One Stop Solar Solution',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-3.png'
    //     ],
    //     [
    //         'Ambrose M. Moore', 4, 'Execellent Service',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-1.png'
    //     ],
    //     [
    //         'Ambrose M. Moore', 5, 'Execellent Service',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-1.png'
    //     ],
    //     [
    //         'Ambrose ', 1, 'Execellent',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-1.png'
    //     ],
    //     [
    //         'Meena', 4, '7th Title',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-3.png'
    //     ],
    //     [
    //         'Karthikeyan', 4, '8th Title',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-3.png'
    //     ],
    //     [
    //         'Nirmal', 5, '9th Title',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-3.png'
    //     ],
    //     [
    //         'Meena', 4, '10th Title',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-3.png'
    //     ],
    //     [
    //         'Meena', 4, '11th Title',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-3.png'
    //     ],
    //     [
    //         'Meena', 4, '12th Title',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-3.png'
    //     ],
    //     [
    //         'Meena', 4, '13th Title',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-3.png'
    //     ],
    //     [
    //         'Meena', 4, '14th Title',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-3.png'
    //     ],
    //     [
    //         'Meena', 4, '15th Title',
    //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales lacinia lacus vulputate tristique. 
    //         Cras hendrerit gravida orci aliquet pellentesque. Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
    //         Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. Praesent vulputate, magna sed suscipit imperdiet, 
    //         justo nisl semper erat, a auctor justo sem nec ex. Nam tincidunt elit tempor mi mattis malesuada.`,
    //         './images/test-3.png'
    //     ],
    // ]

    const [test, setTest] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8801/testimonial")
        .then(res=>res.json())
        .then(data=>setTest(data))
    },[])
    
//Spliting Testimonial
    const [testimonial, setTestimonial] = useState([])
    const length = test.length
    // for(let i=0;i<Math.ceil(test.length/3)+2;i++){

    // const [testPass, setTestPass] = useState(testimonial[0])
    const TotalIndex = testimonial.length-1
    const [testPass, setTestPass] = useState()
    const [testIndex, settestIndex] = useState(0)
    
    const point =['./images/test-select.svg', './images/test-unselect.svg']
    const [pointSelect, setPointSelect] = useState('one') 

//selecting Pointers
    useEffect(()=>{
        if(test.length>0){
            const li = []
            for(let i=0;i<(Math.floor(length/3));i++){
                const split = test.splice(0,3)
                li.push(split)
            }
            setTestimonial(li)
            setTestPass(li[0])
        }
    },[test])
    // },[testIndex])
    useEffect(()=>{
        if(testIndex === 0){
            setPointSelect('one')
        } else if(testIndex === TotalIndex){
            setPointSelect('three')
        } else{
            setPointSelect('two')
        }
    },[testIndex])

//Pointer Functions
    const pointOne = () =>{
        if(testIndex === 0){

        } else if (testIndex === TotalIndex){
            setTestPass(testimonial[testIndex-1])
            settestIndex(testIndex-1)
            
        } else{
            setTestPass(testimonial[testIndex-1])
            settestIndex(testIndex-1)
        }
    }
    const pointTwo = () =>{
        if(testIndex === 0){
            setTestPass(testimonial[testIndex+1])
            settestIndex(testIndex+1)
        } else if (testIndex === TotalIndex){
            setTestPass(testimonial[testIndex-1])
            settestIndex(testIndex-1)
        } else{
            
        }
    }
    const pointThree = () =>{
        if(testIndex === 0){
            setTestPass(testimonial[testIndex+1])
            settestIndex(testIndex+1)
        } else if (testIndex === TotalIndex){

        } else{
            setTestPass(testimonial[testIndex+1])
            settestIndex(testIndex+1)
        }
    }

    

//Other-Products
    const other = [
        [
            'Solar Water Heater',
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse sodales lacinia lacus vulputate tristique. 
            Cras hendrerit gravida orci aliquet pellentesque. 
            Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
            Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. 
            Praesent vulputate, magna sed suscipit imperdiet, justo nisl semper erat, a auctor justo sem nec ex. 
            Nam tincidunt elit tempor mi mattis malesuada.`,
            './images/otherProd.png'
        ],
        [
            'Solar Water Pump',
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse sodales lacinia lacus vulputate tristique. 
            Cras hendrerit gravida orci aliquet pellentesque. 
            Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
            Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. 
            Praesent vulputate, magna sed suscipit imperdiet, justo nisl semper erat, a auctor justo sem nec ex. 
            Nam tincidunt elit tempor mi mattis malesuada.`,
            './images/otherProd.png'
        ],
        [
            'Solar Street Light',
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse sodales lacinia lacus vulputate tristique. 
            Cras hendrerit gravida orci aliquet pellentesque. 
            Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
            Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. 
            Praesent vulputate, magna sed suscipit imperdiet, justo nisl semper erat, a auctor justo sem nec ex. 
            Nam tincidunt elit tempor mi mattis malesuada.`,
            './images/otherProd.png'
        ],
        [
            'UPS & Battery',
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse sodales lacinia lacus vulputate tristique. 
            Cras hendrerit gravida orci aliquet pellentesque. 
            Nullam scelerisque nisi id purus blandit, dapibus pellentesque magna vestibulum. 
            Nunc at eros dui. Sed non lectus convallis, scelerisque tortor non, tempus nunc. 
            Praesent vulputate, magna sed suscipit imperdiet, justo nisl semper erat, a auctor justo sem nec ex. 
            Nam tincidunt elit tempor mi mattis malesuada.`,
            './images/otherProd.png'
        ],
    ]
    const [other_select, setOther_select] = useState('heater')
    const [otherTitle, setOtherTitle] = useState(other[0][0])
    const [otherContent, setOtherContent] = useState(other[0][1])
    const [otherImage, setOtherImage] = useState(other[0][2])

    useEffect(()=>{
        switch(other_select){
            case 'heater':
                setOtherTitle(other[0][0])
                setOtherContent(other[0][1])
                setOtherImage(other[0][2])
                break;
            case 'pump':
                setOtherTitle(other[1][0])
                setOtherContent(other[1][1])
                setOtherImage(other[1][2])
                break;
            case 'light':
                setOtherTitle(other[2][0])
                setOtherContent(other[2][1])
                setOtherImage(other[2][2])
                break;
            case 'ups':
                setOtherTitle(other[3][0])
                setOtherContent(other[3][1])
                setOtherImage(other[3][2])
                break;
        }
    },[other_select]) 

    return(
        <div className='home-wrapper'>
            <div className='hero-container'>
                <div className='hero-landing-container'>
                    <div className='hero-text-container'>
                        <p>Empower your Future with Sustainable</p>
                        <p>SOLAR ENERGY</p>
                        <p>
                            Change your life greener with our Solar Product. 
                            Avail Govt. Subsidy and Easy Finance 
                        </p>
                        <div className='hero-switch-container checkbox-wrapper-17'>
                            <input
                                type='checkbox'
                                name='solar'
                                value={solar}
                                onChange={(e)=>setSolar(!solar)}
                                id="switch-17"
                            />
                            <label htmlFor="switch-17">
                            </label>
                            <p className='hero-swithch-text'>
                                Go Sustainable
                            </p>
                        </div>
                    </div>
                    <div className='hero-image-container'>
                        <img src={solar?landing_image[1]:landing_image[0]} alt='landing'/>
                    </div>
                </div>
                {/* {homeEstForm}                                         */}
                <div className='hero-estimator-container'>
                <form onSubmit={homeEstSubmit}>
                    <div className='hero-input-container'>
                        <input
                            type='number'
                            name='pincode'
                            placeholder='pincode'
                            value={homeEst.name}
                            onChange={homeEstChange}
                            required
                        />
                        <label>Pincode</label>
                    </div>
                    <div className='hero-input-container'>
                        <input
                            type='number'
                            name='bill'
                            placeholder='Average Bill'
                            value={homeEst.bill}
                            onChange={homeEstChange}
                            required
                        />
                        <label>Average Bill</label>
                    </div>
                    <div className='hero-input-container'>
                        <input
                            type='number'
                            name='area'
                            placeholder='Roof Area'
                            value={homeEst.area}
                            onChange={homeEstChange}
                            required
                        />
                        <label>Roof Area</label>
                    </div>
                    <div className='hero-input-container'>
                        <select
                            name='type'
                            value={homeEst.type}
                            onChange={homeEstChange}
                            required
                        >
                            <option value='' hidden>Property Type</option>
                            <option value='residential'>Residential</option>
                            <option value='commertial' >Commertial</option>
                        </select>
                    </div>
                    <div className='hero-input-container'>
                        <input
                            type='submit'
                            value='Design'
                        />
                    </div>
                </form> 
            </div>
            </div>
            {/* <div className='blackstrip'>

            </div> */}
            <div className='why-container'>
                <h1>Why Choose Appl ?</h1>
                <div className='why-content'>
                    <div className='why-image-container'>
                        <div className='why-image'>
                            <img src={whyList[index][2]} alt={whyList[index][2]}/>
                        </div>
                    </div>
                    <div className='why-context'>
                        <h2>{whyList[index][0]}</h2>
                        <p>{whyList[index][1]}</p>
                        {/* <div className='icons-container'>
                            <div className='icon'>
                                <div className='icon-image'>
                                    <img src={whyList[index][3]} alt={whyList[index][3]}/>
                                </div>
                                <p>{whyList[index][4]}</p>
                            </div>
                            <div className='icon'>
                                <div className='icon-image'>
                                    <img src={whyList[index][3]} alt={whyList[index][3]}/>
                                </div>
                                <p>{whyList[index][4]}</p>
                            </div>
                            <div className='icon'>
                                <div className='icon-image'>
                                    <img src={whyList[index][3]} alt={whyList[index][3]}/>
                                </div>
                                <p>{whyList[index][4]}</p>
                            </div>
                        </div> */}
                    </div>
                    <div className='arrow-container'>
                        <div className='arrow' onClick={nextWhy}>
                            <img src='./images/why-next.svg' alt='Next'/>
                        </div>
                        <div className='arrow' onClick={preWhy}>
                            <img src='./images/why-prev.svg' alt='Previous'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='popular-products'>
                <h1>Popular Product</h1>
            </div>
            <div className='pop-container'>
                    <PropularProduct/>
            </div>
            <div className='testimonialWrapper'>
                <h1>Testimonial</h1>
                <div className='test-full-container'>
                    <div className='testimonial-container'>
                        {testPass?<Testimonial
                            testimonial={testPass}/>:null}                  
                    </div>
                    <div className='test-points'>
                        <div className='point' onClick={pointOne}>
                            <img src={pointSelect==='one'?point[0]:point[1]} alt=''/>
                        </div>
                        <div className='point' onClick={pointTwo}>
                            {/* <img src='./images/test-unselect.svg' alt=''/> */}
                            <img src={pointSelect==='two'?point[0]:point[1]} alt=''/>
                        </div>
                        <div className='point' onClick={pointThree}>
                            <img src={pointSelect==='three'?point[0]:point[1]} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='live-products'>
                <h1>Live Product</h1>
            </div>
            <div className='live-prop-container'>
                <Liveprop/>
            </div>
            <div className='otherProds'>
                <h1 className='otherTitle'>Our Other Products</h1>
                <div className='other-selector'>
                    <p className={other_select==='heater'?'other_selected':''} onClick={()=>setOther_select('heater')}>Solar Water Heater</p>
                    <p className={other_select==='pump'?'other_selected':''} onClick={()=>setOther_select('pump')}>Solar Water Pump</p>
                    <p className={other_select==='light'?'other_selected':''} onClick={()=>setOther_select('light')}>Solar Street Light</p>
                    <p className={other_select==='ups'?'other_selected':''} onClick={()=>setOther_select('ups')}>UPS & Battery</p>
                </div>
                <div className='other-container'>
                    <div className='other-image-container'>
                        <img src={otherImage} alt=''/>
                    </div>
                    <div className='other-content'>
                        <h1>{otherTitle}</h1>
                        <p>{otherContent}</p>
                        <div className='other-more'>
                            <p>See More</p>
                            <div className='other-more-arrow'>
                                <img src='./images/other-arrow.svg' alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contactUS'>
                <Talk/>
            </div>
        </div>
    );
}