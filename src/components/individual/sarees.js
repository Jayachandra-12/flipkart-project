import React, { useState,useEffect } from 'react'
// import {axios} from 'axios'
function Sarees() {

    let [sarees,setSarees] = useState([])
    useEffect(()=>{
        fetch('/clothes-api/cloth/sarees')
        .then(response => response.json())
        .then(data => {
            setSarees(data.payload)
        })
    },[])

    function price() {
        setSarees([...sarees.sort((a,b) => a.price > b.price ? 1 : -1)])

        console.log(sarees)
        // setSarees(a)
    }
    function discount() {
        setSarees([...sarees.sort((a,b) => a.discount > b.discount ? -1 : 1)])

        console.log(sarees)
        // setSarees(a)
    }

    return (
        <div>
        <h1 className='display-1'>Sarees</h1>
        <div className='row'>
            <div className='col col-1'>
                {/* <button className='btn btn-info' onClick={() => price()}>Price</button>
                <button className='btn btn-info' onClick={() => discount()}>Discount</button> */}
                <input type="checkbox" id="topping1" name="topping1" value="Price" onClick={() => price()} />
                <label htmlFor="topping1" className='h5'>Price</label>
                <br />
                <input type="checkbox" id="topping2" name="topping2" value="discount" onClick={() => discount()} />
                <label htmlFor="topping2" className='h5'>Discount</label>
            </div>
            <div className='col'>
            <div className='row justify-content-center m-3'>
                {
                    sarees.map((val,index)=> 
                    <a className="card col-lg-4 col-md-6 col-sm-10 w-25 m-2 atag" href={val.img} key={index}>
                        <div className='dimg d-block mx-auto'>
                            <img src={val.img} className="card-img-top h-100" alt="..." />
                        </div>
                        <div className="card-body bg-light">
                        <h5 className="card-title">{val.title}</h5>
                        <p className="card-text">{val.colour}</p>
                        <p className="card-text">{val.discount}</p>
                        <p className="card-text">{val.price}</p>
                        </div>
                    </a>
                    )
                }
            </div>
            </div>
        </div>
    </div>
    )
}

export default Sarees