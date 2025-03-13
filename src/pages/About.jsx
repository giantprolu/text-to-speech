import React from 'react';
import { Info, Book, MessageSquare as MessageSquareHelp, ExternalLink } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import BackButton from '../components/BackButton';
export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <Info className="h-6 w-6 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">A Propos de Text-to-speech</h1>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Text-to-speech est un puissant outil de conversion de texte en parole qui vous aide à transformer du contenu écrit en paroles naturelles.
            Notre service utilise une technologie avancée pour offrir une synthèse vocale de haute qualité avec des options personnalisables.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Book className="h-5 w-5 mr-2 text-indigo-600" />
                API Documentation
              </h2>
              <p className="text-gray-600 mb-4">
                Notre API est conçue pour être simple et puissante. Accédez à une documentation complète pour intégrer la synthèse vocale à vos applications.
              </p>
              <a
                href="https://cloud.google.com/text-to-speech/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
              >
                Voir la Documentation
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MessageSquareHelp className="h-5 w-5 mr-2 text-indigo-600" />
                Support
              </h2>
              <p className="text-gray-600 mb-4">
                Besoin d'aide ? Notre équipe d'assistance est là pour vous aider en cas de questions ou de problèmes techniques.
              </p>
              <ContactForm />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">Fonctions</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Plusieurs options de voix (masculine et féminine)</li>
            <li>• Vitesse et hauteur de la parole réglables</li>
            <li>• Sortie audio de haute qualité</li>
            <li>• Suivi de l'historique des conversions</li>
            <li>• Téléchargement audio facile</li>
            <li>• Accès à l'API RESTful</li>
          </ul>
        </div>
      </div>
    </div>
  );
}