import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import ToggleMapButton from "./ToggleMapButton";

import GroundMarker from "./GroundMarker";
import ShoppingMarker from "./ShoppingMarker";

const containerStyle = {
  width: "100%",
  height: "100vh"
};

const Map = ({ center, zoom, places, selectedPlace, setSelectedPlace, refs, hoveredPlace }) => {
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    const newMarkers = []
    places.forEach(p => newMarkers.push(
      p.url ?
      <GroundMarker key={p.id + p.lat} ground={p} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
      : <ShoppingMarker key={p.id + p.lat} shopping={p} hoveredPlace={hoveredPlace}
          refs={refs} />
      ));
      setMarkers(newMarkers);
  }, [places, selectedPlace, refs, hoveredPlace])

  useEffect(() => {console.log(center)}, [center])
  return (
    <div id="map-container" className="side-map d-none d-md-block">
      <ToggleMapButton className="map-button" />
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
        >
          {markers}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;