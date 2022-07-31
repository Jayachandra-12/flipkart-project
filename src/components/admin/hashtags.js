import React from 'react'
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Userhashtags from './userhashtags'
import Data from './data'
function Hashtags() {
    let navigate = useNavigate()
    
    return (
        <div className='d-flex justify-content-evenly mt-5 '>
            <button onClick={()=>navigate('/userhashtags')} className='btn btn-info rounded rounded-pill fw-bolder'>Trending Tags</button>
            <button onClick={()=>navigate('/data')} className='btn btn-info rounded rounded-pill fw-bolder'>Trending Data</button>
        </div>
    )
}

export default Hashtags