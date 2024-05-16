// # IMPORTED FUNCTIONS & FILES
import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import FetchData from './FetchAPI.js';
import MemeImage from './ImageGallery.js';
import TextInputs from './TextInputs';

// # ACTUAL CODE
// I will get the images from this URL
const url = 'https://api.memegen.link/templates/';

export default function App() {
  return (
    <main>
      <h1>React Meme Generator - Let's do it!</h1>
      <section>
        <span>
          <TextInputs />
        </span>
        <div>
          <br />
          <br />
          <FetchData />
          <br />
          <br />
        </div>
      </section>
    </main>
  );
}

// Function: download image (url)
// function downloadImage(url, filepath) {
//   client.get(url, (res) => {
//     res.pipe(fs.createWriteStream(filepath));
//   });
// }
