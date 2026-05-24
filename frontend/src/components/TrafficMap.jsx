import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -1.286389,
  lng: 36.817223,
};

function TrafficMap({ incidents, onMapClick }) {
  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onClick={onMapClick}
        options={{
          disableDefaultUI: true,
          styles: [
            {
              elementType: "geometry",
              stylers: [{ color: "#0b1020" }],
            },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#a855f7" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#6b21a8" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#0f172a" }],
            },
          ],
        }}
      >
        {incidents.map((incident) => (
          <Marker
            key={incident.id}
            position={{
              lat: incident.lat,
              lng: incident.lng,
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default TrafficMap;