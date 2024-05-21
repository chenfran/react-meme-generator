// # IMPORT FUNCTIONS, ICON AND STYLING
import { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import styles from './App.module.scss';

// # THE APP FUNCTION
export default function App() {
  // Declare new state variables, which we'll call "searchTerm", "selectedImage" and "images" for searching for an image, clicking on an image and display the image
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
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
  const memeSelf = imageSelf.replace(/.png/g, '');

  // Create function that sets the selectedImage state to null, effectively removing the selected image display
  function handleCloseClick() {
    setSelectedImage(null);
  }

  return (
    <main className={styles.row}>
      <section className={styles.column}>
        <h1>React Meme Generator</h1>

        {/* Create a user guide on how to use the meme generator  */}
        <div className={styles.column}>
          {' '}
          <span>
            <p style={{ fontWeight: 'bold' }}>Create Your Own Meme:</p>
            <ol>
              <li>
                <span style={{ fontWeight: 'bold' }}>Select an image: </span>
                Browse or click an image on the right.
              </li>
              <li>
                <span style={{ fontWeight: 'bold' }}>Add text: </span>Type in
                the Top or Bottom text fields to add text to the image.
                <br />
                <span style={{ fontSize: 'small' }}>
                  Use letters and numbers only. No special characters.
                </span>
              </li>
              <li>
                <span style={{ fontWeight: 'bold' }}>Download: </span>Click the
                download button to save your meme.
              </li>
            </ol>
            <p>Enjoy creating!</p>
          </span>
          {/* Create two input fields for the top and bottom text */}
          <form onSubmit={(event) => event.preventDefault()}>
            <div>
              <div>
                <span style={{ fontWeight: 'bold' }}>Top Text: </span>
                <p>{topText}</p>
                <br />
                <input
                  placeholder="Type your top text"
                  value={topText}
                  onChange={(event) => setTopText(event.currentTarget.value)}
                />
                <br />
                <br />
                <span style={{ fontWeight: 'bold' }}>Bottom Text: </span>
                <p>{bottomText}</p>
                <br />
                <input
                  placeholder="Type your bottom text"
                  value={bottomText}
                  onChange={(event) => setBottomText(event.currentTarget.value)}
                />
              </div>
            </div>
          </form>
        </div>

        {/* Create a preview of the generated meme */}
        <div className={styles.column}>
          {' '}
          <div className={styles.imgPreview}>
            <img
              src={`${memeSelf}/${topText}_/${bottomText}.png`}
              alt={imageSelf.name}
              style={{ width: '300px' }}
            />
          </div>
          {/* Create a download button  */}
          <div>
            <form
              method="get"
              action={`${memeSelf}/${topText}_/${bottomText}.png`}
            >
              <button>
                <span>
                  <FaDownload />
                </span>
                <span>&nbsp;&nbsp;Download your meme</span>
              </button>
            </form>
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
          <div>
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
          </div>

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
