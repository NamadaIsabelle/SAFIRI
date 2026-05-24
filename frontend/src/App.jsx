import { useState } from "react";
import TrafficMap from "./components/TrafficMap";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [incidents, setIncidents] = useState([]);

  const handleMapClick = (event) => {
  const incidentType = prompt(
    "Incident Type (Accident, Breakdown, Congestion)"
  );

  if (!incidentType) return;

  const newIncident = {
    id: Date.now(),
    type: incidentType,
    lat: event.latLng.lat(),
    lng: event.latLng.lng(),
    location: "Nairobi",
  };

  setIncidents((prev) => [...prev, newIncident]);
};

  return (
    <div className="flex min-h-screen bg-[#070816] text-white">
      {/* Sidebar */}
      <aside
        className={`relative border-r border-purple-500/20 bg-[#0b1020] p-6 transition-all duration-300 ${
          sidebarOpen ? "w-72" : "w-24"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -right-4 top-8 rounded-full border border-purple-500/30 bg-purple-500/20 p-2 text-purple-300 shadow-lg transition hover:bg-purple-500/30"
        >
          {sidebarOpen ? "◀" : "▶"}
        </button>

        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-wider text-purple-400">
            {sidebarOpen ? "SAFIRI" : "S"}
          </h1>

          {sidebarOpen && (
            <p className="mt-2 text-sm text-slate-400">
              Traffic Intelligence System
            </p>
          )}
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          {[
            "Dashboard",
            "Live Incidents",
            "Officer Deployment",
            "Shift Management",
            "System Reports",
          ].map((item) => (
            <button
              key={item}
              className="w-full rounded-2xl bg-white/5 p-4 text-left text-slate-300 transition hover:bg-white/10"
            >
              {sidebarOpen ? item : "•"}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-5xl font-bold">
              Nairobi Traffic Command Center
            </h2>

            <p className="mt-2 text-slate-400">
              Real-time traffic coordination and incident response
            </p>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 px-5 py-3 text-purple-300">
            Live Monitoring
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-6">
            <h3 className="text-purple-300">Active Incidents</h3>
            <p className="mt-4 text-5xl font-bold">{incidents.length}</p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6">
            <h3 className="text-cyan-300">Officers Deployed</h3>
            <p className="mt-4 text-5xl font-bold">38</p>
          </div>

          <div className="rounded-3xl border border-red-500/20 bg-white/5 p-6">
            <h3 className="text-red-300">Congestion Alerts</h3>
            <p className="mt-4 text-5xl font-bold">7</p>
          </div>
        </div>

        {/* Map + Alerts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Map */}
          <div className="lg:col-span-2 rounded-3xl border border-purple-500/20 bg-white/5 p-6">
            <h3 className="mb-4 text-2xl font-semibold text-purple-300">
              Live Traffic Map
            </h3>

            <div className="h-[450px] overflow-hidden rounded-2xl">
              <TrafficMap
                incidents={incidents}
                onMapClick={handleMapClick}
              />
            </div>
          </div>

          {/* Alerts */}
          <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-6">
            <h3 className="mb-6 text-2xl font-semibold text-purple-300">
              Live Alerts
            </h3>

            <div className="space-y-4">
              {incidents.length === 0 ? (
                <p className="text-slate-500">
                  No incidents reported yet.
                </p>
             ) : (
               incidents.map((incident) => (
                 <div
                   key={incident.id}
                   className="rounded-2xl bg-red-500/10 p-4 text-red-300"
                 >
                   ⚠ {incident.type} reported
                 </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;