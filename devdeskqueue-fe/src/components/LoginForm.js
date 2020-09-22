import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

const loginSchema = yup.object().shape({
    username: yup.string().required("Must fill in username"),
    password: yup.string().required("Must fill in password")
})

const Login = () => {
    const [loginState, setLoginState] = useState({
        username: "",
        password: ""
    });

    const [errorsLogin, setErrorsLogin] = useState({
        username: "",
        password: ""
    })

    const validate = (e) => {
        yup
         .reach(loginSchema, e.target.name)
         .validate(e.target.value)
         .then((valid) => setErrorsLogin({...errorsLogin, [e.target.name]: ''}))
         .catch((err) => setErrorsLogin({...errorsLogin, [e.target.name]: err.errors[0]}))
    }

    const inputChange = (e) => {
        e.persist();
        validate(e);
        setLoginState({
            ...loginState,
            [e.target.name]: e.target.value
        });
    }
    const submitForm = (e) => {
        e.preventDefault();
        console.log("Form submited!!");
        setLoginState({
            username: "",
            password: ""
        });
        
    }

return(
    <div className="form-wrapper">
    
    <h1>Let's get started</h1>
    <form onSubmit={submitForm}>
        <label htmlFor="username"><h4>Username</h4>
        {errorsLogin.username.length > 0 ? <p className="error-message">{errorsLogin.username}</p> : null}
        </label>
        <input name="username" type="text" placeholder="username" onChange={inputChange} value={loginState.username} />

        <label htmlFor="password"><h4>Password</h4>
        {errorsLogin.password.length > 0 ? <p className="error-message">{errorsLogin.password}</p> : null}
        </label>
        <input type="password" name="password" placeholder="password" onChange={inputChange} value={loginState.password} />

        <button className="form-button" type="submit">Login</button>

        <p>or</p>

        <p><Link className="form-links" to="/registration">Create an account</Link></p>
    </form>
    </div>
)
}

export default Login;