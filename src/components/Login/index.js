import React from 'react'
import "./login.css"
import logo from "../../assets/image/Quora-logo.png"
const Login = () => {
  return (
    <div className='bdy'>
        <div className='logo'>
            <img src={logo} alt="logo" width="200px"/>
            <p>A place to share knowledge and better understand the world</p>
            <div className='lgnDiv'>
              <div>
                <p>By continuing you indicate that you agree to Quora’s <a href='https://www.quora.com/about/tos' target='_blank'rel="noreferrer" >Terms of Service</a> and <a href='https://www.quora.com/about/privacy' target='_blank'rel="noreferrer" >Privacy Policy.</a></p>
              </div>
              <div>
                <label htmlFor="">Login</label>
                <hr />
                <label htmlFor="">Email</label>
                <input placeholder='Your email' />
                <br />
                <label htmlFor="">Password</label>
                <input placeholder='Your password' />
                <br />
                <br />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login