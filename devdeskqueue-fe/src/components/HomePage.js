import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./LoginForm";
import Registration from "./RegistrationForm";


const Home = () => {
    return(
        <>
        <header id="home-page">
            <img alt="logo" />
            <nav>
                <Link className="link" to="/login" >Login</Link>
                <Link className="link" to="/registration" >New here? Register</Link>
            </nav>
        </header>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/registration">
                <Registration />
            </Route>
        </Switch>
      </>
    )
}
export default Home;