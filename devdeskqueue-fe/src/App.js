import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img alt="logo" />
        <nav>
          <Link>Login</Link>
          <Link>New here? Register</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
