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
            setMessage("Welcome back!")
            //navigate to userdashboard
            navigate("/dashboard")
        } else {
            console.log("Signup")
            setMessage("Welcome! You successfully created an account!")
            //navigate to newdashboard
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