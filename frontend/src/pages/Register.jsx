import React from 'react'
import { useState, useEffect } from 'react'
import {FaUser} from 'react-icons/fa'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword:''
  })

  const {name, email, password, confirmPassword} = formData

  const handleInputChange = (e) => {
    // after setting state I was able to type in form without it can't type in inputs
    setFormData((prevState) => ({
      ...prevState,
      // targeting the name attribute
      [e.target.name] : e.target.value,
    }))
  }

  const submitRegister = (e) => {
    e.preventDefault()
  }

  return (
    <>
    <section className="heading">
      <h1>
        <FaUser /> Register
      </h1>
      <p>Please create an account</p>
    </section>

    <section className='form'>
      <form onSubmit={submitRegister}>
        <div className="form-group">

          <input 
          type="text" 
          className='form-control' 
          id='name' 
          name='name' 
          value={name} 
          placeholder="Please enter your name"
          onChange={handleInputChange} />
          <input 
          type="email" 
          className='form-control' 
          id='email' 
          name='email' 
          value={email} 
          placeholder="Please enter your email"
          onChange={handleInputChange} />
          <input 
          type="password" 
          className='form-control' 
          id='password' 
          name='password' 
          value={password} 
          placeholder="Please enter your password"
          onChange={handleInputChange} />
          <input 
          type="password" 
          className='form-control' 
          id='confirmPassword' 
          name='confirmPassword' 
          value={confirmPassword} 
          placeholder="Please confirm password"
          onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Submit</button>
        </div>
      </form>
    </section>
    
    </>
  )
}

export default Register