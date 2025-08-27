import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-6 px-8 flex justify-between items-center relative z-10">
      <Link to="/" className="flex items-center">
        <span className="text-2xl font-bold">
          <span className="text-white dela-font">Speed</span>
          <span className="text-[#C026D3] dela-font">MiSide</span>
        </span>
      </Link>
      
      <nav className="flex items-center space-x-8">
        <Link 
          to="/guide" 
          className="text-white coolvetica-font hover:text-[#C026D3] transition-colors duration-200"
        >
          Guide
        </Link>
        <Link 
          to="/support" 
          className="text-white coolvetica-font hover:text-[#C026D3] transition-colors duration-200"
        >
          Support
        </Link>
      </nav>
    </header>
  );
};

export default Header;