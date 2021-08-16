import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import { Navbar,Container,Modal,Button} from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mod from "./components/Mod";
import Profile from "./components/Profile";


 const App = ()=>{
    return(
    	<Router>
      <div>
      <Header/>
      
      <Switch>
          <Route exact path="/Login">
            <Login/>
      
          </Route>
          <Route exact path="/Profile">
            <Profile/>
          </Route>
         
        </Switch>
      <Footer/>
      </div>
      </Router>
    );
  };


export default App;
