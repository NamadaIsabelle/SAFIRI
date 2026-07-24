export default function Cameras() {
  const cameras = [
    { id: "CBD-001", location: "Kenyatta Ave", status: "Online", ai: "Monitoring" },
    { id: "CBD-002", location: "Moi Avenue", status: "Online", ai: "Vehicle Detection" },
    { id: "WST-001", location: "Westlands", status: "Maintenance", ai: "Offline" },
    { id: "THK-001", location: "Thika Road", status: "Online", ai: "Incident Detection" },
  ];

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold text-white">
        CCTV Monitoring
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cameras.map((camera) => (

          <div
            key={camera.id}
            className="rounded-3xl border border-slate-800 bg-[#0E1628] p-6"
          >
            <h2 className="text-xl font-semibold text-white">
              {camera.id}
            </h2>

            <p className="mt-2 text-slate-400">
              {camera.location}
            </p>

            <p className="mt-4 text-green-400">
              ● {camera.status}
            </p>

            <p className="mt-2 text-purple-300">
              AI: {camera.ai}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}