import React, { useEffect } from "react";
import { Card, Col, Form } from "react-bootstrap";

const ChecklistGroup = ({ items }) => {
  useEffect(() => {
    const pageCol = document.getElementById("page-col");
    pageCol.classList.remove("col-md-5")
    const mapCol = document.getElementById("map-col");
    mapCol.classList.add("d-none")
  }, [])

  return (
    <div>
    <Card className="mb-5">
      <Card.Header>{items[0]}</Card.Header>
      <Card.Body className="pb-1">
        <Form.Row>
            {items[1].map(i => (
              <Form.Group as={Col} className="col-12 col-sm-6 col-lg-4" key={i}>
                <Form.Check type="checkbox" label={i} key={i} />
              </Form.Group>))}
        </Form.Row>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ChecklistGroup;