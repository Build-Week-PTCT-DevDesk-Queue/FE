import React from "react";
import {Link} from "react-router-dom";
export default function HeaderComp() {
return (
    <header id="home-page-header">
            <Link className="link" to="/"><h3>/HelpDesk</h3></Link>
            <nav>
                <Link className="link" to="/login" >Login</Link>
                <Link className="link" to="/registration" >New here? Register</Link>
            </nav>
    </header>
)
}