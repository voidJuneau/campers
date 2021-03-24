import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Redirect, useParams } from "react-router";

import GroundForm from "./GroundForm";
import Api from "../utils/Api"

const EditGround = ({ grounds, setGrounds }) => {
  const { id } = useParams();
  const [ edited, setEdited ] = useState();
  const [ ground, setGround ] = useState();
  useEffect(() => {
    setGround(grounds.find(g => g.id === parseInt(id)));
  }, [])
  const handleSubmit = (event, content) => {
    event.preventDefault();
    Api.edit(content, id)
    .then(async res => {
      await Api.all("ground").then(data => setGrounds(data));
      setEdited(true);
      console.log(res)
    })
    .catch(res => console.log("fail", res))
  }
  
  return (
    <Container className="side-page">
      {edited && <Redirect to={`/grounds/${id}`} />}
      <div>
        <h1> Edit </h1>
        <GroundForm ground={ground} buttonText="Submit" onSubmit={handleSubmit} />
      </div>
    </Container>
  )
}

export default EditGround;