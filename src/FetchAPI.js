// Import useState and useEffect (will be needed for fetching) from react
import { useEffect, useState } from 'react';

export default function FetchData() {
  // fetch Data from URL
  const [fetchImages, setFetchImages] = useState([]);

  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((response) => response.json())
      .then((data) => setFetchImages(data))
      .catch((error) => console.error(error));
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
  );
}
