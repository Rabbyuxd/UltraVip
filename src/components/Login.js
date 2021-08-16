import React, { useState,useEffect,useRef,Component } from "react";
import {Form,Button} from "react-bootstrap";
import { Redirect, useHistory,Link } from 'react-router-dom';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";


const Login = ()=>{
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[output,setOutput] = useState("");
  //console.log("rabby");
  const history = useHistory();
  useEffect(() => {
    if(localStorage.getItem('user-info'))
    {
      history.push("/Profile");
    }
    else
    {
      history.push("/Login");

    }

  }, [])
  
  async function login(e){
    e.preventDefault();
     let item = {username,password};
    let result = await fetch("http://bddev.ultra-x.jp/vipnoteApi/get_token",{
      method :'POST',
      headers :{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)

    });
    result= await result.json();
    localStorage.setItem('user-info',JSON.stringify(result));
    console.log(result.SUCCESSFUL);
    setOutput(result);
    if(result.SUCCESSFUL===true)
    {
    history.push({
  pathname: '/Profile',
  //state: result.token,
  state:{ 'username': username, 'token': result.token }
});
  }
  else
  {
    alert("UnAuthenticated User !!! \nPlease give currect username and password");
  }
  
  


  //   axios.post('http://bddev.ultra-x.jp/vipnoteApi/get_token', {
  //   item
  // })
  // .then(function (response) {
  //   history.push("/Profile");
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
    
  }

  return(
 
<div>

<Form>
  
  <Form.Group className="mb-3" controlId="formUserName">
  <h1 className="logintitle">Login</h1>
  <hr/>
    <Form.Label>User Name</Form.Label>
    <Form.Control className="formtext" type="text" placeholder="Enter user name" onChange={(e)=>setUsername(e.target.value)} required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formLoginPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control className="formtext" type="password" placeholder="Enter user Password" onChange={(e)=>setPassword(e.target.value)} required/>
  </Form.Group>
  <Button className="loginButton" onClick={login} variant="primary" type="submit">
    Login
  </Button>
</Form>
</div>
);
};

export default Login;