import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
  const [formData, setFormData] = useState({
    email : '',
    password : ''
  })

  const {email, password} = formData

  const handleChange = (e) => {
    setFormData((prevState) =>({
      ...prevState,
      // targeting the name attribute
      [e.target.name] : e.target.value
    }))
  }

  const submitLogin = (e) => {
    e.preventDefault()
  }


  return (
    <>
    <section className='heading'>
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p>Please sign in</p>
    </section>
    <section className="form">
      <form onSubmit={submitLogin}>
        <div className="form-group">
          <input 
          type="email" 
          className="form-control" 
          id="email"
          name="name"
          value={email}
          placeholder="Please enter your email"
          onChange={handleChange}
          />
          <input 
          type="password" 
          className="form-control" 
          id="password"
          name="name"
          value={password}
          placeholder="Please enter your password"
          onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Submit</button>
        </div>
      </form>
    </section>
    
    </>
  )
}

export default Login