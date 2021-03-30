import React, { useEffect, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const ShoppingCard = ({ shopping, refs }) => {
  

  return (
    <Col xm={12} sm={12} lg={6}>
      <Card ref={refs[shopping.address]}>
        <Card.Img variant="top" src={shopping.img} />
        <Card.Body>
          <Card.Title>{shopping.name}</Card.Title>
          <Card.Text>
            {shopping.address.substring(0, shopping.address.indexOf(", "))}<br/>
            {shopping.address.substring(shopping.address.indexOf(", ")+2)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ShoppingCard;