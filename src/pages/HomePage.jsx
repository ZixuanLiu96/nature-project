import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import AuthModal from "../components/AuthModal"

function HomePage() {
const [mode, setMode] = useState(null)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
    <button className="btn btn-primary" onClick={()=> setMode("login")}>Log in</button>
    <button className="btn btn-secondary" onClick={()=> setMode("signup")}>Sign up</button>
    {mode && 
    <AuthModal mode={mode} onClose={() => setMode(null)} />}
    </div>
  )
}

export default HomePage