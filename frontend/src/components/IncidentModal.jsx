function IncidentModal({
  isOpen,
  onClose,
  onSubmit,
  incidentData,
  setIncidentData,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl border border-purple-500/20 bg-[#0b1020] p-8 shadow-2xl shadow-purple-500/20">
        <h2 className="mb-6 text-3xl font-bold text-purple-400">
          Report Incident
        </h2>

        {/* Incident Type */}
        <div className="mb-5">
          <label className="mb-2 block text-sm text-slate-300">
            Incident Type
          </label>

          <select
            value={incidentData.type}
            onChange={(e) =>
              setIncidentData({
                ...incidentData,
                type: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-purple-500/20 bg-[#111827] p-4 text-white outline-none"
          >
            <option value="">Select Incident</option>
            <option value="Accident">Accident</option>
            <option value="Breakdown">Breakdown</option>
            <option value="Congestion">Congestion</option>
            <option value="Road Block">Road Block</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="mb-2 block text-sm text-slate-300">
            Description
          </label>

          <textarea
            rows="4"
            value={incidentData.description}
            onChange={(e) =>
              setIncidentData({
                ...incidentData,
                description: e.target.value,
              })
            }
            placeholder="Describe the incident..."
            className="w-full rounded-2xl border border-purple-500/20 bg-[#111827] p-4 text-white outline-none"
          />
        </div>

        {/* Priority */}
        <div className="mb-8">
          <label className="mb-2 block text-sm text-slate-300">
            Priority
          </label>

          <select
            value={incidentData.priority}
            onChange={(e) =>
              setIncidentData({
                ...incidentData,
                priority: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-purple-500/20 bg-[#111827] p-4 text-white outline-none"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-2xl bg-slate-700 px-5 py-3 text-white transition hover:bg-slate-600"
          >
            Cancel
          </button>

          <button
            onClick={onSubmit}
            className="rounded-2xl bg-purple-600 px-5 py-3 text-white transition hover:bg-purple-500"
          >
            Submit Incident
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncidentModal;