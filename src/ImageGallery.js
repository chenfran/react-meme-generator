import { useState } from 'react';

export default function MemeImage() {
  const [currentImage, setCurrentImage] = useState(0);
  const allImages = [
    { id: 1, url: 'https://api.memegen.link/images/aag.png', alt: 'image1' },
    { id: 2, url: 'https://api.memegen.link/images/ackbar.png', alt: 'image2' },
    { id: 3, url: 'https://api.memegen.link/images/afraid.png', alt: 'image3' },
  ];
  const chosenImage = allImages[currentImage].url;

  return (
    <div className="p-5">
      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-4">
          <img
            role="presentation"
            src={allImages[0].url}
            alt="aag"
            style={{ width: 100, height: 100 }}
            onClick={() => setCurrentImage(0)}
          />
          <img
            role="presentation"
            src={allImages[1].url}
            alt="ackbar"
            style={{ width: 100, height: 100 }}
            onClick={() => setCurrentImage(1)}
          />
          <img
            role="presentation"
            src={allImages[2].url}
            alt="afraid"
            style={{ width: 100, height: 100 }}
            onClick={() => setCurrentImage(2)}
          />
        </div>
        <div>
          <img src={chosenImage} width={480} height={480} alt="currentImage" />
        </div>
      </div>
    </div>
  );
}
