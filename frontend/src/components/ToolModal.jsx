import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { X } from 'lucide-react';

const ToolModal = ({ tool, isSelected, onToggle, onInstall, children }) => {
  if (!tool) return children;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
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
          {/* Long Description */}
          <p className="coolvetica-font text-white text-lg leading-relaxed">
            {tool.longDescription}
          </p>
          
          {/* Features List */}
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
          
          {/* Summary */}
          {tool.summary && (
            <p className="coolvetica-font text-white text-base leading-relaxed pt-4">
              {tool.summary}
            </p>
          )}
          
          {/* Action Button */}
          <div className="pt-6">
            <Button
              onClick={() => {
                onInstall && onInstall(tool);
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
};

export default ToolModal;