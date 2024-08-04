// # THIS IS THE ADVANCED APPROACH WITH FETCHING AND STYLING DATA

// 1 IMPORT FUNCTIONS, ICON AND STYLING
import { useEffect, useState } from 'react';
import styles from './App.module.scss';

// 2 CREATE COMPONENT
export default function AdvancedApproach() {
  // 2.1 Declare new state variables, which we'll call "searchTerm", "isImageSelected" and "images" for searching for an image, clicking on an image and display the image
  const [searchTerm, setSearchTerm] = useState('cryingfloor');
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [images, setImages] = useState([]);

  // 2.2 Declare a new state variable, which we'll call "imageUrl" to use it later to get the URL from the meme images
  const [imageUrl, setImageUrl] = useState('');

  // 2.3 Declare new state variables, which we'll call "topText" and "bottomText" for the text input
  const [topText, setTopText] = useState('welcome');
  const [bottomText, setBottomText] = useState('');

  // 2.4 Use useEffect to fetch Data from the Webpage
  useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((response) => response.json())
      .then((res) => setImages(res))
      .catch((err) => console.log(err));
  }, []);

  const filteredImages = images.filter((image) =>
    image.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // 2.5 Create function that sets the isImageSelected state to the clicked image
  function handleImageClick(image) {
    setIsImageSelected(image);
    setImageUrl(image.blank);
  }

  // 2.6 Create a variable to remove the ".png" from the end of the URL
  const memeSelf = imageUrl.replace(/.png/g, '');

  // 2.7 Create function that sets the isImageSelected state to null, effectively removing the selected image display
  function handleCloseClick() {
    setIsImageSelected(null);
  }

  // 2.8 Create url-variable to use it for the download function below
  const url = `${memeSelf}/${topText}/${bottomText}.png`;

  // 2.9 Create a function to download image
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
        // 2.9.1 Create blob link to download
        const fetchedUrl = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = fetchedUrl;
        link.setAttribute(
          'download',
          `${memeSelf}/${topText}/${bottomText}.png`,
        );

        // 2.9.2 Append to html link element page
        document.body.appendChild(link);

        // 2.9.3 Start download
        link.click();

        // 2.9.4 Clean up and remove the link
        link.parentNode.removeChild(link);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <main className={styles.row}>
        <section className={styles.column}>
          <h1>React Meme Generator</h1>
          <div className={styles.row}>
            {/* 2.10 Create a user guide on how to use the meme generator  */}
            <div className={styles.column}>
              <span>
                <strong>Create Your Own Meme:</strong>
                <ol>
                  <li>
                    <strong>Select an image: </strong>
                    Browse or click an image on the right.
                  </li>
                  <li>
                    <strong>Add text: </strong>Type in the Top or Bottom text
                    fields to add text to the image.
                    <br />
                    <span style={{ fontSize: 'small' }}>
                      Use letters and numbers only. No special characters.
                    </span>
                  </li>
                  <li>
                    <strong>Download: </strong>Click the download button to save
                    your meme.
                  </li>
                </ol>
                <p>Enjoy creating!</p>
              </span>
              {/* 2.11 Create two input fields for the top and bottom text */}
              <form onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="Top text">Top text</label>
                <input
                  name="Top text"
                  id="Top text"
                  label="Top text"
                  placeholder="Type your top text"
                  value={topText}
                  onChange={(event) => setTopText(event.currentTarget.value)}
                />
                <br />
                <label htmlFor="Bottom text">Bottom text</label>
                <input
                  name="Bottom text"
                  id="Bottom text"
                  label="Bottom text"
                  placeholder="Type your bottom text"
                  value={bottomText}
                  onChange={(event) => setBottomText(event.currentTarget.value)}
                />
              </form>
            </div>

            {/* 2.12 Create a preview of the generated meme */}
            <div className={styles.column}>
              <div className={styles.imgPreview}>
                {memeSelf ? (
                  <img
                    src={`${memeSelf}/${topText}/${bottomText}.png`}
                    alt={imageUrl.name}
                    style={{ width: '300px' }}
                  />
                ) : (
                  <div>
                    <img
                      data-test-id="meme-image"
                      src={`https://api.memegen.link/images/${searchTerm}/${topText}/${bottomText}.png`}
                      alt="preview"
                      style={{ width: '100%' }}
                    />
                  </div>
                )}
              </div>

              {/* 2.13 Create a download button  */}
              <button onClick={handleDownload}>Download</button>
            </div>
          </div>
        </section>
        <section className={styles.column}>
          {/* 2.14 Create the search input  */}
          <label htmlFor="Meme template">Meme template</label>
          <input
            name="Meme template"
            id="Meme template"
            label="Meme template"
            className={styles.searchBar}
            placeholder="Search for a meme"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <p style={{ fontSize: 'small' }}>
            Clear the search bar to see all images
          </p>

          {/* 2.15 If isImageSelected is NOT null, a box is displayed above the image gallery with the selected image and its title */}

          {isImageSelected && (
            <div className={styles.isImageSelectedBoxStyles}>
              <span
                className={styles.closeButtonStyles}
                onClick={handleCloseClick}
                role="presentation"
              >
                {/* 2.15.1 Create a close button with "&times" */}
                &times;
              </span>

              <img
                src={isImageSelected.blank}
                alt={isImageSelected.name}
                style={{
                  width: '300px',
                  height: '300px',
                  objectFit: 'cover',
                }}
              />
              <p>{isImageSelected.name}</p>
            </div>
          )}

          {/* 2.16 Create an image gallery */}
          <div className={styles.boxForHandleImageClick}>
            {filteredImages.map((image) => (
              <div key={`image-${image.id}`} style={{ margin: '2px' }}>
                <img
                  src={image.blank}
                  alt={image.name}
                  onClick={() => handleImageClick(image)}
                  style={{ width: '100px', height: '100px' }}
                  role="presentation"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>Created by Franziska Chen, Vienna 2024</footer>
    </div>
  );
}
