import React from 'react'
import {useEffect,useState} from 'react'

function Data() {
    let [flipkart, setflipkart] = useState([])
    
    useEffect(()=>{
        fetch('/clothes-api/cloth/flipkartadmindata')
        .then(response => response.json())
        .then(data => {
            setflipkart(data.payload)
            console.log(flipkart.image)
        })
    },[])

    function retail_price() {
        setflipkart([...flipkart.sort((a,b) => a.retail_price > b.retail_price ? 1 : -1)])

        // console.log(womenskurta)
        // setSarees(a)
    }
    function discounted_price() {
        setflipkart([...flipkart.sort((a,b) => a.discounted_price > b.discounted_price ? 1 : -1)])

        // console.log(womenskurta)
        // setSarees(a)
    }
    function overall_rating() {
        setflipkart([...flipkart.sort((a,b) => a.overall_rating > b.overall_rating ? -1 : 1)])
        // console.log(womenskurta)
        // setSarees(a)
    }

    return (
        <div>
        <h1 className='display-1'>Latest Sales</h1>
        <div className='row'>
            <div className='col col-1'>
                {/* <button className='btn btn-info' onClick={() => price()}>Price</button>
                <button className='btn btn-info' onClick={() => discount()}>Discount</button> */}
                <input type="checkbox" id="topping" name="topping" value="retail_Price" onClick={() => retail_price()} />Retail_Price
                <input type="checkbox" id="topping" name="topping" value="discounted_Price" onClick={() => discounted_price()} />Discounted_Price
                <input type="checkbox" id="topping" name="topping" value="overall_rating" onClick={() => overall_rating()} />Rating
            </div>
            <div className='col'>
            <div className='row justify-content-center m-3'>
                {
                    flipkart.slice(0,100).map((val,index)=> 
                    <a className="card col-lg-4 col-md-6 col-sm-10 w-25 m-2 atag" href={val.product_url} key={index}>
                        <div className='dimg d-block mx-auto'>
                            <img src={val.image} className="card-img-top h-100" alt="..." />
                        </div>
                        <div className="card-body bg-light">
                        <h5 className="card-title">{val.product_name}</h5>
                        <p className="card-text">{val.brand}</p>
                        <p className="card-text">retail_price : {val.retail_price}</p>
                        <p className="card-text">discounted_price : {val.discounted_price}</p>
                        <p className="card-text">Rating : {val.overall_rating}</p>
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

export default Data