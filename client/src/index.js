import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import {  BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from './context/UserContext';


ReactDOM.render(
  <React.StrictMode>
     <Router>
       <UserProvider><App /></UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


