import React, { useState, useRef, useEffect } from 'react';
import { convertTextToSpeech } from '../api';
import { Volume2, Save, Loader2, Square } from 'lucide-react';

export default function Convert() {
  const [request, setRequest] = useState({
    text: '',
    voice: 'female',
    speed: 'normal',
    pitch: 'medium'
  });
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioUrl && audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.play();
    }
  }, [audioUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const audioUrl = await convertTextToSpeech(request);
      setAudioUrl(audioUrl);
      // Save to history here
      saveToHistory(request, audioUrl);
    } catch (err) {
      setError('Failed to convert text to speech. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setAudioUrl(null);
  };

  const saveToHistory = (request, audioUrl) => {
    const historyItem = {
      id: Date.now(),
      text: request.text,
      voice: request.voice,
      speed: request.speed,
      pitch: request.pitch,
      audio_url: audioUrl,
      timestamp: new Date().toISOString()
    };
    const history = JSON.parse(localStorage.getItem('history')) || [];
    history.push(historyItem);
    localStorage.setItem('history', JSON.stringify(history));
  };

  const handleChange = (field, value) => {
    setRequest({ ...request, [field]: value });
    handleStop();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Convertir du texte en speech</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Texte
            </label>
            <textarea
              value={request.text}
              onChange={(e) => handleChange('text', e.target.value)}
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Insérer le texte ici..."
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Voix
              </label>
              <select
                value={request.voice}
                onChange={(e) => handleChange('voice', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="female">Femme</option>
                <option value="male">Homme</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vitesse
              </label>
              <select
                value={request.speed}
                onChange={(e) => handleChange('speed', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="slow">Lent</option>
                <option value="normal">Normal</option>
                <option value="fast">Rapide</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ton de voix
              </label>
              <select
                value={request.pitch}
                onChange={(e) => handleChange('pitch', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="low">Bas</option>
                <option value="medium">Moyen</option>
                <option value="high">Haut</option>
              </select>
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 flex items-center justify-center px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  Convertion...
                </>
              ) : (
                <>
                  <Volume2 className="h-5 w-5 mr-2" />
                  Convertir
                </>
              )}
            </button>
            {audioUrl && (
              <button
                onClick={handleStop}
                className="flex-1 flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                title="Stop"
              >
                <Square className="h-5 w-5 mr-2" />
                Stop
              </button>
            )}
          </div>
        </form>
        <audio ref={audioRef} />
      </div>
    </div>
  );
}