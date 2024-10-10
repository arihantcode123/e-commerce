import React, { useState } from 'react'
import { useAuth } from '../store/auth'

export default function Contact() {

    const {user}=useAuth();

    const [message,setMessage] = useState({
        username:user.username,
        email:user.email,
        msg:""
    }) 

    const inputMessage=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setMessage((preValue)=>{
            return {
                ...preValue,
                [name]:value
            }
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/form/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(message)
            })
            
            if(response.ok){
                setMessage((preValue)=>{
                    return {
                        ...preValue,
                        msg:""
                    }
                })
                const data = await response.json();
                console.log(data);
                alert("form submitted")
            }
            // console.log(response);
            
        } catch (error) {
            console.log(error);  
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Username</label>
                <input type="text" className="form-control" placeholder="username" name="username" value={message.username} onChange={inputMessage}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email</label>
                <input type="email" className="form-control" placeholder="name@example.com" name="email" value={message.email} onChange={inputMessage}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={message.msg} onChange={inputMessage}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
