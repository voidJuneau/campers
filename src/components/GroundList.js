import React, { useEffect } from 'react';
import { Marker } from "@react-google-maps/api";

function GroundList(props) {

  useEffect(() => {
    const allGoundMarker = props.grounds.map(g => (
      <Marker key={g.id}
      position={{lat: parseFloat(g.lat), lng: parseFloat(g.lon)}} 

      />))
    props.setMarkers(allGoundMarker)
  }, [props.grounds]);
  
  return (
    <div className="GroundList side-page">
      {props.grounds.map(g => (
        <p key={g.id}>{g.name}</p>
      ))}
    </div>
  );
}

export default GroundList;