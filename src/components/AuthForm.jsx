import React from 'react'
import { useState } from "react"; 
import axios from "axios"; 
import { useNavigate, Link } from "react-router-dom"

function AuthForm() {

 /*   const navigate = useNavigate(); 

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin(e) {
    e.preventDefault()
    try{
      const requestBody = {userName, password}
      const response = await axios.post(`http://localhost:5005/`)

      

      navigate('/DashboardPage')
    }
    catch(error); 
  } */
  return (
    <div>AuthForm</div>
  )
}

export default AuthForm