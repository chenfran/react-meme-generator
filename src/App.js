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
    <div>
      <TextInputs />
      <br />
      <br />
      <MemeImage />
      <br />
      <br />
      <FetchData />
      <br />
      <br />
    </div>
  );
}

// Function: download image (url)
// function downloadImage(url, filepath) {
//   client.get(url, (res) => {
//     res.pipe(fs.createWriteStream(filepath));
//   });
// }
