import React from 'react';
import './Loginfrm.css';
import {FaUserCircle, FaLock} from "react-icons/fa";

export const Loginfrm = () => {
  return (
    <div className='wrapper'>
        <form action = "">
            <h1>Login</h1>
            
            {/*Username field*/}
            <div className="input-box">
                <input type= "username" placeholder= 'Username' required/>
                <FaUserCircle className='icon' />
            </div>

            {/*Password field */}
            <div className="input-box">
                <input type="password" placeholder= 'Password' required/>
                <FaLock className='icon'/>
            </div>

            {/*Check Box*/}
            <div className= "remember-forgot">
                <label><input type = "checkbox" /> Remember Me </label>

                {/*Forgot Password Hyperlink*/}
                <a href="#">Forgot Password?</a>                
            </div>

            {/*Login Button*/}
            <button type="submit">Login</button>

            {/*Register Hyperlink*/}
            <div className = "register-link">
                <p> Don't Have an Account? <a href = "#"> Register </a> </p>
            </div>

        </form>
    </div>
  )
}
