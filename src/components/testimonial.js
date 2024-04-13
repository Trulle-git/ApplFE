import { useEffect, useState } from 'react';
import './testimonial.css'

export default function Testimonial({testimonial}){
    // const [title, setTitle] = useState(testimonial[0][2])
    // const [content, setContent] = useState(testimonial[0][3])
    // const [Name, setName] = useState(testimonial[0][0])

    const [title, setTitle] = useState(testimonial[0].testtitle)
    const [content, setContent] = useState(testimonial[0].testcontent)
    const [Name, setName] = useState(testimonial[0].testname)

    const [rate1, setrate1] = useState(Array.from({ length: parseInt(testimonial[0].testrating) }, (_, index) => index))
    const [rate2, setrate2] = useState(Array.from({ length: parseInt(testimonial[1].testrating) }, (_, index) => index))
    const [rate3, setrate3] = useState(Array.from({ length: parseInt(testimonial[2].testrating) }, (_, index) => index))

    const [client, setClient] = useState('one')

    useEffect(()=>{
        if(client==='one'){
            setTitle(testimonial[0].testtitle)
            setContent(testimonial[0].testcontent)
            setName(testimonial[0].testname)
        } else if(client==='two'){
            setTitle(testimonial[1].testtitle)
            setContent(testimonial[1].testcontent)
            setName(testimonial[1].testname)
        } else if(client==='three'){
            setTitle(testimonial[2].testtitle)
            setContent(testimonial[2].testcontent)
            setName(testimonial[2].testname)
        }
    },[client])

    useEffect(()=>{
        setTitle(testimonial[0].testtitle)
        setContent(testimonial[0].testcontent)
        setName(testimonial[0].testname)
        setrate1(Array.from({ length: parseInt(testimonial[0].testrating) }, (_, index) => index))
        setrate2(Array.from({ length: parseInt(testimonial[1].testrating) }, (_, index) => index))
        setrate3(Array.from({ length: parseInt(testimonial[2].testrating) }, (_, index) => index))
        setClient('one')
    },[testimonial])
    
    return(
        <div className='testimonila-main'>
            <div className='test-content'>
                <h2>{title}</h2>
                <p>{content}</p>
                <p>{Name}</p>
            </div>
            <div className='test-clients'>
                <div className={client==='one'?'client selected':'client'} onClick={()=>setClient('one')}>
                    <p>{testimonial[0].testname}</p>
                    <div className='rating'>
                        {rate1.map((item)=>{
                            return(
                                <div className='rate'>
                                    <img src='./images/rated.svg'alt=''/>
                                </div>
                            )
                        })}
                    </div>
                    <div className='clien-image'>
                        <img src={`http://localhost:8801/upload/${testimonial[0].testimage}`} alt=''/>
                    </div>
                </div>
                <div className={client==='two'?'client selected':'client'} onClick={()=>setClient('two')}>
                    <p>{testimonial[1].testname}</p>
                    <div className='rating'>
                    {rate2.map((item)=>{
                            return(
                                <div className='rate'>
                                    <img src='./images/rated.svg'alt=''/>
                                </div>
                            )
                        })}
                    </div>
                    <div className='clien-image'>
                        <img src={`http://localhost:8801/upload/${testimonial[1].testimage}`} alt=''/>
                    </div>
                </div>
                <div className={client==='three'?'client selected':'client'} onClick={()=>setClient('three')}>
                    <p>{testimonial[2].testname}</p>
                    <div className='rating'>
                        {rate3.map((item)=>{
                                return(
                                    <div className='rate'>
                                        <img src='./images/rated.svg'alt=''/>
                                    </div>
                                )
                            })}
                    </div>
                    <div className='clien-image'>
                        <img src={`http://localhost:8801/upload/${testimonial[2].testimage}`} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
}