import { Link } from 'react-router-dom';
import { Headphones, ArrowRight } from 'lucide-react';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl">
        <div className="mb-8">
          <div className="bg-indigo-100 p-4 rounded-full inline-block">
            <Headphones className="h-12 w-12 text-indigo-600" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Transforme ton texte en speech !
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
        Convertissez votre texte en paroles réalistes grâce à des voix, une vitesse et un ton personnalisables.
        Idéal pour les créateurs de contenu, les enseignants et les personnes ayant des besoins d'accessibilité.
        </p>
        
        <Link
          to="/convert"
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          Commencer à convertir
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}