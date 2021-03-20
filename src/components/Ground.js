import React, { useState, useEffect } from "react";
import { Button, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Ground = ({ grounds, setMarkers }) => {
  const [ ground, setGround ] = useState();
  const { id } = useParams();

  useEffect(() => {
    setGround(grounds.find(g => g.id == id));
    console.log(ground)
  }, [grounds]);
  
  return (
    <Container className="side-page">
      {ground && 
        <React.Fragment>
          <h1>{ground.name}</h1>
          <Image fluid src={ground.img} alt={ground.name} className="mt-5 mb-5" />
          <p>Address <br />
            {ground.address}</p>
          <p>Telephone <br />
            {ground.phone}</p>
          <p>Homepage <br />
            <Link to={ground.url}>{ground.url}</Link></p>
          <p>Rates <br />
            {ground.rate}</p>
          <Row className="justify-content-end mt-5">
            <Button>Edit</Button>
          </Row>
        </React.Fragment>
      }
    </Container>
  );
}

export default Ground;