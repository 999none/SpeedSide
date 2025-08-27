import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { useToast } from '../hooks/use-toast';
import { toolsData } from '../data/mock';
import { Info } from 'lucide-react';

const Utility = () => {
  const [selectedTools, setSelectedTools] = useState([]);
  const [ownsGame, setOwnsGame] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    // Load from localStorage
    const savedTools = localStorage.getItem('selected-tools');
    const savedOwnership = localStorage.getItem('owns-miside');
    
    if (savedTools) {
      setSelectedTools(JSON.parse(savedTools));
    }
    if (savedOwnership) {
      setOwnsGame(JSON.parse(savedOwnership));
    }
  }, []);

  const necessaryTools = toolsData.necessary;
  const usefulTools = toolsData.useful;

  const handleToolToggle = (toolId, toolName) => {
    let newSelectedTools;
    
    if (selectedTools.includes(toolId)) {
      newSelectedTools = selectedTools.filter(id => id !== toolId);
      toast({
        title: `Removed ${toolName}`,
        description: "Tool removed from selection",
        duration: 2000,
      });
    } else {
      newSelectedTools = [...selectedTools, toolId];
      toast({
        title: `Added ${toolName}`,
        description: "Tool added to selection",
        duration: 2000,
      });
    }
    
    setSelectedTools(newSelectedTools);
    localStorage.setItem('selected-tools', JSON.stringify(newSelectedTools));
  };

  const handleInstallMiSide = () => {
    toast({
      title: "Starting installation of MiSide v0.93L (demo)",
      description: "This is a demonstration of the installation process",
      duration: 3000,
    });
  };

  const handleInstallTool = (tool) => {
    // Toggle tool selection
    const isCurrentlySelected = selectedTools.includes(tool.id);
    handleToolToggle(tool.id, tool.name);
    
    // Show install toast
    toast({
      title: `Installing ${tool.name}...`,
      description: "Installation started (demo mode)",
      duration: 3000,
    });
  };

  const ToolButton = ({ tool, isSelected, onClick, className = "" }) => (
    <div className="relative">
      <Button
        onClick={onClick}
        className={`
          dela-font text-lg h-[72px] max-w-[360px] w-full rounded-full border-3 
          transform hover:-translate-y-1 transition-all duration-200 active:translate-y-0
          ${isSelected 
            ? 'bg-[#C026D3] text-white border-[#C026D3] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' 
            : 'bg-transparent text-white border-[#5A6484] hover:border-[#C026D3] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
          } ${className}
        `}
      >
        {tool.name}
      </Button>
      
      {/* Info Button */}
      <Button
        className="absolute top-2 right-2 w-6 h-6 p-0 bg-[#C026D3] hover:bg-[#B025C2] text-white rounded-full z-10"
        onClick={(e) => {
          e.stopPropagation();
          setOpenModal(tool.id);
        }}
      >
        <Info className="h-3 w-3" />
      </Button>
    </div>
  );

  const ToolModal = ({ tool, isOpen, onClose }) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#1B1E34] border-[3px] border-[#3A4464] rounded-3xl max-w-3xl w-full mx-4 p-8">
        <DialogHeader className="text-center mb-6">
          <DialogTitle className="dela-font text-white text-4xl md:text-5xl mb-4">
            {tool.name}
          </DialogTitle>
          <p className="coolvetica-font text-white text-lg">
            What is {tool.name}?
          </p>
        </DialogHeader>
        
        <div className="space-y-6 text-center">
          <p className="coolvetica-font text-white text-lg leading-relaxed">
            {tool.longDescription}
          </p>
          
          {tool.features && (
            <div className="space-y-4">
              <p className="coolvetica-font text-white text-base">
                It is mainly used to:
              </p>
              <div className="space-y-3">
                {tool.features.map((feature, index) => (
                  <p key={index} className="coolvetica-font text-white text-base">
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          )}
          
          {tool.summary && (
            <p className="coolvetica-font text-white text-base leading-relaxed pt-4">
              {tool.summary}
            </p>
          )}
          
          <div className="pt-6">
            <Button
              onClick={() => {
                handleInstallTool(tool);
                onClose(false);
              }}
              className="dela-font bg-white text-black hover:bg-gray-100 text-xl px-8 py-4 rounded-full h-auto transform hover:-translate-y-1 transition-all duration-200 active:translate-y-0"
            >
              Install {tool.name}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-20 pb-12">
      <div className="text-center max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-16 fade-up">
          <h1 className="dela-font text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            MISIDE UTILITY
          </h1>
          <p className="coolvetica-font text-white text-xl">
            Chose the tools you want to install !
          </p>
        </div>

        {/* Tools Container Card */}
        <Card className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border-[3px] border-[#3A4464] rounded-3xl p-8 md:p-12 fade-up-delay-1">
          {/* Necessary Utility Section */}
          <div className="mb-16">
            <h2 className="dela-font text-white text-2xl md:text-3xl mb-8">
              Necessary Utility:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {necessaryTools.map((tool) => (
                <ToolButton
                  key={tool.id}
                  tool={tool}
                  isSelected={selectedTools.includes(tool.id)}
                  onClick={() => handleToolToggle(tool.id, tool.name)}
                />
              ))}
            </div>
          </div>

          {/* Useful Utility Section */}
          <div className="mb-12">
            <h2 className="dela-font text-white text-2xl md:text-3xl mb-8">
              Useful Utility:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 justify-center max-w-4xl mx-auto">
              {usefulTools.map((tool) => (
                <ToolButton
                  key={tool.id}
                  tool={tool}
                  isSelected={selectedTools.includes(tool.id)}
                  onClick={() => handleToolToggle(tool.id, tool.name)}
                  className="max-w-[520px]"
                />
              ))}
            </div>
          </div>

          {/* Install MiSide Section (shown only if user doesn't own the game) */}
          {ownsGame === false && (
            <div className="pt-8 border-t border-[#3A4464] fade-up-delay-2">
              <p className="coolvetica-font text-white text-lg mb-6">
                You can install MiSide by clicking here
              </p>
              <Button
                onClick={handleInstallMiSide}
                className="dela-font bg-[#C026D3] hover:bg-[#B025C2] text-white text-lg px-8 py-4 rounded-full h-auto transform hover:-translate-y-1 transition-all duration-200 active:translate-y-0"
              >
                Install MiSide v0.93L
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Utility;