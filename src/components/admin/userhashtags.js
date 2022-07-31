import React from 'react'
import {useEffect,useState} from 'react'

function Userhashtags() {

    let [hashtags,sethashtags] = useState([])
    // let [isloading]
    useEffect(()=>{
        fetch('/clothes-api/cloth/flipkarthashtags')
        .then(response => response.json())
        .then(data => {
            sethashtags(data.payload)
            console.log(hashtags)
        })
    },[])

    return (
        <div>
            <h3 className='display-1'>Hash Tags</h3>
            <div className='row justify-content-center m-3'>
                {
                    hashtags.map((val,index)=> 
                    <div className="card col-lg-4 col-md-6 col-sm-10 w-25" href={val.img} key={index}>
                        <div className="card-body bg-light">
                            <h5 className="card-title">{val.name}</h5>
                            <p className="card-text">{val.posts}</p>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Userhashtags