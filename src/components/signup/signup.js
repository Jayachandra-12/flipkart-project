import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {useState} from 'react'
import '../signup/signup.css'

function Signup() {
  let [check,changecheck]=useState(false);
  const {register,handleSubmit,formState:{errors}}=useForm()
    const submit= async (data)=>{
      console.log(data)
        changecheck(false)
        const axios = require('axios');
        const d =await axios.post("/user-api/create-user",data);
        
        if(d.data.message==="New User created"){
            alert("User created!")
        }
        else if(d.data.message==="email already exists"){
            changecheck(true)
            check=true
        }
  }

  return (
        <div className="w-25 d-block mx-auto">
          <form className="mb-4 mt-5 bg-secondary p-5 rounded" onSubmit={handleSubmit(submit)}>
          <h3 className='fw-bolder login'>Sign Up</h3>
            <div className="d-flex flex-row align-items-center mb-4">
              <div className="form-outline flex-fill mb-0">
                <label className="form-label" htmlFor="form3Example1c">Your username</label>
                <input placeholder='Name' type="text" id="form3Example1c" className="form-control" {...register("username",{required: true} )} />
              </div>
              {errors.username?.type=='required' && <p className='text-danger'>Username cannot be empty</p>}
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <div className="form-outline flex-fill mb-0">
                <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                <input placeholder='Email' type="email" id="form3Example3c" className="form-control" {...register("email",{required: true} )}/>
              </div>
              {errors.email?.type=='required' && <p className='text-danger'>Email cannot be empty</p>}
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <div className="form-outline flex-fill mb-0">
                <label className="form-label" htmlFor="form3Example4c">Password</label>
                <input placeholder='Password' type="password" id="form3Example4c" className="form-control" {...register("password",{required: true} )}/>
              </div>
              {errors.password?.type=='required' && <p className='text-danger'>Password cannot be empty</p>}
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <div className="form-outline flex-fill mb-0">
                <label for="account">Select : </label>
                  <select name="account" id="cars" required {...register("account",{required: true} )}>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
              </div>
              {errors.account?.type=='required' && <p className='text-danger'>select any option</p>}
            </div>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button type="submit" className="btn btn-primary btn-lg">Register</button>
            </div>
            {check==true && <p className='text-danger'>Email already exist. Try to login!</p>}
          </form>

        </div>
  );
}

export default Signup;