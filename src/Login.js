import React, { useState } from 'react'
import "./Login.css";
import { auth } from 'firebase/compat/auth';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const loginToApp = (e) => {
        e.preventDefault();
    };
    const register = () => {

    };
    return (
        <div className='login'>
            <img src='https://i.ibb.co/ZVcTWqm/1ax6e5c9.png' alt=''></img>
            <form action="">
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Full name (required if registering)' type="text" />
                <input placeholder='Profile Pic URL(Optional)' type="text" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="email" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type="password" />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a Member? {"  "}
                <span className='login_register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login