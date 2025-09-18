import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"

function AuthForm({ mode }) {

    //const navigate = useNavigate();

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(userName, password)

        setUserName("");
        setPassword(""); //empty the form again after submit

        if (mode === "login") {
            console.log("Login")
            return (
                <p>Create new account here</p>
            )
            //navigate to userdashboard
        } else {
            console.log("Signup")
            //navigate to newdashboard
        }
    }

    return (
        
        <>
        
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