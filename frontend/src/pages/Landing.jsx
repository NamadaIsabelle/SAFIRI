import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Car, Shield, ArrowRight } from "lucide-react";
import SAFIOrb from "../components/citizen/SAFIOrb";

export default function Landing() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#2E1065] via-[#4C1D95] to-[#0F172A] transition-all duration-1000 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-purple-500 opacity-20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-500 opacity-20 blur-[180px]" />

      {/* Floating Glow */}
      <div className="absolute left-20 top-32 h-72 w-72 animate-pulse rounded-full bg-purple-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-80 w-80 animate-pulse rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[130px]" />

      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_40%)] animate-pulse" />

      <div className="relative z-10 w-full max-w-6xl px-8">
        {/* Heading */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            loaded
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-7xl font-black tracking-wider text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
            💜 SAFIRI
          </h1>

          <p className="mt-6 text-2xl text-purple-100">
            AI Smart Traffic Management Platform
          </p>

          <p className="mt-2 text-lg text-slate-300">
            Keeping Kenya Moving
          </p>

          <div className="mt-8 flex justify-center">
            <div className="rounded-full border border-purple-400/30 bg-white/10 px-6 py-3 backdrop-blur-xl">
              <p className="text-purple-200">
                🤖 Powered by AI • Real-Time Traffic Intelligence
              </p>
            </div>
          </div>
        </div>

        {/* Portal Cards */}
        <div
          className={`grid gap-10 md:grid-cols-2 transition-all duration-1000 delay-300 ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          {/* Citizen */}
          <div className="group rounded-[35px] border border-white/20 bg-white/10 p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-purple-400/50 hover:bg-white/20">
            <Car
              size={60}
              className="mb-6 text-purple-300 transition duration-500 group-hover:scale-110 group-hover:rotate-6"
            />

            <h2 className="text-4xl font-bold text-white">
              Citizen Portal
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              Navigate Nairobi smarter.
              <br />
              Report incidents.
              <br />
              Receive AI-powered traffic updates.
            </p>

            <Link
              to="/citizen"
              className="mt-10 flex w-fit items-center gap-3 rounded-2xl bg-purple-600 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-500/40"
            >
              Enter
              <ArrowRight />
            </Link>
          </div>

          {/* Admin */}
          <div className="group rounded-[35px] border border-white/20 bg-white/10 p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:bg-white/20">
            <Shield
              size={60}
              className="mb-6 text-cyan-300 transition duration-500 group-hover:scale-110 group-hover:-rotate-6"
            />

            <h2 className="text-4xl font-bold text-white">
              Operations Center
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              Monitor Nairobi.
              <br />
              Dispatch officers.
              <br />
              AI-powered incident management.
            </p>

            <Link
              to="/admin"
              className="mt-10 flex w-fit items-center gap-3 rounded-2xl bg-cyan-600 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-500/40"
            >
              Enter
              <ArrowRight />
            </Link>
          </div>
        </div>

        {/* SAFI */}
        <div className="mx-auto mt-16 max-w-3xl rounded-[30px] border border-purple-400/20 bg-white/10 p-8 backdrop-blur-xl transition duration-500 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20">
          <div className="flex items-center gap-6">
            <SAFIOrb />

            <div>
              <h2 className="text-3xl font-bold text-white">
                Hi, I'm SAFI
              </h2>

              <p className="mt-2 text-slate-200">
                Which portal would you like to enter today?
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-purple-200">
          Safiri Salama 💜
        </p>
      </div>
    </div>
  );
}