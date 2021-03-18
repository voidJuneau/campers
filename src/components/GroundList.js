import React, { useEffect } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { Marker } from "@react-google-maps/api";

import Ground from "./Ground";

function GroundList(props) {
  useEffect(() => {
    const allGoundMarker = props.grounds.map(g => (
      <Marker key={g.id}
      position={{lat: parseFloat(g.lat), lng: parseFloat(g.lon)}} 

      />))
    props.setMarkers(allGoundMarker)
  }, [props.grounds]);
  
  return (
    <Container className="GroundList side-page">
      <Row className="justify-content-between">
        <Col className="d-xs-block d-sm-block d-md-none">
          <Button>See on Map</Button>
        </Col>
        <Col className="d-none d-xl-block"></Col>
        <Col className="d-flex justify-content-end">
          <Button>Add New</Button>
        </Col>
      </Row>
      <Row>
        {props.grounds.map(g => (
          <Ground key={g.id} ground={g} />
        ))}
      </Row>
    </Container>
  );
}

export default GroundList;