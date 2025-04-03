import { API_CONFIG } from './config';

export async function convertTextToSpeech(request) {
  const speedMap = {
    slow: 0.75,
    normal: 1.0,
    fast: 1.25
  };

  const pitchMap = {
    low: -5.0,
    medium: 0.0,
    high: 5.0
  };

  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input: { text: request.text },
        voice: { languageCode: 'fr-FR', ssmlGender: request.voice.toUpperCase() },
        audioConfig: {
          audioEncoding: 'MP3',
          speakingRate: speedMap[request.speed],
          pitch: pitchMap[request.pitch]
        }
      })
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return `data:audio/mp3;base64,${data.audioContent}`;
  } catch (error) {
    console.error('Text-to-speech conversion failed:', error);
    throw error;
  }
}