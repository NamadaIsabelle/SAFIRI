export default function Settings() {

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-white">
        System Settings
      </h1>

      <div className="rounded-3xl bg-[#0E1628] p-8">

        <div className="space-y-6">

          <div className="flex justify-between">

            <span className="text-slate-300">
              Dark Mode
            </span>

            <span className="text-green-400">
              Enabled
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-slate-300">
              AI Monitoring
            </span>

            <span className="text-green-400">
              Enabled
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-slate-300">
              Push Notifications
            </span>

            <span className="text-green-400">
              Enabled
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-slate-300">
              Emergency Mode
            </span>

            <span className="text-red-400">
              Disabled
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}