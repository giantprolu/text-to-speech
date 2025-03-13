import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-indigo-50"
      title="Back"
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="ml-2">Retour</span>
    </button>
  );
};

export default BackButton;