import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const ShoppingCard = ({ shopping, refs, setHoveredPlace }) => {
  
  const handleMouseOver = () => {
    setHoveredPlace(shopping);
    if (refs[shopping.address])
      refs[shopping.address].current.classList.add("hovered-card");
  }
  const handleMouseOut = () => {
    setHoveredPlace();
    if (refs[shopping.address])
      refs[shopping.address].current.classList.remove("hovered-card");
  }

  return (
    <Col xm={12} sm={12} lg={6}>
      <Card ref={refs[shopping.address]} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} >
        <Card.Img variant="top" src={`/images/${shopping.brand}.png`} />
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