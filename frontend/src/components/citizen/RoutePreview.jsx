import { GoogleMap, LoadScript } from "@react-google-maps/api";

const center = {
  lat: -1.286389,
  lng: 36.817223,
};

export default function RoutePreview() {
  return (
    <div className="overflow-hidden rounded-3xl shadow-xl">

      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>

        <GoogleMap
          center={center}
          zoom={12}
          mapContainerStyle={{
            width: "100%",
            height: "350px",
          }}
          options={{
            disableDefaultUI: true,
          }}
        />

      </LoadScript>

    </div>
  );
}