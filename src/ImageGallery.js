import { useEffect, useState } from 'react';
import styles from './App.module.scss';

export default function ImageGallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((response) => response.json())
      .then((res) => setImages(res))
      .catch((err) => console.log(err));
  }, []);

  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Function: Sets the selectedImage state to the clicked image
  function handleImageClick(image) {
    setSelectedImage(image);
    console.log(image.source);
    return <div>Source: {}</div>;
  }

  // Function: Sets the selectedImage state to null, effectively removing the selected image display
  function handleCloseClick() {
    setSelectedImage(null);
  }

  return (
    <div>
      <div>
        <input
          className={styles.searchBar}
          placeholder="Search for an meme template"
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
              {/* This &times is a close button - did not know that  */}
              &times;
            </span>
            <img
              src={selectedImage.blank}
              alt={selectedImage.name}
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
            <p>{selectedImage.name}</p>
          </div>
        )}
      </div>
      {/* This is the actual image gallery */}
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
  );
}
