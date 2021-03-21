import React, { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";

const Main = ({ grounds, setPlaces }) => {
  useEffect(() => {
    setPlaces(grounds);
  }, [grounds])
  
  return (
    <div className="side-page">
      <Row>
        <Col>
          <div id="main-wraper">
            <Image fluid src="/images/undraw_campfire.svg" 
              alt="campfire ilistration" id="main-image" />
              <p id="main-overay-text">
                Planning for exiting summer?<br />
                &emsp;We can help you
              </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Main;