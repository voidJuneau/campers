import React from "react";
import Button from "react-bootstrap/Button";

const ToggleMapButton = ({ className }) => {
  const mapContainer = document.getElementById("map-container");
  const sidePage = document.getElementsByClassName("side-page")[0];
  
  const showMap = () => {
    mapContainer.classList.toggle("d-none");
    mapContainer.classList.toggle("d-md-block");
    mapContainer.classList.toggle("side-map");
    sidePage.classList.toggle("d-none");
    sidePage.classList.toggle("d-md-block");
  }

  return (
    <Button onClick={showMap}
      className={className + " d-xs-block d-sm-block d-md-none "}>
      {className === "map-button" ? "Hide Map" : "See on Map"}
    </Button>
    );
}

export default ToggleMapButton;