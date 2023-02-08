import {useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

const qs = require('qs');


async function loginUser(credentials) {
    return fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login({ setToken }) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          "username": username,
          "password": password
        });
        setToken(token);
    }

    return(
        <div className="login-wrapper">
        <h1>Whizzo Mareena - Log In</h1>
        <form onSubmit={handleSubmit}>
            <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
            <button type="submit">Submit</button>
            </div>
        </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};