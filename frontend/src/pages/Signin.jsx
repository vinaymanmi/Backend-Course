import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

const Signin = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const signin = async () =>{
        const response = await axios.post("http://localhost:5000/signin",{name,email,password})
        alert(response.data.message)
    }

  return (
    <div>
        <input type="text" placeholder='Enter Username' onChange={(e) => {
            setName(e.target.value)
        }}/>
        <br /><br />
        <input type="email" placeholder='Enter Email' onChange={(e) => {
            setEmail(e.target.value)
        }}/>
        <br /><br />
        <input type="password" placeholder='Enter password' onChange={(e) => {
            setPassword(e.target.value)
        }}/>

        <br /><br />
        <button onClick={signin}>Sign In</button>
        <br /><br />
        <p>Already have an account
            <Link to="/">login</Link>
        </p>
    </div>
  )
}

export default Signin