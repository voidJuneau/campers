import React, { useEffect } from 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh"
};

const Map = (props) => {
  return (
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
  );
}

export default Map;