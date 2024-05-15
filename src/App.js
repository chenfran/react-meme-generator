// # IMPORTED FUNCTIONS & FILES
import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import FetchData from './FetchAPI.js';
import MemeImage from './ImageGallery.js';

// # ACTUAL CODE
// I will get the images from this URL
const url = 'https://api.memegen.link/templates/';

export default function App() {
  return (
    <div>
      <FetchData />
      <br />
      <br />
      <MemeImage />
    </div>
  );
}

// Function: download image (url)
// function downloadImage(url, filepath) {
//   client.get(url, (res) => {
//     res.pipe(fs.createWriteStream(filepath));
//   });
// }

// export default function App() {
//   const [topText, setTopText] = useState('');
//   const [bottomText, setBottomText] = useState('');
//   return (
//     <form onSubmit={(event) => event.preventDefault()}>
//       <h1>React Meme Generator - Let's do it!</h1>
//       <input
//         value={topText}
//         onChange={(event) => setTopText(event.currentTarget.value)}
//       />
//       <div>Top Text: {topText}</div>
//       <br />
//       <input
//         value={bottomText}
//         onChange={(event) => setBottomText(event.currentTarget.value)}
//       />
//       <div>Bottom Text: {bottomText}</div>
//       <br />
//       <button>Generate</button>
//       <br />
//       <br />
//       <button>Download</button>
//     </form>
//   );
// }
