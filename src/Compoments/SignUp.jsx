import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const SignUp = () => {

    const navigate = useNavigate()

    const [firstName, setSignFirst] = useState("")
    const [lastName, setSignLast] = useState("")
    const [email, setSignEmail] = useState("")
    const [password, setSignPass] = useState("")
    const [allData, setAllDate] = useState([])

    const submit = () => {
        let url = "http://localhost:5001/user/register"
        //store into an object
        let loginDetails = {firstName, lastName, email, password}
        //push the object in the array using spread operator
        setAllDate([...allData, loginDetails])
        console.log(allData);
        axios.post((url), {firstName, lastName, email, password})
        navigate("/signin")
    }


    return (
        <div>
            <div className="container-fluid col-lg-7 col-md-7 col-11 my-5">
                <div className="row">
                    <h2 className="text text-center text-success text-decoration-underline">Sign Up</h2>
                    <input className='my-2' onChange={(e) => setSignFirst(e.target.value)} placeholder='First Name' type="text" name='firstName' id='firstName' />
                    <input className='my-2' onChange={(e) => setSignLast(e.target.value)} placeholder='Last Name' type="text" name='lastName' id='lastName' />
                    <input className='my-2' onChange={(e) => setSignEmail(e.target.value)} placeholder='Email Address' type="text" name='email' id='email' />
                    <input className='my-2' onChange={(e) => setSignPass(e.target.value)} placeholder='Password' type="text" name='password' id='password' />
                    <button className='btn btn-success' onClick={submit}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp