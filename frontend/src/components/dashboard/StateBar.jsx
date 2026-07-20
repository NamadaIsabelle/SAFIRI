import {
  AlertTriangle,
  Shield,
  Camera,
  BrainCircuit,
} from "lucide-react";

const stats = [
  {
    title: "Active Incidents",
    value: 12,
    icon: AlertTriangle,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    title: "Units Deployed",
    value: 37,
    icon: Shield,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Cameras Online",
    value: "128/130",
    icon: Camera,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "AI Confidence",
    value: "97%",
    icon: BrainCircuit,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export default function StateBar() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">

      {stats.map((card) => {

        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-slate-800 bg-[#0E1628] p-6"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-white">
                  {card.value}
                </h2>

              </div>

              <div className={`${card.bg} rounded-2xl p-4`}>
                <Icon className={card.color} size={30} />
              </div>

            </div>
          </div>
        );

      })}

    </div>
  );
}