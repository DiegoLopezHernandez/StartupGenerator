import LogoGenerator from './LogoGenerator';

const StartupCard = ({ startup }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-xl w-full shadow-2xl">
      <LogoGenerator logo={startup.logo} name={startup.name} />

      <h1 className="text-4xl font-black text-white text-center mb-1 tracking-tight">
        {startup.name}
      </h1>

      <div className="flex justify-center mb-4">
        <span className="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/30">
          {startup.sector}
        </span>
      </div>

      <p className="text-gray-300 text-center italic text-sm mb-6 leading-relaxed">
        "{startup.slogan}"
      </p>

      <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
          Elevator Pitch
        </p>
        <p className="text-gray-200 text-sm leading-relaxed font-mono">
          {startup.pitch}
        </p>
      </div>
    </div>
  );
};

export default StartupCard;