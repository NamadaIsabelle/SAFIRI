import { useState } from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import cameras from "../../data/cameras";

const center = {
  lat: -1.286389,
  lng: 36.817223,
};

export default function LiveMap() {
  console.log(cameras);
  const [selectedCamera, setSelectedCamera] = useState(null);

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-[#0E1628]">
      <LoadScript
  googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
  libraries={["places"]}
>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "600px",
          }}
          center={center}
          zoom={13}
        >
          {cameras.map((camera) => (
            <Marker
              key={camera.id}
              position={camera.position}
              onClick={() => setSelectedCamera(camera)}
            />
          ))}

        </GoogleMap>
      </LoadScript>
    </div>
  );
}