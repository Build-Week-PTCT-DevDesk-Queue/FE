import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";


//REDUX IMPORTS
import { ticketReducer } from './reducers/ticketReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

let store = createStore( ticketReducer, applyMiddleware(thunk));

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

