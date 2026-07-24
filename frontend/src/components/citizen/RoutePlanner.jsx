import { MapPin, Navigation, Route } from "lucide-react";

export default function RoutePlanner() {
  return (
    <div className="rounded-3xl border border-purple-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Plan Your Journey
      </h2>

      <div className="space-y-5">

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Current Location
          </label>

          <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-purple-200 bg-purple-50 py-4 text-purple-700 transition hover:bg-purple-100">

            <Navigation size={20} />

            Use My Location

          </button>
        </div>

        <div>

          <label className="mb-2 block font-medium text-slate-700">
            Destination
          </label>

          <input
            type="text"
            placeholder="Search destination..."
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-purple-500"
          />

        </div>

        <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-purple-600 py-4 font-semibold text-white transition hover:bg-purple-700">

          <Route size={20} />

          Get Route

        </button>

      </div>

    </div>
  );
}