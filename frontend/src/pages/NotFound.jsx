import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050816] text-white">

      <h1 className="text-7xl font-bold text-purple-500">
        404
      </h1>

      <p className="mt-4 text-xl text-slate-300">
        Looks like you're lost 😅
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-purple-600 px-8 py-4 transition hover:bg-purple-700"
      >
        Go to Citizen App
      </Link>

    </div>
  );
}