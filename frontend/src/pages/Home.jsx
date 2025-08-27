import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/check');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-6xl mx-auto">
        {/* Hero Title */}
        <h1 className="dela-font text-white text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 fade-up">
          THE BEST WAY TO
          <br />
          START SPEEDRUN
        </h1>

        {/* MiSide Logo */}
        <div className="flex justify-center mb-8 fade-up-delay-1">
          <img 
            src="https://upload.wikimedia.org/wikipedia/fr/5/5c/Logo_MiSide.png" 
            alt="MiSide Logo" 
            className="h-24 md:h-32 object-contain float-animation"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(192, 38, 211, 0.3))'
            }}
          />
        </div>

        {/* Description */}
        <p className="coolvetica-font text-white text-lg md:text-xl mb-12 max-w-2xl mx-auto fade-up-delay-2">
          Install the tool you need and start your first runs on MiSide
        </p>

        {/* CTA Button */}
        <div className="fade-up-delay-3">
          <Button 
            onClick={handleStartClick}
            className="dela-font bg-white text-black hover:bg-gray-100 text-xl px-12 py-6 rounded-full h-auto transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200 active:translate-y-0"
          >
            start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;