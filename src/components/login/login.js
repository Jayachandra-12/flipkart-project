import React from 'react'
import './login.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    let navigate = useNavigate()
    const {register,handleSubmit,formState:{errors}}=useForm()
    const submit=async (data)=>{
        const axios = require('axios');
        const d =await axios.post("/user-api/login",data);
        if(d.data.message==="success"){
            localStorage.setItem("username",d.data.userObj.username);
            console.log(d.data.userObj)
            console.log(d.data.userObj.account)
            alert("Login successful")
            if(d.data.userObj.account == 'user')
                navigate('/')
            else 
                navigate('/adminhashtags')
        }
        else{
          alert(d.data.message)
        }
    }
    
    return (
        <div className='d-flex justify-content-center mt-5'>
            <form id='a' className='row w50 justify-content-center p-5 bg-secondary rounded m-2' onSubmit={handleSubmit(submit)}>
                <h3 className='fw-bolder login'>Login</h3>
                <select className='form-control' name="account" id="cars" required {...register("account",{required: true} )}>
                    <option defaultChecked disabled>Select</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                <div className='form-floating mt-4'>
                    <input className='form-control' type="email" placeholder="Email" required {...register("email",{required: true} )}/>
                    <label className='ps-3' htmlFor="email">Email</label>
                </div>
                <div className='form-floating mt-4'>
                    <input className='form-control' type="password" placeholder="Password" required {...register("password",{required: true} )}/>
                    <label className='ps-3' htmlFor="password">Password</label>
                </div>

                <button className='btn btn-primary w-50 mt-3'>Log In</button>
            </form>
            </div>
    )
}
