import { useState } from 'react';

export default function SimpleSolution() {
  const [topText, setTopText] = useState('hi');
  const [bottomText, setBottomText] = useState('there');
  const [usersInput, setUsersInput] = useState('bender');

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
        <label htmlFor="input">Users Input</label>
        <input
          name="input"
          id="input"
          label="input"
          placeholder="Search for an image"
          value={usersInput}
          onChange={(event) => setUsersInput(event.currentTarget.value)}
        />
      </form>
      <label htmlFor="meme-template">Meme Template</label>
      <img
        src={`https://api.memegen.link/images/${usersInput}/${topText}/${bottomText}.png`}
        alt="meme-template"
        data-test-id="meme-image"
      />
      <form
        method="get"
        action={`https://api.memegen.link/images/${usersInput}/${topText}/${bottomText}.png`}
      >
        <button name="Download">Download</button>
      </form>
    </div>
  );
}
