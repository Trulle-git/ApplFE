import { useState } from 'react'
import './talk.css'

export default function Talk(){
    const [talk, setTalk] = useState({
        name:'',
        mobile:'',
        mail:'',
        state:'',
        pincode:'',
        want:'',
        write:''
    })
    const fieldChange = (e) =>{
        const {name, value} = e.target
        setTalk((preData)=>({
            ...preData,
            [name]:value
        }))
    }
    const talkSubmit = (e) =>{
        e.preventDefault()
        console.log(talk)
    }
    return(
        <div className='contactUs-container'>
            <h1>Come Let's Talk</h1>
            <div className='talkContainer'>
                <div className='formContainer'>
                    <form onSubmit={talkSubmit}>
                        <div className='talk-input-container'>
                            <label>Name</label>
                            <input
                                type='text'
                                name='name'
                                value={talk.name}
                                onChange={fieldChange}
                                required
                            />
                        </div>
                        <div className='talk-input-container'>
                            <label>Mobile Number</label>
                            <input
                                type='number'
                                name='mobile'
                                value={talk.mobile}
                                onChange={fieldChange}
                                required
                            />
                        </div>
                        <div className='talk-input-container'>
                            <label>Mail</label>
                            <input
                                type='email'
                                name='mail'
                                value={talk.mail}
                                onChange={fieldChange}
                            />
                        </div>
                        <div className='talk-input-container'>
                            <label>State</label>
                            <select 
                            name='state'
                            value={talk.state}
                            onChange={fieldChange}
                            required>
                                <option value='' hidden>-----------------</option>
                                <option value='Tamilnadu'>Tamilnadu</option>
                                <option value='Kerala'>Kerala</option>
                                <option value='Karnataka'>Karnataka</option>
                                <option value='AP'>AP</option>
                            </select>
                        </div>
                        <div className='talk-input-container'>
                            <label>Pincode</label>
                            <input
                                type='number'
                                name='pincode'
                                value={talk.pincode}
                                onChange={fieldChange}
                                required
                            />
                        </div>
                        <div className='talk-input-container'>
                            <label>Look for</label>
                            <select 
                            name='want'
                            value={talk.want}
                            onChange={fieldChange}
                            required>
                                <option value='' hidden>-----------------</option>
                                <option value='Solar Water Heater' >Solar Water Heater</option>
                                <option value='Solar Water Pump' >Solar Water Pump</option>
                                <option value='Solar Street Light' >Solar Street Light</option>
                                <option value='UPS & Battery' >UPS & Battery</option>
                            </select>
                        </div>
                        <div className='talk-input-container'>
                            <label>Write Us</label>
                            <textarea
                                name='write'
                                value={talk.write}
                                onChange={fieldChange}
                                required
                            />
                        </div>
                        <div className='talk-input-container'>
                            <input
                                type='submit'
                                value='Submit'
                            />
                        </div>
                    </form>
                </div>
                <div className='talkImage-container'>
                    <div className='talkText'>
                        <h2>Let's create a</h2>
                        <h1>Cleaner, Greener</h1>
                        <h2>world for our Future.</h2>
                    </div>
                    <div className='talkImage'>
                        <img src='./images/talk.png' alt="Let's Talk"/>
                    </div>
                </div>
            </div>
        </div>
    );
}