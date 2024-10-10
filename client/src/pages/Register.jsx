import React, { useState } from 'react'
import { useAuth } from '../store/auth';
import {useNavigate} from 'react-router-dom'

export default function Register() {

  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })

  const navigate = useNavigate();
  const {storeTokenInLS}=useAuth();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(user);
    try {
      const response = await fetch("http://localhost:5000/api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      })
      const res_data=await response.json();
      // console.log(res_data);
      
      if(response.ok){
        storeTokenInLS(res_data.token);
        alert("registration successfull");
        setUser({
          username:"",
          email:"",
          phone:"",
          password:""
        })
        navigate('/login')
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }
  const inputChange=(e)=>{

    const name= e.target.name;
    const value= e.target.value;
    setUser((preValues)=>{
      return {
        ...preValues,
        [name]:value
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter username" onChange={inputChange} name="username" value={user.username}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" onChange={inputChange} name="email" value={user.email}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Phone</label>
        <input type="number" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Phone Number" onChange={inputChange} name="phone" value={user.phone}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control"  placeholder="Password" onChange={inputChange} name="password" value={user.password}/>
      </div>
  
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
