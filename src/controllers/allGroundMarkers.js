import React from "react";
import GroundMarker from "../components/GroundMarker";

const allGroundMarkers = (grounds, setMarkers, selectedMarker, setSelectedMarker) => {
  setMarkers(grounds.map(g => (
      <GroundMarker ground={g} key={g.id} 
      selectedMarker={selectedMarker} 
      setSelectedMarker={setSelectedMarker} />
    )));
}
export default allGroundMarkers;