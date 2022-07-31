import React from 'react'
import { useEffect,useState } from 'react';

function Menskurta() {
    let [menskurta,setmenskurta] = useState([])
    useEffect(()=>{
        fetch('/clothes-api/cloth/menskurta')
        .then(response => response.json())
        .then(data => {
            setmenskurta(data.payload)
        })
    },[])

    function price() {
        setmenskurta([...menskurta.sort((a,b) => a.price > b.price ? 1 : -1)])

        // setSarees(a)
    }
    function discount() {
        setmenskurta([...menskurta.sort((a,b) => a.discount > b.discount ? -1 : 1)])

        // setSarees(a)
    }

    return (
        <div>
        <h1 className='display-1'>Mens Kurta</h1>
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
                    menskurta.map((val,index)=> 
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

export default Menskurta