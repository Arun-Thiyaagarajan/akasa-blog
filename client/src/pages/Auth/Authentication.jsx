import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import './Authentication.css'
import Dash from '../../components/Dash'
import { toast } from 'react-toastify'
import { UserContext } from '../../context/UserContext'

const Authentication = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [style, setStyle] = useState({})
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    
    const {setUserInfo} = useContext(UserContext)

    const handleForm = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:4000/login", {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        })
        if (response.status === 200) {
            toast.success('Login Success')
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                navigate('/')
            })
        } else {
            toast.error('Oops! Invalid Credentials')
        }
    }

    return (
        <>
            <main className="auth">

                <section className="login-container">

                    <div className="main-title">
                        <Link to='/'><h1>Akasa Blog</h1></Link>
                        <Dash />
                    </div>

                    <div className='login-title'>
                        <i className="fa-solid fa-user" style={{ color: '#2e086d' }}></i>
                        <h2>User Login</h2>
                    </div>

                    <div className="form-container">
                        <form method='POST' onSubmit={handleForm} autoComplete='off'>

                            <div className="input-field">
                                <button className="ip-icon">
                                    <i className="fa-regular fa-user" style={{ color: '#2e086d' }}></i>
                                </button>
                                <input
                                    type="text"
                                    id='username'
                                    name='userName'
                                    onChange={e => setUsername(e.target.value)}
                                    placeholder='Username'
                                    required />
                            </div>

                            <div className="input-field" style={{ marginBottom: '1.5rem' }}>
                                <button className="ip-icon">
                                    <i className="fa-solid fa-key" style={{ color: '#2e086d' }}></i>
                                </button>
                                <input
                                    type="password"
                                    id='password'
                                    name='password'
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder='Password'
                                    required />
                            </div>

                            <Link to='/register' className="forgot-password">Not a member?</Link>
                            <button type='submit'
                                className="btn login-btn"
                                disabled={isLoading}
                                style={style}
                            >
                                LOGIN
                            </button>

                        </form>

                    </div>

                </section>

            </main>
        </>
    )
}

export default Authentication