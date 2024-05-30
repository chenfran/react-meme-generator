// # THIS IS THE SIMPLE APPROACH WITHOUT FETCHING ANY DATA, ALTHOUGH IT WAS OKISHLY SIMPLE

import './App.css';
// 1 Import useState
import { useState } from 'react';

// 2 Create component with 3 input fields and a download button
export default function SimpleApproach() {
  // 2.1 Declare variables for 3 input fields
  const [topText, setTopText] = useState('hi');
  const [bottomText, setBottomText] = useState('');
  const [memeName, setMemeName] = useState('bender');

  // 2.2 Declare url-variable to use it for the download function below
  const url = `https://api.memegen.link/images/${memeName}/${topText}/${bottomText}.png`;

  // 2.3 Create a function to download image
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
        // 2.3.1 Create blob link to download
        const fetchedUrl = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = fetchedUrl;
        link.setAttribute('download', `meme_${memeName}.png`);

        // 2.3.2 Append to html link element page
        document.body.appendChild(link);

        // 2.3.3 Start download
        link.click();

        // 2.3.4 Clean up and remove the link
        link.parentNode.removeChild(link);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      {/* 2.4 Create input fields  */}
      <form onSubmit={(event) => event.preventDefault()}>
        {/* 2.4.1 Create input field for Top text */}
        <label htmlFor="Top text">Top text</label>
        <input
          name="Top text"
          id="Top text"
          label="Top text"
          placeholder="Type your top text"
          value={topText}
          onChange={(event) => setTopText(event.currentTarget.value)}
        />
        {/* 2.4.2 Create input field for Bottom text */}
        <label htmlFor="Bottom text">Bottom text</label>
        <input
          name="Bottom text"
          id="Bottom text"
          label="Bottom text"
          placeholder="Type your Bottom text"
          value={bottomText}
          onChange={(event) => setBottomText(event.currentTarget.value)}
        />
        {/* 2.4.3 Create default image */}
        <img
          src={`https://api.memegen.link/images/${memeName}/${topText}/${bottomText}.png`}
          alt="Customised template"
          data-test-id="meme-image"
        />
        {/* 2.4.4 Create input field for Meme template */}
        <label htmlFor="Meme template">Meme template</label>
        <input
          name="Meme template"
          id="Meme template"
          label="Meme template"
          placeholder="Search for a meme"
          value={memeName}
          onChange={(event) => setMemeName(event.currentTarget.value)}
        />
        {/* 2.4.5 Create download button */}
        <button onClick={handleDownload}>Download</button>
      </form>
    </div>
  );
}
