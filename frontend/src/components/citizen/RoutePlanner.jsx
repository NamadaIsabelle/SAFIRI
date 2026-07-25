import { useState } from "react";
import {
  Navigation,
  MapPin,
  Car,
  PersonStanding,
  Bus,
  Search,
  LocateFixed,
} from "lucide-react";
import { Autocomplete } from "@react-google-maps/api";

export default function RoutePlanner({
  currentLocation,
  setCurrentLocation,

  destination,
  setDestination,

  travelMode,
  setTravelMode,
}) {

  const [loadingLocation, setLoadingLocation] = useState(false);

  const [autocomplete, setAutocomplete] = useState(null);

  const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported.");
    return;
  }

  setLoadingLocation(true);

  navigator.geolocation.getCurrentPosition(

    async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
        );

        const data = await response.json();

        if (data.results && data.results.length > 0) {

  let address = data.results[0].formatted_address;

  // Prefer neighbourhood/locality names
  for (const result of data.results) {

    const locality = result.address_components.find(component =>
      component.types.includes("sublocality") ||
      component.types.includes("sublocality_level_1") ||
      component.types.includes("neighborhood") ||
      component.types.includes("locality")
    );

    if (locality) {
      address = `${locality.long_name}, Nairobi`;
      break;
    }
  }

  setCurrentLocation(address);

} else {

          // Fallback to coordinates
          setCurrentLocation(
            `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`
          );

        }

      } catch (error) {

        console.error(error);

        setCurrentLocation(
          `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`
        );

      }

      setLoadingLocation(false);
    },

    () => {
      alert("Unable to retrieve location.");
      setLoadingLocation(false);
    }

  );
};

  return (
    <div className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-3xl font-bold text-slate-800">
        Route Planner
      </h2>

      <p className="mt-2 text-slate-500">
        Find the fastest route across Nairobi.
      </p>

      {/* Current Location */}

      <div className="mt-8">

        <label className="mb-2 block font-medium text-slate-700">
          Current Location
        </label>

        <button
  onClick={getCurrentLocation}
  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-purple-600 py-4 font-semibold text-white transition hover:bg-purple-700"
>

  <LocateFixed size={20} />

  {loadingLocation
    ? "Getting Location..."
    : "Use My Location"}

</button>

{
  currentLocation && (

    <div className="mt-4 rounded-2xl bg-purple-50 p-4">

      <p className="text-sm text-slate-500">

        Current Location

      </p>

      <p className="font-semibold text-purple-700">

        {currentLocation}

      </p>

    </div>

  )
}

{currentLocation && (
  <p className="mt-2 text-sm text-purple-700">
    💜 Nice! You're in {currentLocation.split(",")[0]}.
  </p>
)}

      </div>

      {/* Destination */}

      <div className="mt-6">

        <label className="mb-2 block font-medium text-slate-700">
          Destination
        </label>

        <Autocomplete
  onLoad={(auto) => setAutocomplete(auto)}
  onPlaceChanged={() => {

    if (!autocomplete) return;

    const place = autocomplete.getPlace();

    if (place.formatted_address) {
      setDestination(place.formatted_address);
    }

  }}
>

  <div className="flex items-center rounded-2xl border border-slate-300 px-4">

    <Search className="text-slate-400" />

    <input
      type="text"
      placeholder="Search destination..."
      value={destination}
      onChange={(e) => setDestination(e.target.value)}
      className="w-full bg-transparent p-4 outline-none"
    />

  </div>

</Autocomplete>

      </div>

      {/* Travel Mode */}

      <div className="mt-8">

        <label className="mb-4 block font-medium text-slate-700">
          Travel Mode
        </label>

        <div className="grid grid-cols-3 gap-4">

          <button
            onClick={() => setTravelMode("DRIVING")}
            className={`rounded-2xl p-4 transition ${
              travelMode === "DRIVING"
                ? "bg-purple-600 text-white"
                : "bg-slate-100"
            }`}
          >
            <Car className="mx-auto mb-2" />

            Drive
          </button>

          <button
            onClick={() => setTravelMode("WALKING")}
            className={`rounded-2xl p-4 transition ${
              travelMode === "WALKING"
                ? "bg-purple-600 text-white"
                : "bg-slate-100"
            }`}
          >
            <PersonStanding className="mx-auto mb-2" />

            Walk
          </button>

          <button
            onClick={() => setTravelMode("TRANSIT")}
            className={`rounded-2xl p-4 transition ${
              travelMode === "TRANSIT"
                ? "bg-purple-600 text-white"
                : "bg-slate-100"
            }`}
          >
            <Bus className="mx-auto mb-2" />

            Matatu
          </button>

        </div>

      </div>

      {/* Button */}

      <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 py-4 font-semibold text-white transition hover:bg-slate-800">

        <MapPin />

        Find Route

      </button>

    </div>
  );
}