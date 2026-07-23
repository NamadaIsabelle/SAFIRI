export default function PulseCard() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-slate-800">
        Nairobi Pulse
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-purple-50 p-4">
          <p className="text-sm text-slate-500">Traffic</p>
          <h3 className="text-xl font-bold text-yellow-500">
            Moderate
          </h3>
        </div>

        <div className="rounded-2xl bg-purple-50 p-4">
          <p className="text-sm text-slate-500">Weather</p>
          <h3 className="text-xl font-bold">
            ☀️ Clear
          </h3>
        </div>

        <div className="rounded-2xl bg-purple-50 p-4">
          <p className="text-sm text-slate-500">Incidents</p>
          <h3 className="text-xl font-bold text-red-500">
            12
          </h3>
        </div>

        <div className="rounded-2xl bg-purple-50 p-4">
          <p className="text-sm text-slate-500">Average ETA</p>
          <h3 className="text-xl font-bold text-purple-600">
            28 min
          </h3>
        </div>

      </div>

    </div>
  );
}