import React, { useState } from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";
import { Link } from "react-router-dom";

const GroundMarker = ({ ground, selectedPlace, setSelectedPlace }) => {
  const position={lat: parseFloat(ground.lat), lng: parseFloat(ground.lon)}
  const [ isShown, setIsShown ] = useState(false)
  const handleMouseOver = () => {
    setIsShown(true);
  }
  const handleMouseOut = () => {
    setIsShown(false);
  }
  const handleClick = () => {
    setSelectedPlace(ground);
  }

  return (
    <Marker position={position}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      >
      {(isShown || selectedPlace && selectedPlace.name === ground.name) && (
        <InfoWindow>
          <div>
            <p>{ground.name}</p>
            <p><Link to={`/ground/${ground.id}`}>See in detail »</Link></p>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default GroundMarker;