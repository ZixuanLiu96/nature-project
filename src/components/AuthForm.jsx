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
    const [userData, setUserData] = useState({})

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
            
            return handleLogin(userName, password)

        } else {
            console.log("Signup")
            
            return handleSignup(userName, password)
        }

    }

    const handleLogin = () => {

        axios.get("http://localhost:5005/user")
            //search in data for matching userName & password with find
            .then((response) => {
                const foundUser = response.data.find(u => u.userName === userName && u.password === password)

                if (foundUser) {
                    setUserData(foundUser)//store Id for use in context
                    setLoggedIn(true)
                    setError(null)
                    navigate("/dashboard")
                } else {
                    setError("Invalid username or password!")
                    setLoggedIn(false)
                }
            })
            .catch((error) => {
                console.log(error);
                setError("Error, please try again later")
            })
    }


    const handleSignup = () => {

        const newUser = {
            userName: userName,
            password: password,
            userId: Date.now()
        };
//check if userdata already exist
        axios
            .get("http://localhost:5005/user")
            .then((response) => {
                const exists = response.data.find((u) => u.userName === userName || u.password === password);
                if (exists) {
                    setError("Username or password already exist!")
                    return;
                }

                return axios.post("http://localhost:5005/user", newUser)
            })
//add new data to backend
            .then((response) => {
                if (response) {
                    console.log("New user created:", response.data);
                    setUserName("");
                    setPassword("")
                    setUserData(response.data)
                    setLoggedIn(true)
//navigate directly to new dashboard
                    navigate("/dashboard")
                }
            })
            .catch((error) => {
                console.log(error);
                setError("Error, please try again!")
            })
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