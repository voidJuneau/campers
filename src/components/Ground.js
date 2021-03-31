import React, { useState, useEffect } from "react";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ToggleMapButton from "./ToggleMapButton";

const Ground = ({ grounds, setPlaces, setSelectedPlace, setCenter, setZoom }) => {
  const [ ground, setGround ] = useState();
  const { id } = useParams();

  useEffect(() => {
    setPlaces(grounds);
    const thisGround = grounds.find(g => g.id === parseInt(id))
    if (!thisGround) return;
    console.log(thisGround)
    setGround(thisGround);
    setSelectedPlace(thisGround);
    setCenter({lat:parseFloat(thisGround.lat), lng:parseFloat(thisGround.lon)});
    setZoom(10);
  }, [id, grounds]);
  
  return (
    <Container className="side-page">
      {ground && 
        <React.Fragment>
          <Row>
            <Col className="d-xs-block d-sm-block d-md-none mb-5 pl-0">
              <ToggleMapButton />
            </Col>
          </Row>
          <Row>
            <h1>{ground.name}</h1>
            <Image fluid src={ground.img} alt={ground.name} className="mt-5 mb-5" />
            <p>Address <br />
              {ground.address}
              <Link to={`/grounds/shopping/${ground.id}`}>
                <Button>Near Shopping</Button>
              </Link>
            </p>
            <p>Telephone <br />
              {ground.phone}</p>
            <p className="w-100">Homepage <br />
              <a href={ground.url} target="_blank">{ground.url}</a>
            </p>
            <p>Rates <br />
              {ground.rate}</p>
          </Row>
          <Row className="justify-content-end mt-5">
            <Link to={`/grounds/edit/${ground.id}`}>
              <Button>Edit</Button>
            </Link>
          </Row>
        </React.Fragment>
      }
    </Container>
  );
}

export default Ground;