import "./App.css";

import React, { useState, useEffect } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import { Marker } from "@react-google-maps/api";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Api from "./utils/api";
import AllGroundMarkers from "./controllers/allGroundMarkers";
import Map from "./components/Map";
import Main from "./components/Main";
import GroundList from "./components/GroundList";
import Ground from "./components/Ground";

const App = () => {
  const [center, setCenter] = useState({lat: 43.2464343, lng: -79.8618984});
  const [grounds, setGrounds] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState();
  
  useEffect(() => {
    console.log(selectedMarker);
  }, [selectedMarker])
  
  useEffect(() => {
    Api.all("ground").then(data => setGrounds(data));
  }, [])

  useEffect(() => {
    AllGroundMarkers(grounds, setMarkers, selectedMarker, setSelectedMarker);
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
                  <GroundList grounds={grounds} setMarkers={setMarkers}
                    selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker}/>
                </Route>
                <Route path="/ground/:id">
                  <Ground grounds={grounds} setMarkers={setMarkers} 
                    setSelectedMarker={setSelectedMarker}
                  />
                </Route>
                <Route path="/">
                  <Main grounds={grounds} setMarkers={setMarkers}
                    selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker}/>
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
