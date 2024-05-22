import { useState } from 'react';

export default function SimpleSolution() {
  const [topText, setTopText] = useState('hi');
  const [bottomText, setBottomText] = useState('there');
  const [usersInput, setUsersInput] = useState('bender');

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="top">Top text</label>
        <input
          name="top"
          id="top"
          label="top"
          placeholder="Type your top text"
          value={topText}
          onChange={(event) => setTopText(event.currentTarget.value)}
        />
        <label htmlFor="bottom">Bottom text</label>
        <input
          name="bottom"
          id="bottom"
          label="bottom"
          placeholder="Type your bottom text"
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
      <label htmlFor="template">Meme Template</label>
      <img
        src={`https://api.memegen.link/images/${usersInput}/${topText}/${bottomText}.png`}
        alt="meme-template"
        data-test-id="meme-template"
      />
    </div>
  );
}
