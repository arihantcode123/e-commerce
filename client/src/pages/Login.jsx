import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export default function Login() {

  const [user,setUser]=useState({
    email:"",
    password:""
  })

  const navigate = useNavigate();
  const {storeTokenInLS}=useAuth();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(user);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      })
      // console.log(response);
      const res_data=await response.json();
      // console.log(res_data);
      
      if(response.ok){
        storeTokenInLS(res_data.token);
        alert("login successfull");
        setUser({
          email:"",
          password:""
        })
        navigate('/')
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
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" onChange={inputChange} name="email" value={user.email}/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control"  placeholder="Password" onChange={inputChange} name="password" value={user.password}/>
      </div>
  
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
