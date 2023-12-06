import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Dash from '../../components/Dash'
import { toast } from 'react-toastify'

const Registration = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [style, setStyle] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.status === 200) {
      toast.success('Hurey :) Registration Success!')
      setUsername('')
      setPassword('')
      navigate('/login')
    } else {
      toast.error('Oops! Registration Failed. Try again!')
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
            <h2>User Registration</h2>
          </div>

          <div className="form-container">
            <form method='POST' onSubmit={handleForm} autoComplete='off'>

              <div className="input-field">
                <button className="ip-icon">
                  <i className="fa-regular fa-user" style={{ color: '#2e086d' }}></i>
                </button>
                <input
                  value={username}
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
                  value={password}
                  type="password"
                  id='password'
                  name='password'
                  min={8}
                  onChange={e => setPassword(e.target.value)}
                  placeholder='Password'
                  required />
              </div>

              <Link to='/login' className="forgot-password">Already have an account?</Link>
              <button type='submit'
                className="btn login-btn"
                disabled={isLoading}
                style={style}
              >REGISTER</button>

            </form>

          </div>

        </section>

      </main>
    </>
  )
}

export default Registration