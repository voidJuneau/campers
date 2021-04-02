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
      {(isShown || (selectedPlace && selectedPlace.address === ground.address)) && (
        <InfoWindow position={position}>
          <div>
            <h6>{ground.name}</h6>
            <p className="mb-0 text-right"><Link to={`/grounds/${ground.id}`}>See in detail »</Link></p>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default GroundMarker;