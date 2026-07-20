import {
  LayoutDashboard,
  Radio,
  Shield,
  Camera,
  TrafficCone,
  Cpu,
  BarChart3,
  Settings,
} from "lucide-react";

import { useState } from "react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    id: "operations",
    icon: Radio,
    label: "Operations",
  },
  {
    id: "officers",
    icon: Shield,
    label: "Officers",
  },
  {
    id: "cameras",
    icon: Camera,
    label: "Cameras",
  },
  {
    id: "signals",
    icon: TrafficCone,
    label: "Traffic Signals",
  },
  {
    id: "ai",
    icon: Cpu,
    label: "AI Engine",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];



export default function Sidebar({
  activePage,
  setActivePage,
}) {
  return (
    <aside className="w-72 border-r border-slate-800 bg-[#0B1220]">

      <div className="p-8">

        <h2 className="text-3xl font-bold text-purple-400">
          SAFIRI
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Traffic Operations Center
        </p>

      </div>

      <nav className="px-4">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <button
  key={item.id}
  onClick={() => setActivePage(item.id)}
  className={`mb-2 flex w-full items-center gap-4 rounded-xl px-5 py-4 transition ${
    activePage === item.id
      ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20"
      : "text-slate-300 hover:bg-purple-600/20 hover:text-white"
  }`}
>
  <Icon size={22} />

  <span>{item.label}</span>
</button>
          );
        })}

      </nav>

    </aside>
  );
}