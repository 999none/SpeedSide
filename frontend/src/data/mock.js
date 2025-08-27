// Mock data for SpeedSide application

export const toolsData = {
  necessary: [
    { 
      id: 'beninex', 
      name: 'BenInEx', 
      description: 'Essential modding framework',
      longDescription: 'BepInEx is an open-source framework designed for injecting code into Unity or .NET games.',
      features: [
        'Load plugins (mods) when the game starts.',
        'Intercept and modify behavior of the game\'s code.',
        'Provide an API for mod developers to build on top of.'
      ],
      summary: 'In short, it\'s a modding framework that sits between the game and its engine, allowing custom code to run inside the game.'
    },
    { 
      id: 'save100', 
      name: '100% Save', 
      description: 'Complete save file for speedruns',
      longDescription: '100% Save provides a complete save file with all achievements unlocked and game completed.',
      features: [
        'All levels unlocked and completed.',
        'All achievements and collectibles obtained.',
        'Perfect for practicing speedrun segments.',
        'Skip the lengthy setup process.'
      ],
      summary: 'Perfect starting point for speedrunners who want to practice advanced techniques without playing through the entire game.'
    },
    { 
      id: 'livesplit', 
      name: 'LiveSplit', 
      description: 'Professional speedrun timer',
      longDescription: 'LiveSplit is the most popular and feature-rich speedrunning timer application.',
      features: [
        'Accurate timing with millisecond precision.',
        'Customizable split times and segments.',
        'Live comparison with personal bests.',
        'Integration with streaming software.'
      ],
      summary: 'The industry standard for speedrun timing, used by professionals worldwide for accurate run tracking.'
    }
  ],
  useful: [
    { 
      id: 'kappimod', 
      name: 'Kappimod', 
      description: 'Useful gameplay modifications',
      longDescription: 'Kappimod enhances the MiSide experience with quality-of-life improvements for speedrunners.',
      features: [
        'Enhanced movement mechanics for faster navigation.',
        'Visual indicators for optimal routing.',
        'Reduced loading times and optimizations.',
        'Customizable HUD elements.'
      ],
      summary: 'A collection of helpful modifications that make speedrunning more enjoyable and efficient.'
    },
    { 
      id: 'speedrunmod', 
      name: 'SpeedrunMod', 
      description: 'Speedrun-specific enhancements',
      longDescription: 'SpeedrunMod provides essential tools and features specifically designed for competitive speedrunning.',
      features: [
        'Frame-perfect input assistance.',
        'Advanced routing tools and waypoints.',
        'Performance metrics and statistics.',
        'Practice mode with save states.'
      ],
      summary: 'Professional-grade speedrunning tools for serious competitors looking to optimize their runs.'
    }
  ]
};

export const gameInfo = {
  name: 'MiSide',
  version: 'v0.93L',
  logo: 'https://upload.wikimedia.org/wikipedia/fr/5/5c/Logo_MiSide.png',
  icon: 'https://cdn2.steamgriddb.com/icon/5ae3a95f50aec703990178ea0aaf2da2.ico'
};

export const navigationItems = [
  { name: 'Guide', href: '#guide' },
  { name: 'Support', href: '#support' }
];

// LocalStorage helper functions
export const storageHelpers = {
  getOwnership: () => {
    const stored = localStorage.getItem('owns-miside');
    return stored ? JSON.parse(stored) : null;
  },
  
  setOwnership: (ownsGame) => {
    localStorage.setItem('owns-miside', JSON.stringify(ownsGame));
  },
  
  getSelectedTools: () => {
    const stored = localStorage.getItem('selected-tools');
    return stored ? JSON.parse(stored) : [];
  },
  
  setSelectedTools: (tools) => {
    localStorage.setItem('selected-tools', JSON.stringify(tools));
  },
  
  toggleTool: (toolId) => {
    const current = storageHelpers.getSelectedTools();
    const isSelected = current.includes(toolId);
    
    const updated = isSelected 
      ? current.filter(id => id !== toolId)
      : [...current, toolId];
      
    storageHelpers.setSelectedTools(updated);
    return !isSelected;
  }
};