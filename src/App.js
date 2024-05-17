import { useRef, useState } from 'react';
import styles from './App.module.scss';
import FetchData from './FetchAPI';
import FetchData2 from './FetchAPI2.js';
import MemeImage from './ImageGallery.js';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  return (
    <main className={styles.row}>
      <section className={styles.column}>
        <h1>React Meme Generator</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span>
                Enter your text. <br />
                It will appear at the top of the image.
              </span>
              <br />
              <form onSubmit={(event) => event.preventDefault()}>
                <input
                  placeholder="Top Text"
                  value={topText}
                  onChange={(event) => setTopText(event.currentTarget.value)}
                />
                <p>{topText}</p>
                <br />
                <br />
                <span>
                  Enter your text. <br />
                  It will appear at the bottom of the image.
                </span>
                <br />
                <input
                  placeholder="Bottom Text"
                  value={bottomText}
                  onChange={(event) => setBottomText(event.currentTarget.value)}
                />
                <p>{bottomText}</p>
              </form>
            </div>
            <div className={styles.column}>
              <span className={styles.imgPreview}>
                <label htmlFor="meme template">Meme Template</label>
              </span>
            </div>
          </div>
        </form>
        <div>
          <button>Generate</button>
          <button>Download your meme</button>
        </div>
      </section>
      <section className={styles.column}>
        <div>
          <h4>Click on an image to choose one for your meme:</h4>
          <FetchData />
        </div>
      </section>
    </main>
  );
}
