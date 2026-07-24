export default function TrafficPulse() {
  const updates = [
    {
      area: "Mombasa Road",
      status: "🚦 Pole pole! Heavy traffic.",
      color: "text-red-400",
    },
    {
      area: "Waiyaki Way",
      status: "🟡 Traffic moving slowly.",
      color: "text-yellow-400",
    },
    {
      area: "Thika Road",
      status: "🟢 Barabara iko sawa. Safe travels!",
      color: "text-green-400",
    },
  ];

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="mb-5 text-2xl font-bold text-slate-800">
        🚦 Live Traffic Pulse
      </h2>

      <div className="space-y-4">
        {updates.map((update) => (
          <div
            key={update.area}
            className="rounded-2xl border border-slate-200 p-4"
          >
            <h3 className="font-semibold text-slate-700">
              {update.area}
            </h3>

            <p className={`mt-2 ${update.color}`}>
              {update.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}