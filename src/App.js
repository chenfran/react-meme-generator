import { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { MdSettingsBackupRestore } from 'react-icons/md';
import styles from './App.module.scss';

// ❤️‍🩹 HOW-TO: I changed this SearchItem function so it fetches again from the URL because I want to add this onClick to the image but it does not work
// Now I can click on the images but the search does not work anymore - I think I have to connect "meme" with "image" in this function. Maybe something with props?
function SearchItem({ meme }) {
  const [fetchImages, setFetchImages] = useState([]);

  useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((response) => response.json())
      .then((res) => setFetchImages(res))
      .catch((err) => console.error(err));
  }, []);

  const [image, setImage] = useState(null);

  return (
    <div>
      {image && (
        <img
          key="image-image.id"
          src={image.blank}
          alt={image.name}
          style={{ height: '100px' }}
        />
      )}
      {!image &&
        fetchImages.map((image) => (
          <img
            role="presentation"
            onClick={() => {
              setImage(image);
            }}
            key="image-image.id"
            src={image.blank}
            alt={image.name}
            style={{ height: '100px' }}
          />
        ))}
    </div>
    // <span>
    //     <img
    //       alt={meme.name}
    //       src={meme.blank}
    //       style={{ height: '100px', width: '100px' }}
    //     />
    // </span>
  );
}

export default function App() {
  const [memes, SetMemes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((response) => response.json())
      .then((res) => SetMemes(res))
      .catch((err) => console.error(err));
  }, []);

  const handleOnChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const filteredMeme = memes.filter((meme) =>
    meme.name.toLowerCase().includes(search),
  );

  const memeList =
    memes && memes.length
      ? filteredMeme.map((meme) => (
          <SearchItem key="meme-meme.id" meme={meme} />
        ))
      : null;

  const searchBox = (
    <input placeholder="Search meme" onChange={handleOnChange} />
  );

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
          <button>
            <span>
              <MdSettingsBackupRestore />
            </span>
            <span>&nbsp;Generate</span>
          </button>
          <button>
            <span>
              <FaDownload />
            </span>
            <span>&nbsp;&nbsp;Download your meme</span>
          </button>
        </div>
      </section>
      <section className={styles.column}>
        {searchBox}
        <span>
          Search for a background image for your meme or click on an image to
          select it.
        </span>
        <div>{memeList}</div>
      </section>
    </main>
  );
}
