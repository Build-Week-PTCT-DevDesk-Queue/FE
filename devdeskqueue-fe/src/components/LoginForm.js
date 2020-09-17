import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";

const loginSchema = yup.object().shape({
    name: yup.string().required("Must fill in username"),
    password: yup.string().required("Must fill in password")
})

const Login = () => {
    const [loginState, setLoginState] = useState({
        name: "",
        password: ""
    });

    const [errorsLogin, setErrorsLogin] = useState({
        name: "",
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
            name: "",
            password: ""
        });
        
    }

return(
    <div className="form-wrapper">
    
    <h1>Let's get going</h1>
    <form onSubmit={submitForm}>
        <label htmlFor="name"><h4>Username</h4></label>
        <input name="name" type="text" placeholder="username" onChange={inputChange} />
        <label htmlFor="password"><h4>Password</h4></label>
        <input type="password" name="password" placeholder="password" onChange={inputChange}/>
        <button type="submit">Login</button>
        <span className="styled-span"></span><span className="styled-span">or</span><span></span>
        <p><Link className="link" to="/registration">Create an account</Link></p>
    </form>
    </div>
)
}

export default Login;