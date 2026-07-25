import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const libraries = ["places"];

const defaultCenter = {
  lat: -1.286389,
  lng: 36.817223,
};

export default function RouteMap() {
  const [center, setCenter] = useState(defaultCenter);
  const [userLocation, setUserLocation] = useState(null);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(

      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setUserLocation(location);
        setCenter(location);
      },

      () => {
        alert("Unable to retrieve your location.");
      }

    );
  };

  return (
    <div className="overflow-hidden rounded-[30px] bg-white shadow-xl">

      <div className="flex items-center justify-between border-b px-6 py-4">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Live Route Map
          </h2>

          <p className="text-slate-500">
            Find your fastest route.
          </p>
        </div>

        <button
          onClick={getCurrentLocation}
          className="rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700"
        >
          📍 Use My Location
        </button>

      </div>

        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "600px",
          }}
          center={center}
          zoom={14}
        >

          {userLocation && (
            <Marker
              position={userLocation}
            />
          )}

        </GoogleMap>

    </div>
  );
}