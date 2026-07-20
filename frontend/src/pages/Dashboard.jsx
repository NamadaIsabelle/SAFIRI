import { useState } from "react";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

import DashboardHome from "./DashboardHome";
import Operations from "./Operations";
import Officers from "./Officers";
import Cameras from "./Cameras";
import TrafficSignals from "./TrafficSignals";
import AIEngine from "./AIEngine";
import Analytics from "./Analytics";
import Settings from "./Settings";

import IncidentModal from "../components/modals/IncidentModal";

export default function Dashboard() {

  // ===============================
  // Navigation
  // ===============================

  const [activePage, setActivePage] = useState("dashboard");

  // ===============================
  // Incident System
  // ===============================

  const [incidents, setIncidents] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [clickedLocation, setClickedLocation] = useState(null);

  const [incidentData, setIncidentData] = useState({
    type: "",
    description: "",
    priority: "Low",
  });

  // ===============================
  // Map Click
  // ===============================

  const handleMapClick = (event) => {

    setClickedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });

    setIsModalOpen(true);

  };

  // ===============================
  // Submit Incident
  // ===============================

  const handleSubmitIncident = () => {

    if (!incidentData.type || !clickedLocation) return;

    const newIncident = {

      id: Date.now(),

      type: incidentData.type,

      description: incidentData.description,

      priority: incidentData.priority,

      lat: clickedLocation.lat,

      lng: clickedLocation.lng,

      status: "Pending Verification",

      reportedAt: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),

    };

    setIncidents((prev) => [...prev, newIncident]);

    setIncidentData({
      type: "",
      description: "",
      priority: "Low",
    });

    setClickedLocation(null);

    setIsModalOpen(false);

  };

  // ===============================
  // Resolve Incident
  // ===============================

  const resolveIncident = (id) => {

    setIncidents((prev) =>
      prev.map((incident) =>
        incident.id === id
          ? {
              ...incident,
              status: "Resolved",
            }
          : incident
      )
    );

  };

  // ===============================
  // Render
  // ===============================

  return (

    <div className="flex min-h-screen bg-[#050816]">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="flex flex-1 flex-col">

        <Header />

        <main className="flex-1 p-8">

          {activePage === "dashboard" && (

            <DashboardHome
              incidents={incidents}
              onMapClick={handleMapClick}
            />

          )}

          {activePage === "operations" && (

            <Operations
              incidents={incidents}
              resolveIncident={resolveIncident}
            />

          )}

          {activePage === "officers" && (

            <Officers incidents={incidents} />

          )}

          {activePage === "cameras" && (

            <Cameras />

          )}

          {activePage === "signals" && (

            <TrafficSignals />

          )}

          {activePage === "ai" && (

            <AIEngine incidents={incidents} />

          )}

          {activePage === "analytics" && (

            <Analytics incidents={incidents} />

          )}

          {activePage === "settings" && (

            <Settings />

          )}

        </main>

      </div>

      <IncidentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitIncident}
        incidentData={incidentData}
        setIncidentData={setIncidentData}
      />

    </div>

  );

}