import Sidebar from "../components/layout/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <main className="flex-1 flex items-center justify-center text-4xl">
        Dashboard Works 🎉
      </main>
    </div>
  );
}