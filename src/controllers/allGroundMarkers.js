import { Marker } from "@react-google-maps/api";

const allGroundMarkers = (grounds, setMarkers) => {
  setMarkers(grounds.map(g => (
        <Marker key={g.id}
        position={{lat: parseFloat(g.lat), lng: parseFloat(g.lon)}} 
    />)));
}
export default allGroundMarkers;