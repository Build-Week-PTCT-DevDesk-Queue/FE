import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import image from "../safe.jpg";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
// import dummyDataAdela from "../dummyDataAdela";
// import TicketCard from "./TicketCard";

const bounceAnimation = keyframes`${bounce}`;
const BouncyButton = styled.button`
animation: 4s ${bounceAnimation};
`


const Home = () => {
    // const [data, setData] = useState(dummyDataAdela);

    const history = useHistory();
    //console.log("history: ", history);
    const navToLoginForm = (e) => {
        history.push('/login');
    }
    return(
        <>
        <div className="image-container">
            <img alt="pool-raft" src={image} />
            <div className="center-text"><h1>The app that makes it easy for you to get information about any school issues you might encounter!</h1></div>
        </div>
            <BouncyButton className="home-page-button" onClick={navToLoginForm}>Get Started</BouncyButton>
            {/* <TicketCard data={data} /> */}
        </>
    )
}
export default Home;