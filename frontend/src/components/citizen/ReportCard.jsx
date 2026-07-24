import { Camera, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ReportCard() {
  const [description, setDescription] = useState("");

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-5 text-2xl font-bold text-slate-800">
        Report an Incident
      </h2>

      <button className="mb-4 flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-purple-300 py-6 text-purple-600 transition hover:bg-purple-50">

        <Camera />

        Upload Photo

      </button>

      <textarea
        rows={4}
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        placeholder="Describe what happened..."
        className="mb-4 w-full rounded-2xl border p-4 outline-none focus:border-purple-500"
      />

      <button className="mb-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 py-3">

        <MapPin size={18}/>

        Attach GPS Location

      </button>

      <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-purple-600 py-4 font-semibold text-white transition hover:bg-purple-700">

        <Send size={18}/>

        Submit Report

      </button>

    </div>
  );
}