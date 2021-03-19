import './App.css';

import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Marker } from "@react-google-maps/api";

import GroundList from './components/GroundList';
import Map from './components/Map';
import Api from './utils/api';

const App = () => {
  const [center, setCenter] = useState({lat: 43.2464343,
                                        lng: -79.8618984});

  const [grounds, setGrounds] = useState([]);

  const [markers, setMarkers] = useState([(
                                            <Marker position={center} />),
                                            (<Marker position={{lat: 43.2376723,
                                        lng: -79.8859504}} />
    )])
  
  useEffect(() => {
    Api.all("ground").then(data => setGrounds(data));
  }, [])

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <Navbar.Brand href="#home">
          <img src="/image/logo.svg" alt="Site logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Campgrounds</Nav.Link>
            <Nav.Link href="#link">Shopping</Nav.Link>
            <Nav.Link href="#link">Checklist</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="main-container">
        <Row>
          <Col sm={12} md={5} className="main-col">
          {/* <Col className="main-col"> */}
            <GroundList grounds={grounds} setMarkers={setMarkers} />
          </Col>
          <Col md={7} className="main-col">
            <Map center={center} markers={markers} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
