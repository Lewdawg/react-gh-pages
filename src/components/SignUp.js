import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SignUp = ({ setLogin }) => {

    const history = useHistory();

    const [name, setUserName] = useState('');
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('');


    const newSubmit = (e) => {

        e.preventDefault();

        const newUser = {
            method: 'POST',
            url: 'http://localhost:4000/signUp',
            data: {
                "name": name,
                "emailAddress": emailAddress,
                "password": password,
            }
        }

        axios(newUser)
            .then((result) => {
                console.log(result)
                setLogin(true)
                history.push('/products')
            })
            .catch(err => {
                console.log(err.message)
                alert('User not Added!')
            })
    };



    return (
        <div className="title">
            <h1>SignUp</h1>

            <h3>Sign Up to our Website to see further details and special member ony deals!</h3>

            <form onSubmit={newSubmit}>
                <label htmlFor="name">User's Name:</label>
                <input type="text" id='userName' value={name} onChange={(e) => setUserName(e.target.value)} required />

                <label htmlFor="email">Email Address:</label>
                <input type="email" id='email' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required />

                <label htmlFor="UserPassword">Password</label>
                <input type="password" id='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type='submit' >Sign Up</button>
            </form>

        </div>
    );
}

export default SignUp;