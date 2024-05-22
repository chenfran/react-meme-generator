import { useState } from 'react';

export default function SimpleSolution() {
  const [topText, setTopText] = useState('hi');
  const [bottomText, setBottomText] = useState('there');
  const [memeName, setMemeName] = useState('bender');

  return (
    <div>
      <form
        onSubmit={(event) => event.preventDefault()}
        method="get"
        action={`https://api.memegen.link/images/${memeName}/${topText}/${bottomText}.png`}
      >
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
        <label htmlFor="Meme template">Meme template</label>
        <img
          src={`https://api.memegen.link/images/${memeName}/${topText}/${bottomText}.png`}
          alt="Meme template"
          data-test-id="meme-image"
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

      <form
        method="get"
        action={`https://api.memegen.link/images/${memeName}/${topText}/${bottomText}.png`}
      >
        <button name="Download">Download</button>
      </form>
    </div>
  );
}
