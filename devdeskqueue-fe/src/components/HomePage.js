import React from "react";
import { useHistory } from "react-router-dom";
import image from "../safe.jpg";

const Home = () => {
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
            <button className="home-page-button" onClick={navToLoginForm}>Get Started</button>
        </>
    )
}
export default Home;