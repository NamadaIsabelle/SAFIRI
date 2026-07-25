import Navbar from "../../components/citizen/Navbar";
import RoutePlanner from "../../components/citizen/RoutePlanner";
import RoutePreview from "../../components/citizen/RoutePreview";
import TrafficPulse from "../../components/citizen/TrafficPulse";
import SAFICard from "../../components/citizen/SAFICard";
import ReportCard from "../../components/citizen/ReportCard";
import RouteMap from "../../components/citizen/RouteMap";
import { LoadScript } from "@react-google-maps/api";
import { useState } from "react";

const libraries = ["places"];

export default function CitizenHome() {
  const [currentLocation, setCurrentLocation] = useState("");

const [destination, setDestination] = useState("");

const [travelMode, setTravelMode] = useState("DRIVING");

const [directions, setDirections] = useState(null);

const [distance, setDistance] = useState("");

const [eta, setEta] = useState("");
  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <div className="min-h-screen bg-[#F8F8FC]">

        <Navbar />

        <div className="mx-auto max-w-7xl p-8">

          <div className="grid gap-8 lg:grid-cols-2">

            <RoutePlanner
  currentLocation={currentLocation}
  setCurrentLocation={setCurrentLocation}

  destination={destination}
  setDestination={setDestination}

  travelMode={travelMode}
  setTravelMode={setTravelMode}
/>

            <RouteMap
  currentLocation={currentLocation}
  destination={destination}
  travelMode={travelMode}

  directions={directions}
  setDirections={setDirections}

  distance={distance}
  setDistance={setDistance}

  eta={eta}
  setEta={setEta}
/>

          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">

            <TrafficPulse />

            <RoutePreview
  distance={distance}
  eta={eta}
/>

            <SAFICard
  eta={eta}
  distance={distance}
/>

          </div>

          <div className="mt-8">

            <ReportCard />

          </div>

        </div>

      </div>
    </LoadScript>
  );
}