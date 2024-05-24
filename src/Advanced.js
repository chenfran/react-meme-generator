// # IMPORT FUNCTIONS, ICON AND STYLING
import { useEffect, useState } from 'react';
import styles from './App.module.scss';

// # THE APP FUNCTION
export default function Advanced() {
  // Declare new state variables, which we'll call "searchTerm", "selectedImage" and "images" for searching for an image, clicking on an image and display the image
  const [searchTerm, setSearchTerm] = useState('cryingfloor');
  const [selectedImage, setSelectedImage] = useState(false);
  const [images, setImages] = useState([]);

  // Declare a new state variable, which we'll call "imageSelf" to use it later to get the URL from the meme images
  const [imageSelf, setImageSelf] = useState('');

  // Declare new state variables, which we'll call "topText" and "bottomText" for the text input
  const [topText, setTopText] = useState('welcome');
  const [bottomText, setBottomText] = useState('');

  // Use useEffect to fetch Data from the Webpage
  useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((response) => response.json())
      .then((res) => setImages(res))
      .catch((err) => console.log(err));
  }, []);

  const filteredImages = images.filter((image) =>
    image.id.toLowerCase().includes(searchTerm.toLowerCase()),
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

  const url = `${memeSelf}/${topText}/${bottomText}.png`;

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
        // Create blob link to download
        const fetchedUrl = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = fetchedUrl;
        link.setAttribute(
          'download',
          `${memeSelf}/${topText}_/${bottomText}.png`,
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      })
      .catch((err) => console.log(err));
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
                  <br />
                  <label htmlFor="Bottom text">Bottom text</label>
                  <br />
                  <input
                    name="Bottom text"
                    id="Bottom text"
                    label="Bottom text"
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
            <div className={styles.imgPreview}>
              {memeSelf ? (
                <img
                  src={`${memeSelf}/${topText}/${bottomText}.png`}
                  alt={imageSelf.name}
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

            {/* Create a download button  */}
            <div>
              <form>
                <button onClick={handleDownload}>Download</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.column}>
        <div>
          {/* Create the search input  */}
          <div>
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
