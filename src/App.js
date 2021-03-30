import "./App.css";

import React, { useState, useEffect } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Map from "./components/Map";
import Main from "./components/Main";
import GroundList from "./components/GroundList";
import Ground from "./components/Ground";
import AddGround from "./components/AddGround";
import EditGround from "./components/EditGround";
import ShoppingList from "./components/ShoppingList";
import Checklist from "./components/Checklist";
import Api from "./utils/api";

const App = () => {
  const [center, setCenter] = useState({lat: 43.2464343, lng: -79.8618984});
  const [zoom, setZoom] = useState(9);
  const [grounds, setGrounds] = useState([]);
  const [shoppings, setShoppings] = useState([]);
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState();
  const [hoveredPlace, setHoveredPlace] = useState();
  const [refs, setRefs] = useState({});
  
  useEffect(() => {
    Api.all("ground").then(data => setGrounds(data));
    Api.all("shopping").then(data => setShoppings(data));
  }, [])

  useEffect(() => {
    const newRefs = places.reduce((acc, p) => {
      acc[p.address] = React.createRef();
      return acc;
    }, {});
    setRefs(newRefs);
  }, [places]);
  
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
                <Route exact path="/grounds">
                  <GroundList grounds={grounds} setPlaces={setPlaces} />
                </Route>
                <Route path="/grounds/new">
                  <AddGround setGrounds={setGrounds} />
                </Route>
                <Route path="/grounds/edit/:id">
                  <EditGround grounds={grounds} setGrounds={setGrounds} />
                </Route>
                <Route path="/grounds/:id">
                  <Ground grounds={grounds} setPlaces={setPlaces} setSelectedPlace={setSelectedPlace}
                    setCenter={setCenter} setZoom={setZoom}
                  />
                </Route>
                <Route exact path="/shopping">
                  <ShoppingList shoppings={shoppings} setPlaces={setPlaces} 
                    refs={refs} setHoveredPlace={setHoveredPlace} />
                </Route>
                <Route path="/checklist">
                  <Checklist />
                </Route>
                <Route path="/">
                  <Main grounds={grounds} setPlaces={setPlaces} />
                </Route>
              </Switch>
            </Col>
            <Col id="map-col" md={7} className="main-col">
              <Map center={center} zoom={zoom} places={places}
                selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} 
                refs={refs} hoveredPlace={hoveredPlace} />
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
