import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const url = "https://localhost:5001/user/signin"

    const signin = () => {
        axios.post(webkitURL, {email, password})
        .then ((response) => {
            if (response.data.status) {
                navigate("./Dashboard")
            } else {
                console.log("wrong details");
            }
        })
    }

    return (
        <div>
            <div className='flex item-center justify-center flex-col my-10'>
                <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}                 
                className='rounded-md p-3 border-red-200 border my-2 w-80'/>
                <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} 
                className='rounded-md p-3 border-red-200 border my-2 w-80' />

                <button onClick={signin} className='px-20 p-3 rounded-md bg-green-900 text-white my-5'>Sign 
                Up</button>
            </div>
        </div>
    )
}

export default Signin