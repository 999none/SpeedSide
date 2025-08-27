import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ChevronDown, ChevronUp, Clock, Trophy, Settings, Target } from 'lucide-react';

const Guide = () => {
  const [openSection, setOpenSection] = useState('installation');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const Section = ({ id, title, icon: Icon, children }) => (
    <Card className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border-[3px] border-[#3A4464] rounded-3xl p-6 mb-6">
      <Button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between bg-transparent hover:bg-[rgba(255,255,255,0.05)] text-white text-left p-4 rounded-2xl border-none"
      >
        <div className="flex items-center gap-3">
          <Icon className="h-6 w-6 text-[#C026D3]" />
          <h2 className="dela-font text-xl md:text-2xl">{title}</h2>
        </div>
        {openSection === id ? 
          <ChevronUp className="h-6 w-6 text-[#C026D3]" /> : 
          <ChevronDown className="h-6 w-6 text-[#C026D3]" />
        }
      </Button>
      {openSection === id && (
        <div className="mt-6 space-y-4 coolvetica-font text-white">
          {children}
        </div>
      )}
    </Card>
  );

  return (
    <div className="min-h-screen px-8 pt-20 pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <h1 className="dela-font text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            MISIDE GUIDE
          </h1>
          <p className="coolvetica-font text-white text-xl">
            Everything you need to know about MiSide speedrunning
          </p>
        </div>

        {/* Installation Guide */}
        <Section id="installation" title="Installation des Outils" icon={Settings}>
          <div className="space-y-6">
            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Étape 1: Installation de MiSide</h3>
              <p className="mb-2">Téléchargez MiSide version 0.93L depuis Steam:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Version requise: 0.93L (version officielle)</li>
                <li>Plateforme: PC uniquement</li>
                <li>Taille: ~2.5GB</li>
              </ul>
            </div>

            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Étape 2: BepInEx Framework</h3>
              <p className="mb-2">BepInEx est requis pour les mods:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Téléchargez BepInEx 5.4.22 (x64)</li>
                <li>Extraire dans le dossier racine de MiSide</li>
                <li>Lancez le jeu une fois pour initialiser</li>
                <li>Vérifiez que le dossier plugins est créé</li>
              </ol>
            </div>

            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Étape 3: LiveSplit Setup</h3>
              <p className="mb-2">Configuration du timer officiel:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Téléchargez LiveSplit depuis livesplit.org</li>
                <li>Créez un nouveau Layout</li>
                <li>Ajoutez les splits par défaut MiSide</li>
                <li>Configurez le Global Hotkey (F1 par défaut)</li>
                <li>Activez Game Time si disponible</li>
              </ol>
            </div>

            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Étape 4: Mods Utiles</h3>
              <p className="mb-2">Mods recommandés pour le speedrun:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>KappiMod:</strong> Améliorations de gameplay</li>
                <li><strong>SpeedrunMod:</strong> Outils spécialisés</li>
                <li><strong>MitaSplit:</strong> Auto-splitter pour LiveSplit</li>
                <li><strong>Save 100%:</strong> Save complete pour la pratique</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Speedrun Rules */}
        <Section id="rules" title="Règles Officielles" icon={Trophy}>
          <div className="space-y-6">
            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Catégories Principales</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#C026D3]">Any% (57m 44s WR)</h4>
                  <p>Finir le jeu le plus rapidement possible avec n'importe quelle fin.</p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Normal Ending (recommandé)</li>
                    <li>Safe Ending</li>
                    <li>Stay Ending</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#C026D3]">Any% Glitch</h4>
                  <p>Permet l'utilisation de tous les glitches et exploits.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#C026D3]">All Achievements</h4>
                  <p>Débloquer tous les succès du jeu.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-[#C026D3]">Kappimod Category</h4>
                  <p>Catégorie spéciale utilisant KappiMod.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Règles Générales</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Version 0.93L obligatoire</li>
                <li>Timer doit commencer au gain de contrôle</li>
                <li>Timer s'arrête à la fin choisie</li>
                <li>Enregistrement vidéo requis</li>
                <li>Audio du jeu obligatoire</li>
                <li>Pas de savestates pendant le run</li>
              </ul>
            </div>

            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Taux de Rafraîchissement</h3>
              <p className="mb-2">Le taux de rafraîchissement affecte la vitesse de déplacement:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>60Hz: Vitesse de base</li>
                <li>144Hz+: Vitesse plus rapide</li>
                <li>Annotation obligatoire lors de la soumission</li>
                <li>Catégories séparées si nécessaire</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Speedrun Strategies */}
        <Section id="strategies" title="Stratégies & Techniques" icon={Target}>
          <div className="space-y-6">
            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Route Optimisée Any%</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Intro Skip:</strong> Spam clic pour passer les dialogues</li>
                <li><strong>Navigation Rapide:</strong> Utilisation optimale du menu</li>
                <li><strong>Dialogue Skip:</strong> Techniques d'interruption</li>
                <li><strong>Movement Tech:</strong> Optimisation des déplacements</li>
                <li><strong>Ending Route:</strong> Chemin vers Normal Ending</li>
              </ol>
            </div>

            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Techniques Avancées</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Menu Buffering:</strong> Inputs pendant les transitions</li>
                <li><strong>Text Skip Glitch:</strong> Skip rapide des dialogues</li>
                <li><strong>Camera Manipulation:</strong> Optimisation des angles</li>
                <li><strong>Loading Optimization:</strong> Techniques de chargement</li>
              </ul>
            </div>

            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Splits Recommandés</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Start Game</li>
                <li>First Choice</li>
                <li>Chapter 1 Complete</li>
                <li>Mid-Game Checkpoint</li>
                <li>Final Chapter</li>
                <li>Ending Trigger</li>
              </ul>
            </div>

            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Temps de Référence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold">Beginner Goals:</h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Sub 1:30:00</li>
                    <li>Sub 1:15:00</li>
                    <li>Sub 1:10:00</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Advanced Goals:</h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Sub 1:05:00</li>
                    <li>Sub 1:00:00</li>
                    <li>Sub 58:00 (Top 10)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Community */}
        <Section id="community" title="Communauté & Ressources" icon={Clock}>
          <div className="space-y-6">
            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Liens Officiels</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Speedrun.com:</strong> Classements officiels</li>
                <li><strong>Discord:</strong> discord.gg/U6gYKB7eDx</li>
                <li><strong>Steam Page:</strong> Store officiel MiSide</li>
                <li><strong>Extensions:</strong> Catégories supplémentaires</li>
              </ul>
            </div>

            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Modérateurs Actifs</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Panzer564:</strong> Super Modérateur</li>
                <li><strong>SenaYT:</strong> Modérateur</li>
              </ul>
            </div>

            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Ressources d'Apprentissage</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>VODs des world records</li>
                <li>Guides vidéo par les top runners</li>
                <li>Route notes et strats</li>
                <li>Practice saves et segments</li>
              </ul>
            </div>

            <div>
              <h3 className="dela-font text-lg mb-3 text-[#C026D3]">Statistiques</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-[rgba(192,38,211,0.1)] rounded-xl p-3">
                  <div className="dela-font text-2xl text-[#C026D3]">612</div>
                  <div className="text-sm">Followers</div>
                </div>
                <div className="bg-[rgba(192,38,211,0.1)] rounded-xl p-3">
                  <div className="dela-font text-2xl text-[#C026D3]">1,880</div>
                  <div className="text-sm">Runs</div>
                </div>
                <div className="bg-[rgba(192,38,211,0.1)] rounded-xl p-3">
                  <div className="dela-font text-2xl text-[#C026D3]">472</div>
                  <div className="text-sm">Players</div>
                </div>
                <div className="bg-[rgba(192,38,211,0.1)] rounded-xl p-3">
                  <div className="dela-font text-2xl text-[#C026D3]">57:44</div>
                  <div className="text-sm">WR Time</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Guide;