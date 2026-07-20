export default function Analytics() {

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-white">
        Traffic Analytics
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl bg-[#0E1628] p-6">

          <h2 className="text-slate-400">
            Incidents Today
          </h2>

          <p className="mt-4 text-5xl font-bold text-red-400">
            38
          </p>

        </div>

        <div className="rounded-3xl bg-[#0E1628] p-6">

          <h2 className="text-slate-400">
            Avg Response
          </h2>

          <p className="mt-4 text-5xl font-bold text-green-400">
            4.2m
          </p>

        </div>

        <div className="rounded-3xl bg-[#0E1628] p-6">

          <h2 className="text-slate-400">
            AI Accuracy
          </h2>

          <p className="mt-4 text-5xl font-bold text-purple-400">
            98%
          </p>

        </div>

        <div className="rounded-3xl bg-[#0E1628] p-6">

          <h2 className="text-slate-400">
            Cameras Online
          </h2>

          <p className="mt-4 text-5xl font-bold text-cyan-400">
            128
          </p>

        </div>

      </div>

    </div>
  );
}