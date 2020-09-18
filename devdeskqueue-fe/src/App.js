import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/HomePage";
import Login from "./components/LoginForm";
import Registration from "./components/RegistrationForm";
import HeaderComp from "./components/Header";
import './App.css';


function App() {
  return (
    <div className="App">
      <HeaderComp />
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
