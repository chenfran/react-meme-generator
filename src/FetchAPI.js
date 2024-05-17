import { useEffect, useState } from 'react';

// Function: fetch Data from my URL
export default function FetchData() {
  const [fetchImages, setFetchImages] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((response) => response.json())
      .then((data) => setFetchImages(data))
      .catch((error) => console.error(error));
  }, []);
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
      {fetchImages.map((image) => (
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
