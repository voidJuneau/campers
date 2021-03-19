import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Ground = ({ ground }) => {
  return (
    <Col xm={12} sm={12} lg={6}>
      <Card>
        <Card.Img variant="top" src={ground.img} />
        <Card.Body>
          <Card.Title>{ground.name}</Card.Title>
          <Card.Text>See in detail »</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Ground;