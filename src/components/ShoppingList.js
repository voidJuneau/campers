import React, { useEffect } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import ShoppingCard from "./ShoppingCard";
import ToggleMapButton from "./ToggleMapButton";
import { Link } from "react-router-dom";

const ShoppingList = ({ shoppings, setPlaces }) => {
  useEffect(() => {
    setPlaces(shoppings);
  }, [shoppings])

  return (
    <Container className="side-page">
      <Row className="justify-content-between">
        <Col className="d-xs-block d-sm-block d-md-none">
          <ToggleMapButton />
        </Col>
      </Row>
      <Row>
        {shoppings.map(g => (
          <ShoppingCard key={g.id} ground={g} />
        ))}
      </Row>
    </Container>
  );
}

export default ShoppingList;