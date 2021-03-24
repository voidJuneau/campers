import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import ToggleMapButton from "./ToggleMapButton";
import { Container } from 'react-bootstrap';

import GroundMarker from "./GroundMarker";

const containerStyle = {
  width: "100%",
  height: "100vh"
};

const Map = ({ center, zoom, places, selectedPlace, setSelectedPlace }) => {
  // console.log(process.env.REACT_APP_GOOGLE_KEY)
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    const newMarkers = []
    places.forEach(p => newMarkers.push(
      <GroundMarker key={p.id + p.lat} ground={p} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
      ));
      setMarkers(newMarkers);
  }, [places, selectedPlace])

  
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