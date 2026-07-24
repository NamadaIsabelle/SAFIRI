import Navbar from "../../components/citizen/Navbar";
import RoutePlanner from "../../components/citizen/RoutePlanner";
import RoutePreview from "../../components/citizen/RoutePreview";
import TrafficPulse from "../../components/citizen/TrafficPulse";
import SAFICard from "../../components/citizen/SAFICard";
import ReportCard from "../../components/citizen/ReportCard";

export default function CitizenHome() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="mx-auto grid max-w-7xl gap-8 p-8 lg:grid-cols-3">

        {/* Left */}

        <div className="space-y-8">

          <RoutePlanner />

          <TrafficPulse />

        </div>

        {/* Center */}

        <div className="lg:col-span-2 space-y-8">

          <RoutePreview />

          <SAFICard />

          <ReportCard />

        </div>

      </div>

    </div>
  );
}