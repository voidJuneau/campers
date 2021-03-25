import React from "react";
import { Col, Container, Form } from "react-bootstrap";
import ChecklistGroup from "./ChecklistGroup";

const content = {
  "Sleep and Shelter" : ["Tent", "Groundsheet", "Tarp and Cord", "Sleeping pads", "Sleeping bags", "Pillows"],
  "Campsite set-up": ["Camping chairs", "Portable table and tablecloth", "Hammock", "Lanterns", "Cord"],
  "Kitchen and cooking": ["Camp stove and fuel", "Matches and fire starters", "Axe or hatchet", "Pots, pans", "Knife and cutting board", "Mugs and cups", "Plates and bowls", "Cooking utensils", "Cutlery", "Cooler with ice", "Food storage containers", "Aluminum foil", "Water jug", "Garbage bags"],
  "Outdoor essentials": ["Flashlight", "First aid kit", "Water bottle", "Multi-tool", "Bug spray", "Sunscreen", "Sunglasses"],
  "Clothes and shoes": ["Socks", "Underwear", "Sports bra", "Pants", "Cozy layers to sleep in", "Rain jacket", "Rain pants", "Bathing suit", "Gloves", "Sturdy shoes"],
  "Personal stuff": ["Toothbrush and toothpaste", "Toilet paper", "Quick-drying towel", "Earplugs", "Hand sanitizer", "Medications", "Power bank"]
}

const Checklist = () => {
  return (
    <Container className="side-page">
      <h1 className="mb-5">Checklist</h1>
      <Form>
        {Object.entries(content).map(items => (<ChecklistGroup items={items} key={items[0]} />))}
        
      </Form>
    </Container>
  );
}

export default Checklist;