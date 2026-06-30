export default function Header() {
  return (
    <header className="h-20 border-b border-slate-700 bg-[#0B1220] px-8 flex items-center justify-between">

      <div>
        <h1 className="text-2xl font-bold text-white">
          SAFIRI
        </h1>

        <p className="text-sm text-slate-400">
          Nairobi Traffic Operations Center
        </p>
      </div>

      <div className="flex items-center gap-6">

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>

          <span className="text-green-300 font-medium">
            LIVE
          </span>
        </div>

        <div className="text-slate-300">
          {new Date().toLocaleTimeString()}
        </div>

      </div>
    </header>
  );
}