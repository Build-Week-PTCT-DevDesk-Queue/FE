import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
font-size: 200%;
margin-bottom: 2rem;
margin-top: 2rem;
`;
const StyledSpan = styled.span`
font-family: 'Grandstander', cursive;
color: black;
`;

export default function Footer() {
    return(
        <StyledFooter>
        &copy; Copyright 2020 <StyledSpan>/HelpDesk</StyledSpan>
        </StyledFooter>
    )
}