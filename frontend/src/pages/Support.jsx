import React from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';
import { 
  MessageCircle, 
  Mail, 
  AlertCircle, 
  FileText, 
  Download,
  ExternalLink,
  HelpCircle,
  Bug,
  Settings,
  Users
} from 'lucide-react';

const Support = () => {
  const { toast } = useToast();

  const handleContactSubmit = () => {
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les 24-48h",
      duration: 3000,
    });
  };

  const SupportCard = ({ icon: Icon, title, description, action, actionText, external = false }) => (
    <Card className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border-[3px] border-[#3A4464] rounded-3xl p-6 hover:border-[#C026D3] transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="bg-[#C026D3] bg-opacity-20 rounded-full p-3">
          <Icon className="h-6 w-6 text-[#C026D3]" />
        </div>
        <div className="flex-1">
          <h3 className="dela-font text-white text-xl mb-2">{title}</h3>
          <p className="coolvetica-font text-gray-300 mb-4">{description}</p>
          <Button
            onClick={action}
            className="dela-font bg-[#C026D3] hover:bg-[#B025C2] text-white px-6 py-2 rounded-full transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2"
          >
            {actionText}
            {external && <ExternalLink className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </Card>
  );

  const FAQItem = ({ question, answer }) => (
    <Card className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border-2 border-[#3A4464] rounded-2xl p-4 mb-4">
      <h4 className="dela-font text-white text-lg mb-2">{question}</h4>
      <p className="coolvetica-font text-gray-300">{answer}</p>
    </Card>
  );

  return (
    <div className="min-h-screen px-8 pt-20 pb-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <h1 className="dela-font text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            SUPPORT
          </h1>
          <p className="coolvetica-font text-white text-xl">
            Besoin d'aide ? Nous sommes là pour vous accompagner !
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 fade-up-delay-1">
          <SupportCard
            icon={MessageCircle}
            title="Discord Community"
            description="Rejoignez notre serveur Discord pour une aide rapide et échangez avec la communauté."
            actionText="Rejoindre Discord"
            action={() => window.open('https://discord.gg/U6gYKB7eDx', '_blank')}
            external={true}
          />
          
          <SupportCard
            icon={FileText}
            title="Documentation"
            description="Consultez notre guide complet avec toutes les informations nécessaires."
            actionText="Voir le Guide"
            action={() => window.location.href = '/guide'}
          />
          
          <SupportCard
            icon={Download}
            title="Téléchargements"
            description="Tous les outils et mods nécessaires pour le speedrunning MiSide."
            actionText="Utility Tools"
            action={() => window.location.href = '/utility'}
          />
        </div>

        {/* FAQ Section */}
        <div className="mb-12 fade-up-delay-2">
          <h2 className="dela-font text-white text-3xl md:text-4xl text-center mb-8">
            Questions Fréquentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FAQItem
                question="Comment installer BepInEx ?"
                answer="Téléchargez BepInEx 5.4.22 x64, extrayez dans le dossier MiSide, lancez le jeu une fois pour l'initialiser."
              />
              
              <FAQItem
                question="Quelle version de MiSide utiliser ?"
                answer="Version 0.93L obligatoire pour les speedruns officiels. Disponible sur Steam."
              />
              
              <FAQItem
                question="LiveSplit ne fonctionne pas ?"
                answer="Vérifiez que les Global Hotkeys sont bien configurés et qu'aucun autre logiciel n'interfère."
              />
            </div>
            
            <div>
              <FAQItem
                question="Mon run n'a pas été accepté ?"
                answer="Vérifiez les règles sur Speedrun.com : vidéo complète, audio, version correcte, et timing précis requis."
              />
              
              <FAQItem
                question="Différence entre les catégories ?"
                answer="Any% = finir rapidement, Glitch = tous exploits autorisés, All Achievements = tous succès."
              />
              
              <FAQItem
                question="Problème avec KappiMod ?"
                answer="Assurez-vous que BepInEx est correctement installé et que vous utilisez la dernière version du mod."
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border-[3px] border-[#3A4464] rounded-3xl p-8 mb-12 fade-up-delay-3">
          <div className="text-center mb-8">
            <Mail className="h-12 w-12 text-[#C026D3] mx-auto mb-4" />
            <h2 className="dela-font text-white text-3xl mb-2">Contactez-nous</h2>
            <p className="coolvetica-font text-gray-300">
              Un problème spécifique ? Envoyez-nous un message détaillé
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="bg-[rgba(255,255,255,0.05)] border-2 border-[#3A4464] rounded-full px-6 py-3 text-white coolvetica-font focus:border-[#C026D3] outline-none"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="bg-[rgba(255,255,255,0.05)] border-2 border-[#3A4464] rounded-full px-6 py-3 text-white coolvetica-font focus:border-[#C026D3] outline-none"
              />
            </div>
            
            <select className="w-full bg-[rgba(255,255,255,0.05)] border-2 border-[#3A4464] rounded-full px-6 py-3 text-white coolvetica-font focus:border-[#C026D3] outline-none">
              <option value="">Type de problème</option>
              <option value="installation">Problème d'installation</option>
              <option value="speedrun">Question speedrun</option>
              <option value="mod">Problème avec un mod</option>
              <option value="submission">Soumission de run</option>
              <option value="other">Autre</option>
            </select>
            
            <textarea
              placeholder="Décrivez votre problème en détail..."
              rows="5"
              className="w-full bg-[rgba(255,255,255,0.05)] border-2 border-[#3A4464] rounded-2xl px-6 py-4 text-white coolvetica-font focus:border-[#C026D3] outline-none resize-none"
            ></textarea>
            
            <Button
              onClick={handleContactSubmit}
              className="dela-font w-full bg-[#C026D3] hover:bg-[#B025C2] text-white text-lg py-4 rounded-full transform hover:-translate-y-1 transition-all duration-200"
            >
              Envoyer le Message
            </Button>
          </div>
        </Card>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-up-delay-4">
          <SupportCard
            icon={Bug}
            title="Signaler un Bug"
            description="Trouvé un problème ? Aidez-nous à l'améliorer."
            actionText="Report Bug"
            action={() => toast({
              title: "Merci !",
              description: "Votre rapport sera examiné",
              duration: 2000,
            })}
          />
          
          <SupportCard
            icon={Settings}
            title="Configurations"
            description="Paramètres recommandés pour une expérience optimale."
            actionText="Voir Config"
            action={() => window.location.href = '/guide'}
          />
          
          <SupportCard
            icon={Users}
            title="Communauté"
            description="Rejoignez les discussions sur Speedrun.com"
            actionText="Forums"
            action={() => window.open('https://www.speedrun.com/fr-FR/MiSide/forums', '_blank')}
            external={true}
          />
          
          <SupportCard
            icon={HelpCircle}
            title="Aide Générale"
            description="Besoin d'aide ? Notre équipe est disponible 24/7."
            actionText="Chat Support"
            action={() => toast({
              title: "Chat bientôt disponible",
              description: "En attendant, utilisez Discord",
              duration: 2000,
            })}
          />
        </div>

        {/* Emergency Contact */}
        <Card className="bg-gradient-to-r from-[rgba(192,38,211,0.1)] to-[rgba(192,38,211,0.05)] border-2 border-[#C026D3] rounded-3xl p-6 text-center mt-12">
          <AlertCircle className="h-8 w-8 text-[#C026D3] mx-auto mb-3" />
          <h3 className="dela-font text-white text-xl mb-2">Problème Urgent ?</h3>
          <p className="coolvetica-font text-gray-300 mb-4">
            Pour les problèmes critiques ou urgents, contactez directement les modérateurs sur Discord
          </p>
          <Button
            onClick={() => window.open('https://discord.gg/U6gYKB7eDx', '_blank')}
            className="dela-font bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-full"
          >
            Contact d'Urgence
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Support;