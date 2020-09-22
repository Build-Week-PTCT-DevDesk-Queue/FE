import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/HomePage";
import Login from "./components/LoginForm";
/*TEMP*/ import HelperTickets from '../src/components/helper_tickets'
/*TEMP*/ import HelperAssigned from '../src/components/helper_assigned'
/*TEMP*/ import HelperResolved from '../src/components/helper_resolved'
/*TEMP*/ import TicketForm from '../src/components/TicketForm'
import PrivateRoute from './utils/PrivateRoute'
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
                <Link className="link" to="/helper-tickets" >*helper</Link>
                <Link className="link" to="/ticket-form" >*form</Link>
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
            <PrivateRoute path="/helper-tickets/:id" component={HelperTickets} /> 
            {/* <Route path="/helper-tickets/:id">
                <HelperTickets />
            </Route> */}
            <PrivateRoute path="/assigned-tickets/:id" component={HelperAssigned} /> 
            {/* <Route path="/assigned-tickets/:id">
                <HelperAssigned />
            </Route> */}
            <PrivateRoute path="/resolved-tickets/:id" component={HelperResolved} /> 
            {/* <Route path="/resolved-tickets/:id">
                <HelperResolved />
            </Route> */}
            <Route path="/ticket-form">
                <TicketForm />
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
