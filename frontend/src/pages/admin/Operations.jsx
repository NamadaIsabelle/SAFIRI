export default function Operations({ incidents, resolveIncident }) {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Live Operations Center
        </h1>

        <p className="mt-2 text-slate-400">
          Monitor, verify and dispatch incidents across Nairobi.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-[#0E1628] p-6">

        {incidents.length === 0 ? (

          <div className="py-20 text-center">

            <h2 className="text-2xl text-slate-300">
              No Active Incidents
            </h2>

            <p className="mt-3 text-slate-500">
              Click on the map in the Dashboard to report an incident.
            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {[...incidents].reverse().map((incident) => (

              <div
                key={incident.id}
                className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-xl font-semibold text-white">
                      {incident.type}
                    </h2>

                    <p className="text-slate-400">
                      {incident.description || "No description provided"}
                    </p>

                  </div>

                  <span
                    className={`rounded-full px-4 py-2 text-sm ${
                      incident.priority === "High"
                        ? "bg-red-500/20 text-red-400"
                        : incident.priority === "Medium"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-cyan-500/20 text-cyan-300"
                    }`}
                  >
                    {incident.priority}
                  </span>

                </div>

                <div className="mt-6 flex items-center gap-4">

                  <button
                    className="rounded-xl bg-purple-600 px-4 py-2 text-white hover:bg-purple-500"
                  >
                    Dispatch Officer
                  </button>

                  {incident.status !== "Resolved" && (
                    <button
                      onClick={() => resolveIncident(incident.id)}
                      className="rounded-xl bg-green-600 px-4 py-2 text-white hover:bg-green-500"
                    >
                      Resolve
                    </button>
                  )}

                  <button
                    className="rounded-xl bg-slate-700 px-4 py-2 text-white hover:bg-slate-600"
                  >
                    View on Map
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}