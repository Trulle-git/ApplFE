import { useState } from 'react'
import './catagory.css'

export default function Catagory(){
    const location = useLocation()
    const editData = location.state?.data

    const date = new Date()
    const [catagory, setCatagory] = useState({
        name:'',
        type:[],
        range:[]
    })
    return(
        <div className='catagoryWrapper'>
            <div className='CMSHeader'>
                <h2>Add Catagory</h2>
            </div>
            <form onSubmit={editCatagory?editCatagory:submitCatagory}>
                
            </form>
        </div>
    )
}