import { useEffect, useState } from 'react';

// Function: fetch Data from my URL
export default function FetchData() {
  const [fetchImages, setFetchImages] = useState([]);

  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((response) => response.json())
      .then((data) => setFetchImages(data))
      .catch((error) => console.error(error));
  }, []);
  const memeImages = fetchImages.map((fetchImage) => (
    <li key="fetchImage-fetchImage.id">{fetchImage.blank}</li>
  ));
  const randomImage = memeImages[Math.floor(Math.random() * memeImages.length)];
  return (
    <>
      <h1>Memes:</h1>
      <div>{randomImage}</div>
      {/* FIX ME: Image can not be displayed | NOTE: maybe if I convert the object to an array */}
      <img src={randomImage} alt="Random Meme" width={100} height={100} />
    </>
  );

  // return (
  //   <div>
  //     <h1>Data:</h1>
  //     <ul>
  //       {fetchMemes.map((fetchMeme) => (
  //         <li key="fetchMeme-fetchMeme.id">{fetchMeme.blank}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}
