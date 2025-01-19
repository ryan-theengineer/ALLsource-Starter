import { useState, useEffect } from 'react';

const RandomPhrase = () => {
  const getRandomPhrase = () => {
    const phrases = [
      "Hello, world!",
      "Visit us again soon!",
      "Welcome to our site!",
      "Sup, choom?",
      "404: Sleep Not Found",
      "I'm not a hacker; I’m just socially engineering my way through life.",
      "Why fix bugs when you can call them features?",
      "Data is the new oil, and I’m drilling.",
      "Ctrl + Alt + Del: My answer to everything.",
      '"The measure of intelligence is the ability to change." - Albert Einstein',
      '"The present is theirs; the future, for which I really worked, is mine." - Nikola Tesla',
      '"Sometimes it is the people no one can imagine anything of who do the things no one can imagine." - Alan Turing',
      "There's no place like 127.0.0.1",
      "1337 H4x0R2 0NlY",
      "Are you some kind of sleeper agent?",
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
