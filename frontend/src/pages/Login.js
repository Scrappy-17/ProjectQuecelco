import React from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom'


function Login() {

  
  return (
    
    <div className='box-login'>
      <div className='input-box-login'>
        <form>
          <div className='input-email'>
            <label htmlFor='email'> Email </label>
            <input id='email' type="email" placeholder='Enter Email'/>
          </div>
          <div className='input-password'>
            <label htmlFor='pass'> Password </label>
            <input id='pass' type="password" placeholder='Enter Password'/>
          </div>
          <Link to="/Homepage">login</Link>
          
          <p>Don't have an account yet ? </p>
          <Link to="/Signup">Register Here</Link>
        </form>
      </div>
    </div>
  )
}

export default Login;