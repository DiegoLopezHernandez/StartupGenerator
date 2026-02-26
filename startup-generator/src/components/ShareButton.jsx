const ShareButton = ({ startup }) => {
  const handleShare = () => {
    const text = `🚀 Acabo de fundar ${startup.name}\n"${startup.slogan}"\n\nSector: ${startup.sector}\n\n¿Inviertes? 😂 #StartupGenerator`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleCopy = () => {
    const text = `${startup.name}\n"${startup.slogan}"\n${startup.sector}\n\n${startup.pitch}`;
    navigator.clipboard.writeText(text);
    alert('¡Copiado al portapapeles!');
  };

  return (
    <div className="flex gap-3 mt-6">
      <button
        onClick={handleCopy}
        className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3 px-4 rounded-xl border border-gray-600 transition-all duration-200 text-sm"
      >
        📋 Copiar
      </button>
      <button
        onClick={handleShare}
        className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-sm"
      >
        🐦 Compartir en X
      </button>
    </div>
  );
};

export default ShareButton;