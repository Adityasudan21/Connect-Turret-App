import React from 'react'
import "./Login.css";
function Login() {
    const loginToApp = () => { };
    const register = () => { };
    return (
        <div className='login'>
            <img src='https://i.ibb.co/ZVcTWqm/1ax6e5c9.png' alt=''></img>
            <form action="">
                <input placeholder='Full name (required if registering)' type="text" />
                <input placeholder='Profile Pic URL(Optional)' type="text" />
                <input placeholder='Email' type="email" />
                <input placeholder='Password' type="password" />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a Member? {"  "}
                <span className='login_register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login