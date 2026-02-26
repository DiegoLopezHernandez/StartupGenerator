const LogoGenerator = ({ logo, name }) => {
  const initials = name.replace(/[^a-zA-Z]/g, '').slice(0, 2).toUpperCase();
  const [color1, color2] = logo.colors;
  const gradientStyle = {
    background: `linear-gradient(135deg, ${color1}, ${color2})`,
  };

  const shapes = {
    circle: 'rounded-full',
    hexagon: 'rounded-2xl rotate-12',
    triangle: 'rounded-xl rotate-45',
    square: 'rounded-xl',
    diamond: 'rounded-lg rotate-45',
  };

  return (
    <div className="flex justify-center mb-4">
      <div
        className={`w-20 h-20 flex items-center justify-center shadow-2xl ${shapes[logo.shape]}`}
        style={gradientStyle}
      >
        <span
          className={`text-white font-black text-2xl ${logo.shape === 'diamond' || logo.shape === 'triangle' ? '-rotate-45' : ''}`}
        >
          {initials}
        </span>
      </div>
    </div>
  );
};

export default LogoGenerator;