import React, { useEffect, useState, useRef } from 'react';
import { Clock, Play, Download, Trash2, Square } from 'lucide-react';
import BackButton from '../components/BackButton';

export default function History() {
  const [history, setHistory] = useState([]);
  const audioRef = useRef(null);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
    setHistory(storedHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
  }, []);

  const downloadFiles = (item) => {
    const textBlob = new Blob([item.text], { type: 'text/plain' });
    const textUrl = URL.createObjectURL(textBlob);
    const textLink = document.createElement('a');
    textLink.href = textUrl;
    textLink.download = `${item.id}.txt`;
    textLink.click();

    const audioLink = document.createElement('a');
    audioLink.href = item.audio_url;
    audioLink.download = `${item.id}.mp3`;
    audioLink.click();
  };

  const playAudio = (audioUrl) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(audioUrl);
    audioRef.current.play();
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const deleteItem = (id) => {
    const updatedHistory = history.filter((item) => item.id !== id);
    setHistory(updatedHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
    localStorage.setItem('history', JSON.stringify(updatedHistory));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <Clock className="h-6 w-6 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Historique de convertions</h1>
        </div>

        {history.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>Aucune conversion pour le moment. Commencez par convertir du texte en parole !</p>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium line-clamp-2">{item.text}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(item.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-indigo-50"
                      title="Play"
                      onClick={() => playAudio(item.audio_url)}
                    >
                      <Play className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleStop}
                      className="p-2 text-gray-600 hover:text-red-600 rounded-full hover:bg-red-50"
                      title="Stop"
                    >
                      <Square className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => downloadFiles(item)}
                      className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-indigo-50"
                      title="Download"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="p-2 text-gray-600 hover:text-red-600 rounded-full hover:bg-red-50"
                      title="Delete"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                    {item.voice}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                    {item.speed}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                    {item.pitch}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}