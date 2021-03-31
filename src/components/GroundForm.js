import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const GroundForm = ({ ground, buttonText, onSubmit }) => {
  const [ content, setContent ] = useState({name: "", 
                                            address: "",
                                            lat: "", 
                                            lon: "",
                                            phone: "",
                                            url: "",
                                            img: "",
                                            rate: ""});
  useEffect(() => {
    if (ground) {
      setContent(ground);
    }
  }, [ground]);

  const handleChange = event => {
    const attribute = event.target.id.substring(4).toLowerCase() // trim "From"
    const newContent = {...content}
    newContent[attribute] = event.target.value;
    setContent(newContent);
  }

  const handleSubmit = event => {
    onSubmit(event, content);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="A Campground" 
          value={content.name} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="123 Street St, Hamilton, ON, A1A 1A1" 
          value={content.address} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formLat">
        <Form.Label>Latitude</Form.Label>
        <Form.Control type="number" placeholder="40.000000" 
          value={content.lat} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formLon">
        <Form.Label>Longitude</Form.Label>
        <Form.Control type="number" placeholder="-80.000000" 
          value={content.lon} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="text" placeholder="(905)-000-0000" 
          value={content.phone} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formUrl">
        <Form.Label>Homepage</Form.Label>
        <Form.Control type="text" placeholder="http://www.google.com/" 
          value={content.url} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formImg">
        <Form.Label>Featured photo URL</Form.Label>
        <Form.Control type="text" placeholder="http://www.google.com/logo.png" 
          value={content.img} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formRate">
        <Form.Label>Rates</Form.Label>
        <Form.Control type="text" as="textarea" value={ground && ground.rate}
          onChange={handleChange} />
      </Form.Group>
      <Button type="submit">{buttonText}</Button>
    </Form>
  )
}

export default GroundForm;