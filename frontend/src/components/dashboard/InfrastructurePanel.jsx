export default function InfrastructurePanel() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-[#0E1628] p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        Infrastructure
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-slate-800 p-5">
          <p className="text-slate-400">
            Cameras
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            128
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <p className="text-slate-400">
            Signals
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            67
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <p className="text-slate-400">
            Sensors
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            302
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <p className="text-slate-400">
            System Health
          </p>

          <h3 className="mt-2 text-3xl font-bold text-green-400">
            99%
          </h3>
        </div>

      </div>

    </div>
  );
}