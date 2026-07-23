import Navbar from "../components/citizen/Navbar";
import SearchCard from "../components/citizen/SearchCard";
import RoutePreview from "../components/citizen/RoutePreview";
import PulseCard from "../components/citizen/PulseCard";
import TrafficUpdates from "../components/citizen/TrafficUpdates";
import QuickActions from "../components/citizen/QuickActions";
import SAFICard from "../components/citizen/SAFICard";

export default function CitizenHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100">

      <Navbar />

      <main className="mx-auto flex max-w-7xl flex-col gap-8 p-8">

        <SearchCard />

        <RoutePreview />

        <PulseCard />

        <TrafficUpdates />

        <QuickActions />

        <SAFICard />

      </main>

    </div>
  );
}