import { useState } from 'react';
import memes from './FetchAPI.js';

export default function MemeImage() {
  const [currentImage, setCurrentImage] = useState(0);
  const allImages = [
    'https://api.memegen.link/images/aag.png',
    'https://api.memegen.link/images/ackbar.png',
    'https://api.memegen.link/images/afraid.png',
  ];

  return (
    <div className="p-5">
      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-4">
          <img
            src={allImages[0]}
            alt="aag"
            style={{ width: 100, height: 100 }}
            onMouseOver={(e) => setCurrentImage(0)}
            onFocus={(e) => setCurrentImage(0)}
          />
          <img
            src={allImages[1]}
            alt="ackbar"
            style={{ width: 100, height: 100 }}
            onMouseOver={(e) => setCurrentImage(1)}
            onFocus={(e) => setCurrentImage(1)}
          />
          <img
            src={allImages[2]}
            alt="afraid"
            style={{ width: 100, height: 100 }}
            onMouseOver={(e) => setCurrentImage(2)}
            onFocus={(e) => setCurrentImage(2)}
          />
        </div>
        <div>
          <img
            src={allImages[currentImage]}
            width={480}
            height={480}
            alt="currentImage"
          />
        </div>
      </div>
    </div>
  );
}
