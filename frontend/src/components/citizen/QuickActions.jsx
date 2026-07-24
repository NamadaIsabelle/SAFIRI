import {
  Camera,
  Route,
  TrafficCone,
  Siren,
} from "lucide-react";

const actions = [
  {
    title: "Report Incident",
    icon: Camera,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Plan Route",
    icon: Route,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Traffic Pulse",
    icon: TrafficCone,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Emergency",
    icon: Siren,
    color: "bg-red-100 text-red-600",
  },
];

export default function QuickActions() {
  return (
    <div>
      <h2 className="mb-5 text-2xl font-bold text-slate-800">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-5">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="group rounded-3xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className={`mb-5 inline-flex rounded-2xl p-4 ${action.color}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="font-bold text-slate-800">
                {action.title}
              </h3>
            </button>
          );
        })}
      </div>
    </div>
  );
}