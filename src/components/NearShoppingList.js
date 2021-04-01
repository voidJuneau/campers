import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ShoppingCard from "./ShoppingCard";
import ToggleMapButton from "./ToggleMapButton";
import distance from "../utils/distance";

const NearShoppingList = ({ shoppings, grounds, 
                            setPlaces, setSelectedPlace, setHoveredPlace, 
                            refs, setZoom, setCenter }) => {
  const { id } = useParams();
  const [ nearPlaces, setNearPlaces ] = useState([]);
  
  useEffect(() => {
    const ground = grounds.find(g => g.id === parseInt(id))
    if (!ground) return;
    setZoom(11);
    setCenter({lat: parseFloat(ground.lat), lng: parseFloat(ground.lon)});
    // Select shopping places within 7 miles
    const newPlaces = shoppings.filter(s => 
      distance(s.lat, s.lon, ground.lat, ground.lon) < 7);
    setNearPlaces([...newPlaces]);
    newPlaces.push(ground);
    setSelectedPlace(ground);
    setPlaces(newPlaces);
  }, [shoppings, grounds, id, setPlaces, setCenter, setSelectedPlace, setZoom])

  return (
    <Container className="side-page">
      <Row className="justify-content-between">
        <Col className="d-xs-block d-sm-block d-md-none">
          <ToggleMapButton />
        </Col>
      </Row>
      <Row>
        {nearPlaces.map(s => (
          <ShoppingCard key={s.id} shopping={s} refs={refs} setHoveredPlace={setHoveredPlace} />
        ))}
      </Row>
    </Container>
  );
}

export default NearShoppingList;