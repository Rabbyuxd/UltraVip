import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import { Form,Navbar,Container,Modal,Button} from 'react-bootstrap';
import Profile from "./Profile";

import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";

const ChangePassword = (props)=>{

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const[edit, setedit] = useState([]);
  //const[username,setUsername] = useState({...props.item.username});
  //const[token,setToken] = useState({...props.item.token});
  const[password,setPassword] =useState("");
  // const[email,setEmail] =useState(props.user.email);
  // const[department,setDepartment] =useState(props.user.department);
  // console.log(props.user.fullname);
  console.log(props.item);
  //let items=(props.item);
    //const[token, setToken] = useState("");
    //console.log(props.name);
    //token="TRhhaT3rblNvU2BnwNCbVFP5VBOEPNi6MnZU4wS1CRrqjRIciVvF03KEItNRcmqjV3pX4NnIX41YhVXvIp9Kfs4Ads22IQlS0bXz0BgEiUETu7uMMd8n3I5EeCudNzvB";
     
     let item={username:props.item.username, token:props.item.token, password:password};
    console.log(item);
      //let item = {username:"Kamal",token:"IQgrWG0lfUMF9moIBUSdbb62s2bWp6QsMJrcCk6BeiXS2w6UjuzBJZcfeGPtmT4Z2bbnLi9e3YzuLb6EYmaXbffW17zqr2MSx5314u0QIgmZNCIRiY5xZiQ005HWhUx8"};
      async function update(){
    let result = await fetch("http://bddev.ultra-x.jp/vipnoteApi/change_password",{
      method :'POST',
      headers :{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)

    });
    result= await result.json();
    //setUser(result);
    console.log(result);
    localStorage.setItem('user-info',JSON.stringify(result));
    setShow(false);
    alert("successfully Updated !!!");
    window.location.href="/Profile";
    //window.location.reload();
}
useEffect(() => {
   setPassword(password);
   
  }, [password]);

  return (
    <div>
      <Button className="cpButton" variant="primary" onClick={handleShow}>
        Change Password
      </Button>

      <Modal show={show} onHide={handleClose}  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header className="modal-header"closeButton>
          <Modal.Title className="modal-title">Change User Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="" controlId="formFullname">
    <Form.Label className="modal-label">New Password</Form.Label>
    <Form.Control className="modal-text" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder={password} />
  </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-button" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="modal-button" variant="primary" onClick={update}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChangePassword;