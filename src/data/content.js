// Central content config — edit here, not in components.

export const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Sound', href: '#sound' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIALS = {
  github: 'https://github.com/Real-Kayjou',
}

// Featured projects — swap `repo` for the exact repo slug once it's public
// on your GitHub, so the "View repo" link resolves correctly.
export const PROJECTS = [
  {
    id: 'triple_t',
    title: 'Triple_T',
    tag: 'Minecraft AI Bot',
    year: '2024',
    description:
      'A Mineflayer bot with persistent memory, a multi-profile skin system, a survival AI loop, and full voice output through Piper TTS — a companion that actually remembers the world it lives in.',
    stack: ['Node.js', 'Mineflayer', 'Gemini API', 'Piper TTS'],
    repo: 'Real-Kayjou/Triple_T',
  },
  {
    id: 'eltron',
    title: 'ELTRON / JARVIS',
    tag: 'Local Voice AI Assistant',
    year: '2023 — now',
    description:
      'A fine-tuned, fully local voice assistant with a real personality — witty, occasionally sarcastic, never robotic. Runs on Ollama with ChromaDB memory and a Vosk/Whisper voice pipeline.',
    stack: ['Python', 'Ollama', 'ChromaDB', 'Vosk / Whisper'],
    repo: 'Real-Kayjou/ELTRON',
  },
]

export const SPOTIFY_TRACKS = [
  // Confirmed match — vivi baby, ovg! "MY JEALOUSY" (2025)
  { title: 'My Jealousy', artist: 'vivi baby, ovg!', spotifyId: '4POZsa4JhD4OLcNlbGxZBw' },
  // Unconfirmed — paste the real Spotify track link/ID for each of these.
  { title: 'Ice', artist: '', spotifyId: null },
  { title: 'Fall From The Sky', artist: '', spotifyId: null },
  { title: 'Poster Boy', artist: '', spotifyId: null },
  { title: 'Hunter Eyes', artist: '', spotifyId: null },
  { title: 'Under Your Spell', artist: '', spotifyId: null },
  { title: 'My Destiny', artist: '', spotifyId: null },
  { title: 'ex freundin', artist: '', spotifyId: null },
]
