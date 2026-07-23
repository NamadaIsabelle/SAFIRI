const updates = [
  {
    color: "bg-red-500",
    title: "Heavy Traffic",
    road: "Mombasa Road",
    message: "Pole pole! Expect delays.",
  },
  {
    color: "bg-yellow-500",
    title: "Moderate Traffic",
    road: "Thika Road",
    message: "Traffic moving slowly.",
  },
  {
    color: "bg-green-500",
    title: "Road Clear",
    road: "Southern Bypass",
    message: "Barabara iko sawa. Safe travels!",
  },
];

export default function TrafficUpdates() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      <h2 className="mb-5 text-2xl font-bold text-slate-800">
        Nairobi Traffic Pulse
      </h2>

      <div className="space-y-4">

        {updates.map((item) => (

          <div
            key={item.road}
            className="flex items-center gap-5 rounded-2xl border border-slate-200 p-4"
          >

            <div className={`h-4 w-4 rounded-full ${item.color}`} />

            <div>

              <h3 className="font-semibold">
                {item.road}
              </h3>

              <p className="text-slate-500">
                {item.message}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}