import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Redirect, useParams } from "react-router";

import GroundForm from "./GroundForm";
import Api from "../utils/api"

const EditGround = ({ grounds, setGrounds }) => {
  const { id } = useParams();
  const [ edited, setEdited ] = useState();
  const [ ground, setGround ] = useState();
  useEffect(() => {
    setGround(grounds.find(g => g.id === parseInt(id)));
  }, [grounds, id])
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
      <h2 className="mb-5 text-center"> Edit </h2>
      <GroundForm ground={ground} buttonText="Submit" onSubmit={handleSubmit} />
    </Container>
  )
}

export default EditGround;