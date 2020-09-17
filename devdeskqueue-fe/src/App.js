import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/HomePage";
import Login from "./components/LoginForm";
import Registration from "./components/RegistrationForm";
import image from "./safe.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="home-page-header">
            <Link className="link" to="/"><h3>/HelpDesk</h3></Link>
            <nav>
                <Link className="link" to="/login" >Login</Link>
                <Link className="link" to="/registration" >New here? Register</Link>
            </nav>
        </header>
        <div className="image-container">
            <img alt="pool-raft" src={image} />
            <div className="center-text"><h1>The app that makes it easy for you to get information about any school issues you might encounter!</h1></div>
        </div>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/registration">
                <Registration />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
