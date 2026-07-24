export default function TrafficSignals() {

  const signals = [
    {
      junction: "Uhuru Highway",
      light: "Green",
      countdown: 21,
    },
    {
      junction: "Moi Avenue",
      light: "Red",
      countdown: 42,
    },
    {
      junction: "Westlands",
      light: "Yellow",
      countdown: 4,
    },
  ];

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold text-white">
        Smart Traffic Signals
      </h1>

      <div className="grid gap-6 lg:grid-cols-3">

        {signals.map((signal) => (

          <div
            key={signal.junction}
            className="rounded-3xl border border-slate-800 bg-[#0E1628] p-6"
          >
            <h2 className="text-xl text-white">
              {signal.junction}
            </h2>

            <h3 className="mt-6 text-4xl font-bold text-purple-400">
              {signal.light}
            </h3>

            <p className="mt-3 text-slate-400">
              {signal.countdown} seconds remaining
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}