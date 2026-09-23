import { Camera, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useRef, useState } from "react";

export default function ReportCard() {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const [location, setLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState("");

  const [photo, setPhoto] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  // ===============================
  // Get GPS location
  // ===============================

  const getLocation = () => {
    setError("");
    setLocationStatus("Getting your location...");

    if (!navigator.geolocation) {
      setLocationStatus("");
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coordinates = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setLocation(coordinates);
        setLocationStatus(
          `Location attached: ${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`
        );
      },
      () => {
        setLocationStatus("");
        setError(
          "Unable to get your location. Please allow location access and try again."
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  };

  // ===============================
  // Photo selection
  // ===============================

  const handlePhotoChange = (event) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setPhoto(selectedFile);
    }
  };

  // ===============================
  // Submit report
  // ===============================

  const handleSubmit = async () => {
    setMessage("");
    setError("");

    if (!type) {
      setError("Please select an incident type.");
      return;
    }

    if (!description.trim()) {
      setError("Please describe what happened.");
      return;
    }

    if (!location) {
      setError("Please attach your GPS location.");
      return;
    }

    setSubmitting(true);

    try {
      const report = {
        type,
        description,
        priority,
        latitude: location.lat,
        longitude: location.lng,
        status: "Pending Verification",
      };

      const response = await fetch("http://localhost:8080/api/incidents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(report),
      });

      if (!response.ok) {
        throw new Error("Failed to submit incident.");
      }

      const savedIncident = await response.json();

      console.log("Incident saved:", savedIncident);

      setMessage(
        `Report submitted successfully. Reference #${savedIncident.id}`
      );

      // Reset form
      setType("");
      setDescription("");
      setPriority("Medium");
      setLocation(null);
      setLocationStatus("");
      setPhoto(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

    } catch (err) {
      console.error("Incident submission error:", err);
      setError(
        "We couldn't submit your report. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-2 text-2xl font-bold text-slate-800">
        Report an Incident
      </h2>

      <p className="mb-6 text-sm text-slate-500">
        Help SAFIRI keep your community safe by reporting incidents.
      </p>

      {/* Incident Type */}

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Incident Type
      </label>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="mb-4 w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-purple-500"
      >
        <option value="">Select incident type</option>
        <option value="Road Accident">Road Accident</option>
        <option value="Traffic Accident">Traffic Accident</option>
        <option value="Traffic Congestion">Traffic Congestion</option>
        <option value="Road Hazard">Road Hazard</option>
        <option value="Vehicle Breakdown">Vehicle Breakdown</option>
        <option value="Flooding">Flooding</option>
        <option value="Fire">Fire</option>
        <option value="Other">Other</option>
      </select>

      {/* Priority */}

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Priority
      </label>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="mb-4 w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-purple-500"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      {/* Photo */}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handlePhotoChange}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="mb-4 flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-purple-300 py-6 text-purple-600 transition hover:bg-purple-50"
      >
        <Camera />

        {photo ? photo.name : "Upload Photo"}
      </button>

      {/* Description */}

      <textarea
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe what happened..."
        className="mb-4 w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-purple-500"
      />

      {/* GPS */}

      <button
        type="button"
        onClick={getLocation}
        className="mb-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 py-3 transition hover:bg-slate-50"
      >
        <MapPin size={18} />

        {locationStatus || "Attach GPS Location"}
      </button>

      {/* Success */}

      {message && (
        <div className="mb-4 flex items-start gap-3 rounded-2xl bg-green-50 p-4 text-green-700">
          <CheckCircle size={20} className="mt-0.5 shrink-0" />

          <p className="text-sm font-medium">
            {message}
          </p>
        </div>
      )}

      {/* Error */}

      {error && (
        <div className="mb-4 flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-red-700">
          <AlertCircle size={20} className="mt-0.5 shrink-0" />

          <p className="text-sm font-medium">
            {error}
          </p>
        </div>
      )}

      {/* Submit */}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-purple-600 py-4 font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={18} />

        {submitting ? "Submitting Report..." : "Submit Report"}
      </button>

    </div>
  );
}