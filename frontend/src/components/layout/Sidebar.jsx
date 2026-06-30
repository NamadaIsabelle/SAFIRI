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

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    icon: Radio,
    label: "Operations",
  },
  {
    icon: Shield,
    label: "Officers",
  },
  {
    icon: Camera,
    label: "Cameras",
  },
  {
    icon: TrafficCone,
    label: "Traffic Signals",
  },
  {
    icon: Cpu,
    label: "AI Engine",
  },
  {
    icon: BarChart3,
    label: "Analytics",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

export default function Sidebar() {
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
              key={item.label}
              className="mb-2 flex w-full items-center gap-4 rounded-xl px-5 py-4 text-slate-300 transition hover:bg-purple-600/20 hover:text-white"
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