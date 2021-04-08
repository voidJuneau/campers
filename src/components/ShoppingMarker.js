import React, { useState } from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";

import shoppingMarker from "../images/shoppingMarker.svg"
import shoppingMarkerHighlight from "../images/shoppingMarkerHighlight.svg"

const ShoppingMarker = ({ shopping, refs, hoveredPlace }) => {
  const position={lat: parseFloat(shopping.lat), lng: parseFloat(shopping.lon)}
  const [ isShown, setIsShown ] = useState(false)
  const handleMouseOver = () => {
    setIsShown(true);
    if (refs[shopping.address]) {
      refs[shopping.address].current.scrollIntoView();
      refs[shopping.address].current.classList.add("hovered-card");
    }
  }
  const handleMouseOut = () => {
    setIsShown(false);
    if (refs[shopping.address])
      refs[shopping.address].current.classList.remove("hovered-card");
  }

  return (
    <Marker position={position}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      icon={{url: ((isShown || shopping === hoveredPlace) 
        ? shoppingMarkerHighlight : shoppingMarker)}}
      >
      {(isShown || (hoveredPlace && hoveredPlace.address === shopping.address)) && (
        <InfoWindow position={position}>
          <div>
            <h6>{shopping.name}</h6>
            <p className="mb-0">{shopping.address.split(", ").map((a, i) => 
              (<React.Fragment key={i}>{a}<br/></React.Fragment>))}</p>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default ShoppingMarker;