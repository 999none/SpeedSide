// Mock data for SpeedSide application

export const toolsData = {
  necessary: [
    { id: 'beninex', name: 'BenInEx', description: 'Essential modding framework' },
    { id: 'save100', name: '100% Save', description: 'Complete save file for speedruns' },
    { id: 'livesplit', name: 'LiveSplit', description: 'Speedrun timer application' }
  ],
  useful: [
    { id: 'kappimod', name: 'Kappimod', description: 'Useful gameplay modifications' },
    { id: 'speedrunmod', name: 'SpeedrunMod', description: 'Speedrun-specific enhancements' }
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