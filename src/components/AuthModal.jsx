import React from 'react'
import AuthForm from "./AuthForm"

function AuthModal({ mode, onClose }) {

    return (
        <dialog open className="modal">
            <div className='modal-box'>
                <h2 className="text-xl font-bold mb-4 text-gray-950"> 
                { mode === "login" ? "Login" : "Sign up"}
                </h2>

                <AuthForm mode={mode} />

                <div className="modal-action">
                    <button className="btn mt-4 bg-[#f59f00] text-white border-none shadow-none m-2 hover:bg-amber-400" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    )
}

export default AuthModal