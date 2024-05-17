import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import SearchItem from './SearchItem.js';

export default function Search() {
  const [memes, setMemes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((response) => response.json())
      .then((res) => setMemes(res))
      .catch((error) => console.error(error));
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
    <input
      placeholder="search meme"
      className="form-control ds-input"
      onChange={handleOnChange}
    />
  );

  return (
    <>
      {searchBox}
      <div>{memeList}</div>
    </>
  );
}
