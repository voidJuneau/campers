import React, { useEffect } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import GroundCard from "./GroundCard";
import ToggleMapButton from "./ToggleMapButton";
import allGroundMarkers from "../controllers/allGroundMarkers";

const GroundList = ({ grounds, setMarkers, selectedMarker, setSelectedMarker }) => {
  useEffect(() => {
    allGroundMarkers(grounds, setMarkers, selectedMarker, setSelectedMarker);
  }, [grounds, selectedMarker])

  return (
    <Container className="side-page">
      <Row className="justify-content-between">
        <Col className="d-xs-block d-sm-block d-md-none">
          <ToggleMapButton />
        </Col>
        <Col className="d-none d-xl-block"></Col>
        <Col className="d-flex justify-content-end">
          <Button>Add New</Button>
        </Col>
      </Row>
      <Row>
        {grounds.map(g => (
          <GroundCard key={g.id} ground={g} />
        ))}
      </Row>
    </Container>
  );
}

export default GroundList;