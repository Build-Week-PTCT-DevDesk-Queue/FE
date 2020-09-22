import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/HomePage";
import Login from "./components/LoginForm";
import Registration from "./components/RegistrationForm";
import HeaderComp from "./components/Header";
import Footer from "./components/Footer";
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
        <Footer />
    </div>
  );
}

export default App;
