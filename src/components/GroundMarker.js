import React, { useState } from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";
import { Link } from "react-router-dom";

import groundMarker from "../images/groundMarker.svg";
import groundMarkerHighlight from "../images/groundMarkerHighlight.svg";

const GroundMarker = ({ ground, selectedPlace, setSelectedPlace, refs, hoveredPlace }) => {
  const position={lat: parseFloat(ground.lat), lng: parseFloat(ground.lon)}
  const [ isShown, setIsShown ] = useState(false)
  const handleMouseOver = () => {
    setIsShown(true);
    if (refs[ground.address] && refs[ground.address].current) {
      refs[ground.address].current.scrollIntoView();
      refs[ground.address].current.classList.add("hovered-card");
    }
  }
  const handleMouseOut = () => {
    setIsShown(false);
    if (refs[ground.address] && refs[ground.address].current)
      refs[ground.address].current.classList.remove("hovered-card");
  }
  const handleClick = () => {
    setSelectedPlace(ground);
  }

  return (
    <Marker position={position}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      icon={{url: ((ground === selectedPlace || 
        (hoveredPlace && hoveredPlace.address === ground.address)) ? 
        groundMarkerHighlight : groundMarker)}}
      >
      {(isShown || (selectedPlace && selectedPlace.address === ground.address) ||
        (hoveredPlace && hoveredPlace.address === ground.address)) && (
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