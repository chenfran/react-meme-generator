import { useState } from 'react';

export default function TextInputs() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h1>React Meme Generator - Let's do it!</h1>
      <div>Top Text: {topText}</div>
      <input
        value={topText}
        onChange={(event) => setTopText(event.currentTarget.value)}
      />
      <br />
      <div>Bottom Text: {bottomText}</div>
      <input
        value={bottomText}
        onChange={(event) => setBottomText(event.currentTarget.value)}
      />
      <br />
      <br />
      <button>Generate</button>
      <button>Download</button>
    </form>
  );
}
