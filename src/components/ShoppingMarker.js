import React, { useState } from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";

const ShoppingMarker = ({ shopping, selectedPlace, setSelectedPlace, refs }) => {
  const position={lat: parseFloat(shopping.lat), lng: parseFloat(shopping.lon)}
  const [ isShown, setIsShown ] = useState(false)
  const handleMouseOver = () => {
    setIsShown(true);
    console.log(refs[shopping.address])
    refs[shopping.address].current.scrollIntoView();
  }
  const handleMouseOut = () => {
    setIsShown(false);
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