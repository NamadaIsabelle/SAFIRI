import { useState } from "react";
import {
  MapPin,
  Car,
  PersonStanding,
  Bus,
  Bike,
  Search,
  LocateFixed,
  ArrowUpDown,
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
  const [findingRoute, setFindingRoute] = useState(false);
  const [routeMessage, setRouteMessage] = useState("");

  const [locationAutocomplete, setLocationAutocomplete] = useState(null);
  const [destinationAutocomplete, setDestinationAutocomplete] =
    useState(null);

  // =====================================
  // Use My Location
  // =====================================

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoadingLocation(true);
    setRouteMessage("");

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

            // Prefer a useful local area name
            for (const result of data.results) {
              const locality = result.address_components.find(
                (component) =>
                  component.types.includes("sublocality") ||
                  component.types.includes("sublocality_level_1") ||
                  component.types.includes("neighborhood") ||
                  component.types.includes("locality")
              );

              if (locality) {
                address = result.formatted_address;
                break;
              }
            }

            setCurrentLocation(address);
          } else {
            setCurrentLocation(
              `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`
            );
          }
        } catch (error) {
          console.error("Location lookup error:", error);

          setCurrentLocation(
            `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`
          );
        }

        setLoadingLocation(false);
      },

      () => {
        alert("Unable to retrieve your location.");
        setLoadingLocation(false);
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  };

  // =====================================
  // Search Starting Location
  // =====================================

  const handleLocationChanged = () => {
    if (!locationAutocomplete) return;

    const place = locationAutocomplete.getPlace();

    if (place && place.formatted_address) {
      setCurrentLocation(place.formatted_address);
    } else if (place && place.name) {
      setCurrentLocation(place.name);
    }
  };

  // =====================================
  // Search Destination
  // =====================================

  const handleDestinationChanged = () => {
    if (!destinationAutocomplete) return;

    const place = destinationAutocomplete.getPlace();

    if (place && place.formatted_address) {
      setDestination(place.formatted_address);
    } else if (place && place.name) {
      setDestination(place.name);
    }
  };

// =====================================
// Swap Starting Location and Destination
// =====================================

const handleSwapLocations = () => {
  const oldStartingLocation = currentLocation;

  setCurrentLocation(destination);
  setDestination(oldStartingLocation);

  setRouteMessage("");
};

  // =====================================
  // Find Route
  // =====================================

  const handleFindRoute = () => {
    setRouteMessage("");

    if (!currentLocation) {
      setRouteMessage("Please select a starting location first.");
      return;
    }

    if (!destination) {
      setRouteMessage("Please select a destination first.");
      return;
    }

    setFindingRoute(true);
    setRouteMessage("Finding your route...");

    // Temporary feedback.
    // We will connect this to the actual route calculation next.
    setTimeout(() => {
      setFindingRoute(false);

      setRouteMessage(
        `Route request received: ${currentLocation.split(",")[0]} → ${destination.split(",")[0]}`
      );
    }, 1000);
  };

  return (
    <div className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-3xl font-bold text-slate-800">
        Route Planner
      </h2>

      <p className="mt-2 text-slate-500">
        Find the fastest route across Nairobi.
      </p>

      {/* =====================================
          Current Location
      ===================================== */}

      <div className="mt-8">

        <label className="mb-2 block font-medium text-slate-700">
          Starting Location
        </label>

        {/* Search Starting Location */}

        <Autocomplete
          onLoad={(auto) => setLocationAutocomplete(auto)}
          onPlaceChanged={handleLocationChanged}
        >
          <div className="flex items-center rounded-2xl border border-slate-300 px-4">

            <Search className="text-slate-400" />

            <input
              type="text"
              placeholder="Search starting point..."
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              className="w-full bg-transparent p-4 outline-none"
            />

          </div>
        </Autocomplete>

        {/* Use My Location */}

        <button
          type="button"
          onClick={getCurrentLocation}
          className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-purple-600 py-4 font-semibold text-white transition hover:bg-purple-700 active:scale-[0.98]"
        >
          <LocateFixed size={20} />

          {loadingLocation
            ? "Getting Location..."
            : "Use My Location"}
        </button>

        {/* Selected Starting Location */}

        {currentLocation && (
          <>
            <div className="mt-4 rounded-2xl bg-purple-50 p-4">

              <p className="text-sm text-slate-500">
                Starting Location
              </p>

              <p className="font-semibold text-purple-700">
                {currentLocation}
              </p>

            </div>

            <p className="mt-2 text-sm text-purple-700">
              📍 Trip starts from {currentLocation.split(",")[0]}.
            </p>
          </>
        )}

      </div>

{/* =====================================
    Swap Locations
===================================== */}

<div className="flex justify-center -my-1">

  <button
    type="button"
    onClick={handleSwapLocations}
    disabled={!currentLocation && !destination}
    title="Swap starting location and destination"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 shadow-sm transition hover:border-purple-400 hover:bg-purple-50 hover:text-purple-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
  >
    <ArrowUpDown size={19} />

  </button>

</div>

      {/* =====================================
          Destination
      ===================================== */}

      <div className="mt-6">

        <label className="mb-2 block font-medium text-slate-700">
          Destination
        </label>

        <Autocomplete
          onLoad={(auto) => setDestinationAutocomplete(auto)}
          onPlaceChanged={handleDestinationChanged}
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

      {/* =====================================
    Travel Mode
===================================== */}

<div className="mt-8">

  <label className="mb-4 block font-medium text-slate-700">
    Travel Mode
  </label>

  <div className="grid grid-cols-4 gap-3">

    {/* Drive */}

    <button
      type="button"
      onClick={() => setTravelMode("DRIVING")}
      className={`flex flex-col items-center justify-center rounded-2xl p-4 transition active:scale-95 ${
        travelMode === "DRIVING"
          ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
          : "bg-slate-100 text-slate-700 hover:bg-purple-50 hover:text-purple-600"
      }`}
    >
      <Car size={28} />

      <span className="mt-2 text-sm font-semibold">
        Drive
      </span>
    </button>


    {/* Walk */}

    <button
      type="button"
      onClick={() => setTravelMode("WALKING")}
      className={`flex flex-col items-center justify-center rounded-2xl p-4 transition active:scale-95 ${
        travelMode === "WALKING"
          ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
          : "bg-slate-100 text-slate-700 hover:bg-purple-50 hover:text-purple-600"
      }`}
    >
      <PersonStanding size={28} />

      <span className="mt-2 text-sm font-semibold">
        Walk
      </span>
    </button>


    {/* Cycling */}

    <button
      type="button"
      onClick={() => setTravelMode("BICYCLING")}
      className={`flex flex-col items-center justify-center rounded-2xl p-4 transition active:scale-95 ${
        travelMode === "BICYCLING"
          ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
          : "bg-slate-100 text-slate-700 hover:bg-purple-50 hover:text-purple-600"
      }`}
    >
      <Bike size={28} />

      <span className="mt-2 text-sm font-semibold">
        Cycling
      </span>
    </button>


    {/* Matatu / Transit */}

    <button
      type="button"
      onClick={() => setTravelMode("TRANSIT")}
      className={`flex flex-col items-center justify-center rounded-2xl p-4 transition active:scale-95 ${
        travelMode === "TRANSIT"
          ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
          : "bg-slate-100 text-slate-700 hover:bg-purple-50 hover:text-purple-600"
      }`}
    >
      <Bus size={28} />

      <span className="mt-2 text-sm font-semibold">
        Matatu
      </span>
    </button>

  </div>

</div>
      {/* =====================================
          Find Route
      ===================================== */}

      <button
        type="button"
        onClick={handleFindRoute}
        disabled={findingRoute}
        className={`mt-8 flex w-full items-center justify-center gap-3 rounded-2xl py-4 font-semibold text-white transition ${
          findingRoute
            ? "cursor-wait bg-purple-500"
            : "bg-slate-900 hover:bg-slate-800 active:scale-[0.98]"
        }`}
      >
        <MapPin size={20} />

        {findingRoute ? "Finding Route..." : "Find Route"}
      </button>

      {/* Route Feedback */}

      {routeMessage && (
        <div className="mt-4 rounded-2xl bg-purple-50 p-4 text-center text-sm font-medium text-purple-700">
          {routeMessage}
        </div>
      )}

    </div>
  );
}