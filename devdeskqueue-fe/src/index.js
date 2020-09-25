import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";


//REDUX IMPORTS
// import { ticketReducer } from '../src/components/reducers/ticketReducer';
import studentReducer from "./components/reducers/studentReducer"
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

let store = createStore( studentReducer, applyMiddleware(thunk));
// added my reducer here  after importing it

ReactDOM.render(
<Provider store={store}> 
  <Router>
    <App />
  </Router>
</Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

