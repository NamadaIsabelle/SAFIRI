export default function OfficerPanel() {
  const officers = [
    "CBD Unit 14",
    "Westlands Unit 8",
    "Industrial Area Unit 2",
    "Thika Road Unit 5",
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-[#0E1628] p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        Officer Deployment
      </h2>

      <div className="space-y-3">

        {officers.map((officer) => (
          <div
            key={officer}
            className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
          >
            <span className="text-white">
              {officer}
            </span>

            <span className="text-green-400">
              Available
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}