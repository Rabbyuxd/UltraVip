import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import { Form,Navbar,Container,Modal,Button} from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";

const Mod = ()=>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="modalButton" variant="primary" onClick={handleShow}>
        Request to Reset Password
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="modalTitle">Request For User Password</div>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="" controlId="formUserID">
    <Form.Label>User ID</Form.Label>
    <Form.Control type="text" placeholder="Enter user id" />
  </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Mod;
