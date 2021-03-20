import React, { useState } from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";

const GroundMarker = ({ ground, selectedMarker, setSelectedMarker }) => {
  const position={lat: parseFloat(ground.lat), lng: parseFloat(ground.lon)}
  const [ isShown, setIsShown ] = useState(false)
  const handleMouseOver = () => {
    setIsShown(true);
  }
  const handleMouseOut = () => {
    setIsShown(false);
  }
  const handleClick = () => {
    setSelectedMarker(ground);
  }

  return (
    <Marker position={position}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      >
      {(isShown || selectedMarker && selectedMarker.name === ground.name) && (
        <InfoWindow>
          <div>{ground.name}</div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default GroundMarker;