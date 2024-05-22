// # IMPORT FUNCTIONS, ICON AND STYLING
import { useEffect, useState } from 'react';
import styles from './App.module.scss';

// # THE APP FUNCTION
export default function App() {
  // Declare new state variables, which we'll call "searchTerm", "selectedImage" and "images" for searching for an image, clicking on an image and display the image
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(false);
  const [images, setImages] = useState([]);

  // Declare a new state variable, which we'll call "imageSelf" to use it later to get the URL from the meme images
  const [imageSelf, setImageSelf] = useState('');

  // Declare new state variables, which we'll call "topText" and "bottomText" for the text input
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  // Use useEffect to fetch Data from the Webpage
  useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((response) => response.json())
      .then((res) => setImages(res))
      .catch((err) => console.log(err));
  }, []);

  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Create function that sets the selectedImage state to the clicked image
  function handleImageClick(image) {
    setSelectedImage(image);
    setImageSelf(image.blank);
  }

  // Create a variable to remove the ".png" from the end of the URL
  const memeSelf = imageSelf.replace(/.png/g, '');

  // Create function that sets the selectedImage state to null, effectively removing the selected image display
  function handleCloseClick() {
    setSelectedImage(null);
  }

  return (
    <main className={styles.row}>
      <section className={styles.column}>
        <h1>React Meme Generator</h1>
        <div className={styles.row}>
          {/* Create a user guide on how to use the meme generator  */}
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
            {/* Create two input fields for the top and bottom text */}
            <form onSubmit={(event) => event.preventDefault()}>
              <div>
                <div>
                  <label htmlFor="top">
                    <strong>Top text: </strong>
                    {topText}
                  </label>
                  <br />
                  <input
                    name="top"
                    id="top"
                    label="top"
                    placeholder="Type your top text"
                    value={topText}
                    onChange={(event) => setTopText(event.currentTarget.value)}
                  />
                  <br />
                  <br />
                  <label htmlFor="bottom">
                    <strong>Bottom text: </strong>
                    {bottomText}
                  </label>
                  <br />
                  <input
                    name="bottom"
                    id="bottom"
                    label="bottom"
                    placeholder="Type your bottom text"
                    value={bottomText}
                    onChange={(event) =>
                      setBottomText(event.currentTarget.value)
                    }
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Create a preview of the generated meme */}
          <div className={styles.column}>
            <label htmlFor="Meme template">Meme template</label>
            <div className={styles.imgPreview}>
              {memeSelf ? (
                <img
                  src={`${memeSelf}/${topText}_/${bottomText}.png`}
                  alt={imageSelf.name}
                  style={{ width: '300px' }}
                />
              ) : (
                <div>
                  <img
                    data-test-id="meme-image"
                    src={`https://api.memegen.link/images/buzz/${topText}_/${bottomText}.png`}
                    alt="buzz"
                    style={{ width: '100%' }}
                  />
                </div>
              )}
            </div>

            {/* Create a download button  */}
            <div>
              <form
                method="get"
                action={`${memeSelf}/${topText}_/${bottomText}.png`}
              >
                <button name="Download">Download</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.column}>
        <div>
          {/* Create the search input  */}
          <div>
            <input
              className={styles.searchBar}
              placeholder="Search for an image"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* If selectedImage is NOT null, a box is displayed above the image gallery with the selected image and its title */}

          {selectedImage && (
            <div className={styles.selectedImageBoxStyles}>
              <span
                className={styles.closeButtonStyles}
                onClick={handleCloseClick}
                role="presentation"
              >
                {/* Create a close button with "&times" */}
                &times;
              </span>

              <img
                data-test-id="meme-image"
                src={selectedImage.blank}
                alt={selectedImage.name}
                style={{
                  width: '300px',
                  height: '300px',
                  objectFit: 'cover',
                }}
              />
              <p>{selectedImage.name}</p>
            </div>
          )}

          {/* Create an image gallery */}
          <div className={styles.boxForHandleImageClick}>
            {filteredImages.map((image) => (
              <div key="image-image.id" style={{ margin: '2px' }}>
                <img
                  data-test-id="meme-image"
                  src={image.blank}
                  alt={image.name}
                  onClick={() => handleImageClick(image)}
                  style={{ width: '100px', height: '100px' }}
                  role="presentation"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}