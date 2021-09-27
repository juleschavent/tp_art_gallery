import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { useAuth } from "../context/AuthContext"

//Login / Logout page
export default function Login({ handleLoginModal }) {

    const emailRef = useRef()
    const passwordRef = useRef()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const { login, signup, logout, currentUser, tempLogin } = useAuth()

    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to log in")
            console.log(error)
            console.log(emailRef)
            console.log(passwordRef)
        }
        setLoading(false)
    }

    async function handleAnonym(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await tempLogin(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    async function handleLogout() {
        setError("")
        try {
            await logout()
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <div className="container__login">
            {currentUser ?
                <section className="login">
                    <p className="login__title">You are logged in as {currentUser.email}</p>
                    <button onClick={handleLogout}>Log out</button>
                    <button onClick={() => history.push('/')}>Go back</button>
                </section> :
                <section >
                    <form onSubmit={handleSubmit} className="login">
                        <h3 className="login__title">Sign in as administrator</h3>
                        <input type="email" placeholder="enter your email" ref={emailRef} />
                        <input type="password" placeholder="enter your password" ref={passwordRef} />
                        <button>Sign in</button>
                    </form>

                    <h2>Or</h2>

                    <form onSubmit={handleAnonym} className="login">
                        <h3 className="login__title">Register an anonymous account</h3>
                        <button>Register</button>
                    </form>
                </section>
            }
        </div>
    )
}
