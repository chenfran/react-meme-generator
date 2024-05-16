import { useState } from 'react';

export default function TextInputs() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <span>Top Text: {topText}</span>
      <input
        value={topText}
        onChange={(event) => setTopText(event.currentTarget.value)}
      />
      <p>write a text</p>
      <span>Bottom Text: {bottomText}</span>
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
