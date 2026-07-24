import StateBar from "../../components/dashboard/StateBar";
import LiveMap from "../../components/dashboard/LiveMap";
import IncidentFeed from "../../components/dashboard/IncidentFeed";

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