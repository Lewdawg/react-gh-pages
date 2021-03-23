import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const Login = ({ setLogin }) => {


    const [loginEmail, setEmailAddress] = useState('')
    const [password, setPassword] = useState('');


    const history = useHistory();


    const checkSubmit = (e) => {
        e.preventDefault()

        const config = {
            method: 'POST',
            url: 'http://localhost:4000/login',
            data: { loginEmail, password }
        }

        axios(config)
            .then((result) => {
                console.log(result)
                setLogin(true)
                history.push('/')
            })
            .catch(err => {
                console.log(err.message)
                alert('Invalid Email or Password')
            })
    }


    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={checkSubmit}>

                <label htmlFor="email">Email Address:</label>
                <input type="email" id='email' value={loginEmail} onChange={(e) => setEmailAddress(e.target.value)} required />

                <label htmlFor="UserPassword">Password</label>
                <input type="password" id='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />


                <button type='submit'>Log In</button>

            </form>
        </div>
    );
}

export default Login;