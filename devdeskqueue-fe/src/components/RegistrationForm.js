import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from 'axios';


const regFormSchema = yup.object().shape({
    username: yup.string().required("Must choose a username!")
    .min(2, "Username must be at least 2 characters long")
    .max(20, "Username must not exceed 20 characters")
    .matches(/[a-zA-z]/, "Username must contain letters only"),
    password: yup.string()
    .required("Must set a password")
    .max(8 ,"Password should be 8 characters long")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/, "Password must be 4 to 8 characters long, have one uppercase, one lowercase and one numeric digit"),
    role: yup.string().required("Must choose a role")
})

const Registration = () => {

    const history = useHistory();

    const [regState, setRegState] = useState({
        username: "",
        password: "",
        role: ""
    });
    const [errorRegState, setErrorRegState] = useState({
        username: "",
        password: "",
        role: "Must choose an option"
    });

    const validate = (e) => {
        yup
         .reach(regFormSchema, e.target.name)
         .validate(e.target.value)
         .then((valid) => setErrorRegState({...errorRegState, [e.target.name]: ''}))
         .catch((err) => setErrorRegState({...errorRegState, [e.target.name]: err.errors[0]}))
    }

    const inputChange = (e) => {
        e.persist();
        validate(e);
        setRegState({
            ...regState,
            [e.target.name]: e.target.value,
        });
    }

    const submitForm = (e) => {
        e.preventDefault();

        axios.post( 'https://devdesk2-be.herokuapp.com/api/auth/register', regState)
        .then( (res) => {
           console.log(res)

          // ROUTING TO CORRECT COMPONENTS
          if(res.data.role === 'helper'){
           history.push(`/helper-tickets/${res.data.id}`)
         }
         if(res.data.role === 'student'){
          history.push("/tickets")
         }
        })
        .catch( (err) => {
           console.log(err)
        })

        console.log("form submited!!");
        setRegState({
            username: "",
            password: "",
            role: ""
        })
    }

    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(() => {
        regFormSchema.isValid(regState).then((valid) => {
            setButtonDisabled(!valid);
        });
    }, [regState]);

    return(
        <>
        <header>
            <h1>Ready to get some help?</h1>
            <p id="registration-p-tag">Create an account or <Link className="form-links" to="/login" >Login</Link></p>
        </header>
        <form onSubmit={submitForm}>

        <label htmlFor="username"><h4>Choose a UserName</h4>
        {errorRegState.username.length > 0 ? <p className="error-message">{errorRegState.username}</p> : null}
        </label>
        <input name="username" type="text" placeholder="username" onChange={inputChange} value={regState.username}/>

        <label htmlFor="password"><h4>Set a Password</h4>
        {errorRegState.password.length > 0 ? <p className="error-message">{errorRegState.password}</p> : null}
        </label>
        <input type="password" name="password" placeholder="password" onChange={inputChange} value={regState.password}/>

        <label htmlFor="role"><h4>Who needs help?</h4>
        <p className="error-message">{errorRegState.role}</p>
        </label>
        <select name="role" onChange={inputChange} value={regState.role}>
            <option value={null}>*choose an option*</option>
            <option value="helper">I am a Helper</option>
            <option value="student">I am a Student</option>
        </select>

        <button disabled={buttonDisabled} className="form-button" type="submit">Create Account</button>
        </form>
        </>

    )
}

export default Registration;