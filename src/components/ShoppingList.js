import React, { useEffect } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import ShoppingCard from "./ShoppingCard";
import ToggleMapButton from "./ToggleMapButton";

const ShoppingList = ({ shoppings, setPlaces, refs }) => {
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
        {shoppings.map(s => (
          <ShoppingCard key={s.id} shopping={s} refs={refs} />
        ))}
      </Row>
    </Container>
  );
}

export default ShoppingList;