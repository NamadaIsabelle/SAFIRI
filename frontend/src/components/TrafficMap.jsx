import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -1.286389,
  lng: 36.817223,
};

function TrafficMap({ incidents, onMapClick }) {
  const [selectedIncident, setSelectedIncident] = useState(null);

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
        {incidents.map((incident) => {
          let markerColor;

          if (incident.priority === "High") {
            markerColor = "red";
          } else if (incident.priority === "Medium") {
            markerColor = "yellow";
          } else {
            markerColor = "blue";
          }

          return (
            <Marker
              key={incident.id}
              position={{
                lat: incident.lat,
                lng: incident.lng,
              }}
              onClick={() => setSelectedIncident(incident)}
              icon={{
                url: `http://maps.google.com/mapfiles/ms/icons/${markerColor}-dot.png`,
              }}
            />
          );
        })}
        {selectedIncident && (
  <InfoWindow
    position={{
      lat: selectedIncident.lat,
      lng: selectedIncident.lng,
    }}
    onCloseClick={() => setSelectedIncident(null)}
  >
    <div className="min-w-[220px] text-black">
      <h3 className="mb-2 text-lg font-bold">
        🚨 Incident Details
      </h3>

      <p>
        <strong>Type:</strong>{" "}
        {selectedIncident.type}
      </p>

      <p>
        <strong>Priority:</strong>{" "}
        {selectedIncident.priority}
      </p>

      <p>
        <strong>Officer:</strong>{" "}
        {selectedIncident.assignedOfficer}
      </p>

      <p>
        <strong>ETA:</strong>{" "}
        {selectedIncident.eta} mins
      </p>

      <p className="mt-2">
        <strong>Description:</strong>{" "}
        {selectedIncident.description ||
          "No description"}
      </p>
    </div>
  </InfoWindow>
)}
      </GoogleMap>
    </LoadScript>
  );
}

export default TrafficMap;