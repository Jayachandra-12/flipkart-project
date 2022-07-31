import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouseLaptop,faMoneyBill1Wave,faChalkboardUser} from '@fortawesome/free-solid-svg-icons'
import {axios} from 'axios'
import logo from '../../images/newsflip.jpeg'
import '../homepage/homepage.css'
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
import Aos from 'aos'
import "aos/dist/aos.css"

function Home() {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    let navigate = useNavigate()
    // let [clothes,setClothes]=useState([]);
    let [sarees,setSarees] = useState([])
    let [womenskurta,setwomenskurta] = useState([])
    let [girls,setgirls] = useState([])
    let [menscasualwear, setmenscasualwear] = useState([])
    let [kids,setkids] = useState([])
    let [menskurta,setmenskurta] = useState([])
    useEffect(()=>{
        fetch('/clothes-api/cloth/sarees')
        .then(response => response.json())
        .then(data => {
            setSarees(data.payload)
        })
    },[])

    useEffect(()=>{
        fetch('/clothes-api/cloth/womenskurta')
        .then(response => response.json())
        .then(data => {
            setwomenskurta(data.payload)
        })
    },[])

    useEffect(()=>{
        fetch('/clothes-api/cloth/girls')
        .then(response => response.json())
        .then(data => {
            setgirls(data.payload)
        })
    },[])

    useEffect(()=>{
        fetch('/clothes-api/cloth/menscasualwear')
        .then(response => response.json())
        .then(data => {
            setmenscasualwear(data.payload)
        })
    },[])

    useEffect(()=>{
        fetch('/clothes-api/cloth/kids')
        .then(response => response.json())
        .then(data => {
            setkids(data.payload)
        })
    },[])
    useEffect(()=>{
        fetch('/clothes-api/cloth/menskurta')
        .then(response => response.json())
        .then(data => {
            setmenskurta(data.payload)
        })
    },[])

    return(
        <div className="rounded">
            <div className='bg p-5 rounded'>
                <h1 data-aos='zoom-out' className='text-center text-primary'><em>Welcome to</em></h1>
                <p data-aos='zoom-out' className='display-4 fw-bold text-success text-center' >NEWSFLIP</p>
                <div className='row'>
                <img data-aos='slide-right' className='logo col col-lg-6 col-sm-10 d-block mx-auto rounded rounded-circle w-25' src={logo} />
                </div>
                <div className='row'>
                <p data-aos='zoom-out' className="col col-lg-6 col-sm-10 mx-auto d-block fw-bolder p-4 text-center h3 text-white">An Online platform where you can know about trending 
                products of flipkart
                </p>
                </div>
            </div>
            
            <div className=' mt-5 d-flex justify-content-between'>
                <h3 className='display-4'>Sarees</h3>
                <button className='butn btn btn-info' onClick={()=>navigate('\sarees')}>show all</button>
            </div>
            <div className='row justify-content-center m-3'>
                {
                sarees.slice(0,4).map((val,index)=> 
                <a className="card col col-lg-4 col-md-6 col-sm-10 w-25 atag" href={val.img} key={index}>
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
            


            <div className='d-flex justify-content-between'>
                <h3 className='display-4'>Kurtas</h3>
                <button className='butn btn btn-info'  onClick={()=>navigate('\womenskurtas')}>show all</button>
            </div>
            <div className='row justify-content-center m-3'>
                {
                womenskurta.slice(0,4).map((val,index)=> 
                <a className="card col col-lg-4 col-md-6 col-sm-10 w-25 atag" href={val.img} key={index}>
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

            <div className='d-flex justify-content-between'>
                <h3 className='display-4'>Kids Wear</h3>
                <button className='butn btn btn-info' onClick={()=>navigate('\girls')}>show all</button>
            </div>
            <div className='row justify-content-center m-3'>
                {
                girls.slice(0,4).map((val,index)=> 
                <a className="card col col-lg-4 col-md-6 col-sm-10 w-25 atag" href={val.img} key={index}>
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
            
            <div className='d-flex justify-content-between'>
                <h3 className='display-4'>Mens Casual Wear</h3>
                <button className='butn btn btn-info' onClick={()=>navigate('\menscasualwear')}>show all</button>
            </div>
            <div className='row justify-content-center m-3'>
                {
                menscasualwear.slice(0,4).map((val,index)=> 
                <a className="card col col-lg-4 col-md-6 col-sm-10 w-25 atag" href={val.img} key={index}>
                    <div className='dimg d-block mx-auto'>
                        <img src={val.img} className="card-img-top h-100" alt="..." />
                    </div>
                    <div className="card-body bg-light">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text">{val.discount}</p>
                    <p className="card-text">{val.price}</p>
                    </div>
                </a>
                )
                }
            </div>
            
            <div className='d-flex justify-content-between'>
                <h3 className='display-4'>Kids Wear</h3>
                <button className='butn btn btn-info' onClick={()=>navigate('/boys')}>show all</button>
            </div>
            <div className='row justify-content-center m-3'>
                {
                kids.slice(0,4).map((val,index)=> 
                <a className="card col col-lg-4 col-md-6 col-sm-10 w-25 atag" href={val.img} key={index}>
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
            
            <div className='d-flex justify-content-between'>
                <h3 className='display-4'>Mens Kurta</h3>
                <button className='butn btn btn-info' onClick={()=>navigate('\menskurta')}>show all</button>
            </div>
            <div className='row justify-content-center m-3'>
                {
                menskurta.slice(0,4).map((val,index)=> 
                <a className="card col col-lg-4 col-md-6 col-sm-10 w-25 atag" href={val.img} key={index}>
                    <div className='dimg d-block mx-auto'>
                        <img src={val.img} className="card-img-top h-100" alt="..." />
                    </div>
                    <div className="card-body bg-light">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text">{val.discount}</p>
                    <p className="card-text">{val.price}</p>
                    </div>
                </a>
                )
                }
            </div>
        </div>
    );
}

export default Home;