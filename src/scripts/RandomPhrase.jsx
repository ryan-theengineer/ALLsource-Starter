import { useState, useEffect } from 'react';

const RandomPhrase = () => {
  const getRandomPhrase = () => {
    const phrases = [
      "The quick brown fox jumps over the lazy dog.",
      "Hello, world!",
      "Astro is awesome!",
      "Visit us again soon!",
      "Welcome to our site!",
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  const [phrase, setPhrase] = useState(''); // Initialize as empty string

  useEffect(() => {
    const newPhrase = getRandomPhrase();
    setPhrase(newPhrase); // Update the phrase when the component mounts
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      <p id="random-phrase">{phrase || 'Loading...'}</p>
    </div>
  );
};

export default RandomPhrase;
