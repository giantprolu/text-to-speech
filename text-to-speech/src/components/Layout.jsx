import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Headphones, Clock, Home, Info } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link to="/" className="flex items-center space-x-2 text-indigo-600 font-semibold">
                <Headphones className="h-6 w-6" />
                <span>Text-to-speech</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-indigo-50 text-gray-700">
                  <Home className="h-4 w-4" />
                  <span>Accueil</span>
                </Link>
                <Link to="/convert" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-indigo-50 text-gray-700">
                  <Headphones className="h-4 w-4" />
                  <span>Convertir</span>
                </Link>
                <Link to="/history" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-indigo-50 text-gray-700">
                  <Clock className="h-4 w-4" />
                  <span>Historique</span>
                </Link>
                <Link to="/about" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-indigo-50 text-gray-700">
                  <Info className="h-4 w-4" />
                  <span>A propos</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}