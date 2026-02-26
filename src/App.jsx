import { useState, useEffect } from 'react';
import StartupCard from './components/StartupCard';
import ShareButton from './components/ShareButton';
import { generateStartup } from './utils/generator';

const LOADING_MESSAGES = [
  "Calculando TAM...",
  "Buscando inversores ángel...",
  "Inventando métricas...",
  "Pivotando el modelo de negocio...",
  "Añadiendo blockchain...",
  "Consultando con advisors...",
  "Redactando el deck de 47 slides...",
  "Disruptando el mercado...",
  "Alineando stakeholders...",
  "Activando flywheel loops...",
  "Democratizando sinergias...",
  "Calculando runway...",
  "Buscando co-founder en LinkedIn...",
  "Registrando dominio .io...",
  "Contratando a 3 ex-googlers...",
];

const getCounter = () => {
  const stored = localStorage.getItem('startups_generated');
  return stored ? parseInt(stored) : 0;
};

const incrementCounter = () => {
  const current = getCounter();
  const next = current + 1;
  localStorage.setItem('startups_generated', next);
  return next;
};

function App() {
  const [startup, setStartup] = useState(generateStartup());
  const [animating, setAnimating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');
  const [counter, setCounter] = useState(getCounter());

  const handleGenerate = () => {
    if (loading) return;

    setLoading(true);
    setAnimating(true);

    const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
    setLoadingMsg(rand(LOADING_MESSAGES));

    const msgInterval = setInterval(() => {
      setLoadingMsg(rand(LOADING_MESSAGES));
    }, 400);

    setTimeout(() => {
      clearInterval(msgInterval);
      setStartup(generateStartup());
      const newCount = incrementCounter();
      setCounter(newCount);
      setLoading(false);
      setAnimating(false);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6">
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-black text-white mb-2 tracking-tight">
          🚀 Startup<span className="text-indigo-400">Generator</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Tu próximo unicornio, en un clic.
        </p>
        <div className="mt-3 inline-flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-full px-4 py-1.5">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-gray-300 text-xs font-mono">
            {counter.toLocaleString()} startup{counter !== 1 ? 's' : ''} generada{counter !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      <div className={`transition-all duration-300 w-full max-w-xl ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {loading ? (
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-xl w-full shadow-2xl flex flex-col items-center justify-center min-h-64 gap-4">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-3 h-3 bg-indigo-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
            <p className="text-indigo-300 font-mono text-sm text-center min-h-6 transition-all duration-200">
              {loadingMsg}
            </p>
          </div>
        ) : (
          <>
            <StartupCard startup={startup} />
            <ShareButton startup={startup} />
          </>
        )}
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className={`mt-8 font-black text-lg py-4 px-10 rounded-2xl shadow-lg transition-all duration-200
          ${loading
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed shadow-none'
            : 'bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white shadow-indigo-500/25'
          }`}
      >
        {loading ? '⏳ Fundando empresa...' : '⚡ Generar startup'}
      </button>

      <p className="text-gray-600 text-xs mt-8">
        Ningún inversor fue dañado en la creación de esta app.
      </p>
    </div>
  );
}

export default App;