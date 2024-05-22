import { useState } from 'react';

export default function SimpleSolution() {
  const [topText, setTopText] = useState('hi');
  const [bottomText, setBottomText] = useState('there');
  const [memeName, setMemeName] = useState('bender');

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="Top text">Top text</label>
        <input
          name="Top text"
          id="Top text"
          label="Top text"
          placeholder="Type your top text"
          value={topText}
          onChange={(event) => setTopText(event.currentTarget.value)}
        />
        <label htmlFor="Bottom text">Bottom text</label>
        <input
          name="Bottom text"
          id="Bottom text"
          label="Bottom text"
          placeholder="Type your Bottom text"
          value={bottomText}
          onChange={(event) => setBottomText(event.currentTarget.value)}
        />
        <label htmlFor="Meme Name">Meme Name</label>
        <input
          name="Meme Name"
          id="Meme Name"
          label="Meme Name"
          placeholder="Search for a meme"
          value={memeName}
          onChange={(event) => setMemeName(event.currentTarget.value)}
        />
      </form>
      <label htmlFor="Meme Template">Meme Template</label>
      <img
        src={
          'https://api.memegen.link/images/' +
          memeName.replace(/\s+/g, '-') +
          '/' +
          topText.replace(/\s+/g, '-') +
          '/' +
          bottomText.replace(/\s+/g, '-') +
          '.png'
        }
        alt="meme-template"
        data-test-id="meme-image"
      />
      <form
        method="get"
        action={
          'https://api.memegen.link/images/' +
          memeName.replace(/\s+/g, '-') +
          '/' +
          topText.replace(/\s+/g, '-') +
          '/' +
          bottomText.replace(/\s+/g, '-') +
          '.png'
        }
      >
        <button name="Download">Download</button>
      </form>
    </div>
  );
}
