import StateBar from "../components/dashboard/StateBar";
import LiveMap from "../components/dashboard/LiveMap";

export default function DashboardHome({
  incidents,
  onMapClick,
}) {
  return (
    <div className="space-y-8">

      <StateBar incidents={incidents} />

      <LiveMap
        incidents={incidents}
        onMapClick={onMapClick}
      />

    </div>
  );
}