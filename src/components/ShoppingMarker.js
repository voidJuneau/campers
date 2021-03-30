import React, { useState } from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";

const ShoppingMarker = ({ shopping, selectedPlace, setSelectedPlace, refs }) => {
  const position={lat: parseFloat(shopping.lat), lng: parseFloat(shopping.lon)}
  const [ isShown, setIsShown ] = useState(false)
  console.log(refs);
  const handleMouseOver = () => {
    setIsShown(true);
    refs[shopping.address].current.scrollIntoView();
    refs[shopping.address].current.classList.add("hovered-card");
  }
  const handleMouseOut = () => {
    setIsShown(false);
    refs[shopping.address].current.classList.remove("hovered-card");
  }
  const handleClick = () => {
    setSelectedPlace(shopping);
  }

  return (
    <Marker position={position}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      >
      {(isShown || selectedPlace && selectedPlace.address === shopping.address) && (
        <InfoWindow position={position}>
          <div>
            <p>{shopping.name}</p>
            <p>{shopping.address.split(", ").map((a, i) => 
              (<React.Fragment key={i}>{a}<br/></React.Fragment>))}</p>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default ShoppingMarker;