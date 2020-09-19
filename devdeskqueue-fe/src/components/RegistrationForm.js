import React, { /*useState*/ } from "react";
import { Link } from "react-router-dom";


const Registration = () => {
    return(
        <>
        <header>
            <h1>Ready to get some help?</h1>
            <p>Create an account or <Link className="form-links" to="/login" >Login</Link></p>
        </header>
        </>

    )
}

export default Registration;