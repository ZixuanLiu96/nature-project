import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"

function AuthForm({ mode }) {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    //const [userData, setUserData] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        if (!userName || !password) {
            setError("Please enter username and password");
            return
        }

        console.log(userName, password)

        setUserName("");
        setPassword(""); //empty the form again after submit
        setError(null)

        if (mode === "login") {
            console.log("Login")
            //setMessage("Welcome back!") disappears beacuse of navigation to dashboard
            //navigate to userdashboard
            
        } else {
            console.log("Signup")
            setMessage("Welcome! You successfully created an account!")
            //navigate to login?
        }
        return handleLogin(userName, password)
    }

    const handleLogin = () => {
    
        axios.get("http://localhost:5005/user")
       .then((response) => setUserData(response.data))
       //search in data for matching userName & password find()?
       //store Id in context?
       .then((response) => {})
       .catch((error) => console.log(error))

       if ( user.userName === userName && user.password === password ) {
        setLoggedIn(true)
        setError(null)
        navigate("/dashboard")
       } else {
        setError("Invalid username or password")
       }
       

    }

    return (
        <>
            {error && (
                <div role="alert" className="alert alert-warning alert-outline m-4">
                    <span>{error}</span>
                </div>
            )}

            {message && (
                <div role="alert" className="alert alert-success m-4">
                    <span>{message}</span>
                </div>
            )
            }
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" >

                <input
                    type="text"
                    placeholder='Enter your username'
                    className="input input-bordered"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Enter your password'
                    className="input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="btn btn-soft btn-primary">
                    {mode === "login" ? "Login" : "Sign up"}
                </button>

            </form>

        </>

    )
}

export default AuthForm