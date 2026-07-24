import {
  Clock3,
  Navigation,
  Route,
  TrafficCone,
  ArrowRight,
} from "lucide-react";

export default function RoutePreview() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Route Preview
      </h2>

      {/* Route */}

      <div className="mb-6 rounded-2xl bg-slate-100 p-5">

        <div className="flex items-center gap-3">

          <Navigation className="text-purple-600" />

          <div>

            <p className="text-sm text-slate-500">
              Current Location
            </p>

            <h3 className="font-semibold">
              Nairobi CBD
            </h3>

          </div>

        </div>

        <div className="my-4 ml-3 h-10 w-[2px] bg-purple-300" />

        <div className="flex items-center gap-3">

          <Route className="text-pink-500" />

          <div>

            <p className="text-sm text-slate-500">
              Destination
            </p>

            <h3 className="font-semibold">
              JKIA Airport
            </h3>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-purple-50 p-4">

          <Clock3 className="mb-2 text-purple-600" />

          <p className="text-sm text-slate-500">
            ETA
          </p>

          <h3 className="text-xl font-bold">
            18 mins
          </h3>

        </div>

        <div className="rounded-2xl bg-green-50 p-4">

          <TrafficCone className="mb-2 text-green-600" />

          <p className="text-sm text-slate-500">
            Traffic
          </p>

          <h3 className="text-xl font-bold">
            Moderate
          </h3>

        </div>

      </div>

      {/* SAFI */}

      <div className="mt-6 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 p-5 text-white">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-3xl">

            💜

          </div>

          <div>

            <h3 className="font-bold">
              SAFI recommends
            </h3>

            <p className="text-purple-100">
              🚦 Pole pole! Mombasa Road is packed.
            </p>

            <p className="text-purple-100">
              Southern Bypass will save about 8 minutes.
            </p>

          </div>

        </div>

      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-purple-600 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-purple-700">

        Start Navigation

        <ArrowRight />

      </button>

    </div>
  );
}