import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import {  BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import { AdminProvider } from './context/AdminContext';


ReactDOM.render(
  <React.StrictMode>
     <Router>
       <AdminProvider> <UserProvider><App /></UserProvider></AdminProvider>
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


