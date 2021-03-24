import React, { useState } from "react";
import { Container } from "react-bootstrap";

import GroundForm from "./GroundForm";
import Api from "../utils/Api"
import { Redirect } from "react-router";

const AddGround = ({ setGrounds }) => {
  const [id, setId] = useState();
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
    Api.new(entry)
    .then(async res => {
      await Api.all("ground").then(data => setGrounds(data));
      setId(res.data);
    })
    .catch(res => console.log("fail", res))
  }
  
  return (
    <Container className="side-page">
      {id && <Redirect to={`/grounds/${id}`} />}
      <div>
        <h1>Add a New Campground </h1>
        <GroundForm buttonText="Submit" onSubmit={handleSubmit} />
      </div>
    </Container>
  )
}

export default AddGround;