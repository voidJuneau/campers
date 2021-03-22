import React from "react";
import { Container } from "react-bootstrap";

import GroundForm from "./GroundForm";
import api from "../utils/api"

const AddGround = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const entry = {
      name:document.getElementById("formName").value,
      address:document.getElementById("formAddress").value,
      lat:document.getElementById("formLat").value,
      lon:document.getElementById("formLon").value,
      phone:document.getElementById("formPhone").value,
      url:document.getElementById("formUrl").value,
      img:document.getElementById("formImg").value,
      rate:document.getElementById("formRate").value
    }
    api.new(entry)
    .then(res => {
      const id = res.data;
    })
    .catch(res => console.log("fail", res))
  }
  
  return (
    <Container className="side-page">
      <div>
        <h1>Add a New Campground </h1>
        <GroundForm buttonText="Submit" onSubmit={handleSubmit} />
      </div>
    </Container>
  )
}

export default AddGround;