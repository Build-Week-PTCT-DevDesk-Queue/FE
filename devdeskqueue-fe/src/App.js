import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/HomePage";
import Login from "./components/LoginForm";
import Registration from "./components/RegistrationForm";
import HeaderComp from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

import HelperTickets from '../src/components/helper_tickets'
import HelperAssigned from '../src/components/helper_assigned'
import HelperResolved from '../src/components/helper_resolved'
import TicketForm from '../src/components/TicketForm'
import PrivateRoute from './utils/PrivateRoute'
import { login } from './components/actions/studentAction';
import Student from './components/students/Student'


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
            <PrivateRoute path ="/form" component={TicketForm} />
            <PrivateRoute path = "/tickets" component={Student} />
            {/* HELPER PAGES */}
            <PrivateRoute path="/helper-tickets/:id" component={HelperTickets} /> 
            <PrivateRoute path="/assigned-tickets/:id" component={HelperAssigned} /> 
            <PrivateRoute path="/resolved-tickets/:id" component={HelperResolved} /> 
            <Route path="/">

              <Home />
            </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
