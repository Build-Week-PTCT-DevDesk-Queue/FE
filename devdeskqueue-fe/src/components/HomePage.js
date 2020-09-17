import React from "react";
import { useHistory } from "react-router-dom";


const Home = () => {
    const history = useHistory();
    //console.log("history: ", history);
    const navToLoginForm = (e) => {
        history.push('/login');
    }
    return(
        <>
            <button className="home-page-button" onClick={navToLoginForm}>Get Started</button>
        </>
    )
}
export default Home;