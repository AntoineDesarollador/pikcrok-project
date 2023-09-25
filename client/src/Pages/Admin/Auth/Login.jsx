import React, { useState } from 'react';
import './Login.css';
import {useLoginMutation} from "../../../store/slice/service/auth";
import useToken from "../../../store/slice/service/useToken";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";



export default function Login({ setToken }) {
    const navigate = useNavigate();


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [login] = useLoginMutation();

    async function loginUser(credentials) {
        const res = await login(credentials);
        return res.data?.result?.TOKEN;
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        if (token) {
            console.log('login token: ', token);
            setToken(token);
            navigate("/admin");
        }
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input required type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input required type="password" onChange={e => setPassword(e.target.value)} />
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