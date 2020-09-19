import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/HomePage";
import Login from "./components/LoginForm";
/*TEMP*/ import HelperTickets from '../src/components/helper_tickets'
/*TEMP*/ import HelperAssigned from '../src/components/helper_assigned'
/*TEMP*/ import HelperResolved from '../src/components/helper_resolved'
import Registration from "./components/RegistrationForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="home-page-header">
            <Link className="link" to="/"><h3>/HelpDesk</h3></Link>
            <nav>
                <Link className="link" to="/login" >Login</Link>
                <Link className="link" to="/registration" >New here? Register</Link>
                <Link className="link" to="/helper-tickets" >temp- delete this</Link>
            </nav>
        </header>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/registration">
                <Registration />
            </Route>

            {/* MIKES TEMPORARY ROUTING - REMOVE BEFORE MERGING */}
            <Route path="/helper-tickets">
                <HelperTickets />
            </Route>
            <Route path="/assigned-tickets">
                <HelperAssigned />
            </Route>
            <Route path="/resolved-tickets">
                <HelperResolved />
            </Route>
            {/* MIKES TEMPORARY ROUTING - REMOVE BEFORE MERGING */}

            <Route path="/">
              <Home />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
