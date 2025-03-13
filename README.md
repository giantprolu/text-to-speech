# Text-to-Speech Web App

## 📌 Introduction
Text-to-Speech Web App est une application permettant de convertir du texte en audio grâce à une API de synthèse vocale. Cette application vise principalement les créateurs de contenu souhaitant générer rapidement des voix off personnalisées.

## 🚀 Fonctionnalités
- Saisie de texte et conversion en audio
- Choix du type de voix (masculine, féminine)
- Réglage de la vitesse et de la tonalité
- Lecture et téléchargement des fichiers audio générés
- Stockage et affichage de l'historique des conversions
- Interface moderne et responsive

## 🛠 Technologies et méthodes utilisées
### 🏗 **Stack technique**
- **Frontend** : React (Vite.js) + Tailwind CSS
- **Routing** : React Router
- **Gestion d'état** : Hooks (useState, useEffect, useContext)
- **API** : Intégration d'une API de synthèse vocale
- **Déploiement** : Vercel

### 🔄 **Méthodes utilisées**
- `useState` pour gérer les entrées utilisateur et les réponses API
- `useEffect` pour gérer les appels API et le chargement des données
- `useContext` pour partager les paramètres globaux
- **Fetch API** pour envoyer les requêtes vers l'API de synthèse vocale
- **Local Storage** pour sauvegarder l'historique des conversions

## 📂 Structure du projet
```
/text-to-speech-frontend
├── public/             # Fichiers statiques
├── src/                # Code source principal
│   ├── components/     # Composants réutilisables
│   ├── pages/          # Pages principales (Accueil, Convert, Historique, About)
│   ├── App.jsx         # Composant racine
│   ├── main.jsx        # Point d'entrée React
├── package.json        # Dépendances et scripts
├── README.md           # Documentation
```

## ⚙️ Installation et exécution
### 1️⃣ Prérequis
- Node.js installé (`>= 16` recommandé)
- Une clé API valide pour l’API de synthèse vocale

### 2️⃣ Cloner le projet
```sh
git clone https://dev.azure.com/text-to-speech/Text-to-speech/_git/Text-to-speech-frontend
cd Text-to-speech-frontend
```

### 3️⃣ Installer les dépendances
```sh
npm install
```

### 4️⃣ Configurer les variables d'environnement
```sh
npm run dev
```

L’application sera accessible sur **http://localhost:5173/**

