import { useEffect, useState } from "react";

export default function Intro({ onFinish }) {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2600);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#050816]">

      <div
        className={`text-center transition-all duration-1000 ${
          showLogo
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75"
        }`}
      >
        <h1 className="text-8xl font-black text-purple-500 drop-shadow-[0_0_40px_rgba(168,85,247,0.9)]">
          💜
        </h1>

        <h2 className="mt-6 text-6xl font-bold text-white tracking-widest">
          SAFIRI
        </h2>

        <p className="mt-4 text-xl text-slate-400">
          Keeping Kenya Moving
        </p>

      </div>

    </div>
  );
}