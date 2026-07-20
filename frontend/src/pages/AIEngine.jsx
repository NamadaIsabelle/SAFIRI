export default function AIEngine() {

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-white">
        SAFIRI AI Engine
      </h1>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-3xl bg-[#0E1628] p-6">

          <h2 className="text-xl text-purple-300">
            AI Services
          </h2>

          <div className="mt-6 space-y-4">

            <p>🟢 Computer Vision</p>

            <p>🟢 Incident Verification</p>

            <p>🟢 Congestion Prediction</p>

            <p>🟢 Officer Recommendation</p>

            <p>🟢 Smart Signal Optimizer</p>

          </div>

        </div>

        <div className="rounded-3xl bg-[#0E1628] p-6">

          <h2 className="text-xl text-cyan-300">
            Live AI Statistics
          </h2>

          <div className="mt-6 space-y-5">

            <p>Confidence Score: 97.8%</p>

            <p>Active Models: 5</p>

            <p>Predictions Today: 182</p>

            <p>False Positives: 2</p>

          </div>

        </div>

      </div>

    </div>
  );
}