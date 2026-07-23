import { Sparkles } from "lucide-react";

export default function SAFICard() {

  return (

    <div className="rounded-3xl bg-gradient-to-r from-purple-700 to-violet-600 p-8 text-white shadow-xl">

      <div className="flex items-center gap-3">

        <div className="rounded-full bg-white/20 p-3">

          <Sparkles size={28} />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Hi, I'm SAFI 💜
          </h2>

          <p className="text-purple-100">
            Your smart travel companion.
          </p>

        </div>

      </div>

      <div className="mt-6 rounded-2xl bg-white/10 p-5">

        <p className="text-lg leading-relaxed">

          🚦 Pole pole!

          <br /><br />

          Mombasa Road is packed.

          I've found a quicker route through Likoni Road.

          You'll save about 8 minutes.

        </p>

      </div>

      <p className="mt-5 text-purple-200">

        💜 Safiri Salama.

      </p>

    </div>

  );

}