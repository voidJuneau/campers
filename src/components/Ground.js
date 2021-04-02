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
    setGround(thisGround);
    setSelectedPlace(thisGround);
    setCenter({lat:parseFloat(thisGround.lat), lng:parseFloat(thisGround.lon)});
    setZoom(11);
  }, [id, grounds, setPlaces, setSelectedPlace, setCenter, setZoom]);
  
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
            <h2>{ground.name}</h2>
            <Image fluid src={ground.img} alt={ground.name} className="mt-5 mb-5" />
            <p className="mb-0"><strong>Address</strong> <br />
              {ground.address}
            </p>
            <Link to={`/grounds/shopping/${ground.id}`} className="w-100">
              <p className="text-right">Near Shopping »</p>
            </Link>
            <p><strong>Telephone</strong> <br />
              {ground.phone}</p>
            <p className="w-100"><strong>Homepage</strong> <br />
              <a href={ground.url} target="_blank" rel="noreferrer">{ground.url}</a>
            </p>
            <p><strong>Rates</strong> <br />
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