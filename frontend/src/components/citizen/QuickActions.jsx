import {
  Camera,
  Navigation,
  Siren,
  Star,
} from "lucide-react";

export default function QuickActions() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <button className="rounded-2xl bg-purple-600 p-6 text-white transition hover:bg-purple-700">

          <Camera className="mx-auto mb-3" size={34} />

          Report Incident

        </button>

        <button className="rounded-2xl bg-blue-600 p-6 text-white transition hover:bg-blue-700">

          <Navigation className="mx-auto mb-3" size={34} />

          Navigate

        </button>

        <button className="rounded-2xl bg-red-600 p-6 text-white transition hover:bg-red-700">

          <Siren className="mx-auto mb-3" size={34} />

          Emergency

        </button>

        <button className="rounded-2xl bg-green-600 p-6 text-white transition hover:bg-green-700">

          <Star className="mx-auto mb-3" size={34} />

          Saved Places

        </button>

      </div>

    </div>
  );
}