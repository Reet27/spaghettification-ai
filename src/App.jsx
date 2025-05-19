
import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
function App() {
  const { speak } = useSpeechSynthesis();
  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Welcome to Spaghettification!</h1>
      <p>Learn what happens when objects fall into a black hole.</p>
      <button onClick={() => speak({ text: 'Spaghettification is the process of getting stretched like spaghetti near a black hole.' })}>
        🔊 Speak
      </button>
    </div>
  );
}
export default App;
