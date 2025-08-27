import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const Check = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleOwnershipChoice = (ownsGame) => {
    // Store in localStorage
    localStorage.setItem('owns-miside', JSON.stringify(ownsGame));
    
    // Show toast notification
    toast({
      title: ownsGame ? "Great! You already own MiSide" : "No problem! We'll help you get started",
      duration: 2000,
    });

    // Navigate to utility page after short delay
    setTimeout(() => {
      navigate('/utility');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* MiSide Icon */}
        <div className="flex justify-center mb-12 fade-up">
          <img 
            src="https://cdn2.steamgriddb.com/icon/5ae3a95f50aec703990178ea0aaf2da2.ico" 
            alt="MiSide Icon" 
            className="w-32 h-32 object-contain pulse-glow rounded-full"
          />
        </div>

        {/* Question Title */}
        <h1 className="dela-font text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-16 fade-up-delay-1">
          Do you already own a<br />
          version of MiSide ?
        </h1>

        {/* Choice Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center fade-up-delay-2">
          <Button 
            onClick={() => handleOwnershipChoice(true)}
            className="dela-font bg-white text-black hover:bg-gray-100 text-2xl px-16 py-8 rounded-full h-auto min-w-[200px] transform hover:-translate-y-1 transition-all duration-200 active:translate-y-0"
          >
            yes
          </Button>
          
          <Button 
            onClick={() => handleOwnershipChoice(false)}
            className="dela-font bg-black text-white border-2 border-white hover:bg-gray-900 text-2xl px-16 py-8 rounded-full h-auto min-w-[200px] transform hover:-translate-y-1 transition-all duration-200 active:translate-y-0"
          >
            no
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Check;