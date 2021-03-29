import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const GroundCard = ({ ground }) => {

  return (
    <Col xm={12} sm={12} lg={6}>
      <Link to={`/grounds/${ground.id}`}>
        <Card>
          <Card.Img variant="top" src={ground.img} />
          <Card.Body>
            <Card.Title>{ground.name}</Card.Title>
            <Card.Text>See in detail »</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default GroundCard;