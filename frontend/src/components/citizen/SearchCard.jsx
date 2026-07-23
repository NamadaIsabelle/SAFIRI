import { MapPin, Flag, Search } from "lucide-react";

export default function SearchCard() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      <h2 className="mb-5 text-2xl font-bold text-slate-800">
        Where are you going?
      </h2>

      {/* Current Location */}

      <div className="mb-4 flex items-center gap-4 rounded-2xl border border-slate-200 px-4 py-4">

        <MapPin className="text-purple-600" size={24} />

        <input
          type="text"
          placeholder="Use current location..."
          className="flex-1 bg-transparent outline-none text-slate-700"
        />

        <Search className="text-slate-400" size={20} />

      </div>

      {/* Destination */}

      <div className="flex items-center gap-4 rounded-2xl border border-slate-200 px-4 py-4">

        <Flag className="text-red-500" size={24} />

        <input
          type="text"
          placeholder="Where are you going today?"
          className="flex-1 bg-transparent outline-none text-slate-700"
        />

      </div>

      <button
        className="mt-6 w-full rounded-2xl bg-purple-600 py-4 text-lg font-semibold text-white transition hover:bg-purple-700"
      >
        Find Route
      </button>

    </div>
  );
}