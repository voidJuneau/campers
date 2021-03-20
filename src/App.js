import "./App.css";

import React, { useState, useEffect } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import { Marker } from "@react-google-maps/api";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Api from "./utils/api";
import allGroundMarkers from "./controllers/allGroundMarkers";
import Map from "./components/Map";
import Main from "./components/Main";
import GroundList from "./components/GroundList";
import Ground from "./components/Ground";

const App = () => {
  const [center, setCenter] = useState({lat: 43.2464343, lng: -79.8618984});
  const [grounds, setGrounds] = useState([]);
  const [markers, setMarkers] = useState([]);
  
  useEffect(() => {
    Api.all("ground").then(data => setGrounds(data));
  }, [])

  useEffect(() => {
    allGroundMarkers(grounds, setMarkers);
  }, [grounds]);
  
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
          <Navbar.Brand href="/">
            <img src="/images/logo.svg" alt="Site logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/grounds/">Campgrounds</Nav.Link>
              <Nav.Link href="/shopping/">Shopping</Nav.Link>
              <Nav.Link href="/checklist/">Checklist</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="main-container">
          <Row>
            <Col id="page-col" sm={12} md={5} className="main-col">
              <Switch>
                <Route path="/grounds">
                  <GroundList grounds={grounds} setMarkers={setMarkers} />
                </Route>
                <Route path="/ground/:id">
                  <Ground grounds={grounds} setMarkers={setMarkers} />
                </Route>
                <Route path="/">
                  <Main />
                </Route>
              </Switch>
            </Col>
            <Col id="map-col" md={7} className="main-col">
              <Map center={center} markers={markers} />
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
