import React, { useEffect } from 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import ToggleMapButton from "./ToggleMapButton";
import { Container } from 'react-bootstrap';

const containerStyle = {
  width: "100%",
  height: "100vh"
};

const Map = (props) => {
  console.log(process.env.REACT_APP_GOOGLE_KEY)
  return (
    <div id="map-container" className="side-map d-none d-md-block">
      <ToggleMapButton className="map-button" />
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={props.center}
          zoom={9}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
        >
          {props.markers}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;