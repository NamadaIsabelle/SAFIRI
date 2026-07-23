import { Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 px-8 py-5 backdrop-blur-xl shadow-sm">

      <div>

        <h1 className="text-3xl font-bold text-purple-700">
          💜 SAFIRI
        </h1>

        <p className="text-slate-500">
          Safiri Salama
        </p>

      </div>

      <div className="flex items-center gap-5">

        <button className="rounded-full bg-purple-100 p-3 hover:bg-purple-200 transition">
          <Bell className="text-purple-700" />
        </button>

        <button className="rounded-full bg-purple-100 p-2 hover:bg-purple-200 transition">
          <UserCircle
            size={36}
            className="text-purple-700"
          />
        </button>

      </div>

    </header>
  );
}