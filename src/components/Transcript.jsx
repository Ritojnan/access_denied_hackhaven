import React, { useState } from 'react';

const SpeechRecognitionComponent = () => {
  const [output, setOutput] = useState('');
  let recognition = null;

  const handleStart = () => {
    recognition.start();
    setOutput('Listening...');
  };

  const handleStop = () => {
    recognition.stop();
    setOutput('Speech recognition stopped.');
  };

  // Check if SpeechRecognition is available
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Create a new instance of SpeechRecognition
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    // Set recognition parameters
    recognition.continuous = true; // Keep listening until stopped
    recognition.lang = 'en-US'; // Set language

    // Event handler for when speech is recognized
    recognition.onresult = function (event) {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setOutput(prevOutput => prevOutput + transcript);
    };

    // Event handler for errors
    recognition.onerror = function (event) {
      console.error('Speech recognition error:', event.error);
    };
  } else {
    // SpeechRecognition not supported
    return <div>Speech recognition not supported in this browser.</div>;
  }

  return (
    <div className='p-10'>
      <button id="startBtn" onClick={handleStart}>Start Listening</button>
      <button id="stopBtn" onClick={handleStop}>Stop Listening</button>
      <div id="output">{output}</div>
    </div>
  );
};

export default SpeechRecognitionComponent;
