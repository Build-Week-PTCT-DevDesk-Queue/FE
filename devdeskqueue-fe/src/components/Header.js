import React from "react";
import {Link} from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { hinge } from "react-animations";

const animation = keyframes`${hinge}`;
const AnimatedH1 = styled.h1`
animation: 4s ${animation};
font-family: 'Grandstander', cursive;
`


export default function HeaderComp() {
return (
    <header id="home-page-header">
            <Link className="link" to="/"><AnimatedH1>/HelpDesk</AnimatedH1></Link>
            <nav>
                <Link className="link" to="/login" >Login</Link>
                <Link className="link" to="/registration" >New here? Register</Link>
                <Link className="link" to="/">Log out</Link>
            </nav>
    </header>
)
}