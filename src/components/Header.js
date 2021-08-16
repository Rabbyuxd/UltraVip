
import React from "react";
import { Router, Switch, Route, Link,useHistory } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Container,Button } from 'react-bootstrap';
import { useState,useEffect,useRef,Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";

const Header = ()=>{
	let user = JSON.parse(localStorage.getItem('user-info'))
	const history=useHistory();
	const[logout,setLogout] = useState(false);
	function Logout(){
		localStorage.clear();
		history.push("/Login");
		window.location.reload();
		
	}
	return(
		<div className="App">
		<div className="Container">
          <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
               VIP Note  
              </li>

              {localStorage.getItem('user-info')?
              <li className="nav-logout">
              <Button className="logoutButton" onClick={Logout}>Logout</Button>
              </li>
              :null
          }     
            </ul>    
          </div>    
        </nav>
        </div>
         
      </div>

		);
};
export default Header;