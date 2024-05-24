import { useState } from 'react';

export default function SimpleSolution() {
  const [topText, setTopText] = useState('hi');
  const [bottomText, setBottomText] = useState('');
  const [memeName, setMemeName] = useState('bender');

  const url = `https://api.memegen.link/images/${memeName}/${topText}/${bottomText}.png`;

  function handleDownload(event) {
    event.preventDefault();
    fetch(url, {
      method: 'get',
      headers: {
        'Content-type': 'image/png',
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const fetchedUrl = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = fetchedUrl;
        link.setAttribute('download', `meme_${memeName}.png`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor={topText}>Top text</label>
        <input
          name="top text"
          id="top text"
          label="Top text"
          placeholder="Type your top text"
          value={topText}
          onChange={(event) => setTopText(event.currentTarget.value)}
        />
        <label htmlFor={bottomText}>Bottom text</label>
        <input
          name="bottom text"
          id="bottom text"
          label={bottomText}
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
        <label htmlFor={memeName}>Meme Name</label>
        <input
          name="Meme Name"
          id="Meme Name"
          label={memeName}
          placeholder="Search for a meme"
          value={memeName}
          onChange={(event) => setMemeName(event.currentTarget.value)}
        />
        <button onClick={handleDownload}>Download</button>
      </form>
    </div>
  );
}
