export default function AIStatusPanel() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-[#0E1628] p-6">
      <h2 className="mb-6 text-xl font-bold text-white">
        AI Status
      </h2>

      <div className="space-y-4">

        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            Traffic Detection
          </span>

          <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
            Online
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            Camera Analysis
          </span>

          <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
            Active
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            Prediction Engine
          </span>

          <span className="rounded-full bg-purple-500/20 px-3 py-1 text-purple-300">
            Learning
          </span>
        </div>

      </div>
    </div>
  );
}