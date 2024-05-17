// Import useState from react
import { useState } from 'react';

// My manually added data as object almost like in the fetched data
const allImages = [
  {
    id: 1,
    url: 'https://api.memegen.link/images/aag.png',
    src: 'https://api.memegen.link/images/aag',
    alt: 'image1',
  },
  {
    id: 2,
    url: 'https://api.memegen.link/images/ackbar.png',
    src: 'https://api.memegen.link/images/ackbar',
    alt: 'image2',
  },
  {
    id: 3,
    url: 'https://api.memegen.link/images/afraid.png',
    src: 'https://api.memegen.link/images/afraid',
    alt: 'image3',
  },
];

// Let's start
export default function MemeImage() {
  const [currentImage, setCurrentImage] = useState(0); // Description of this useState: currentImage is my current value and setCurrentImage is my updated value & it is used for the images

  const [textUp, setTextUp] = useState(''); // Description of this useState: textUp is my current value and setTextUp is my updated value & it is used for the input field
  const [textDown, setTextDown] = useState('');

  const exampleImage = allImages.map((allImage) => allImage.url); // Declare variable that is an array of all url-values from my object above
  console.log(exampleImage); // Output: Is an array with ['https://api.memegen.link/images/aag.png', 'https://api.memegen.link/images/ackbar.png', 'https://api.memegen.link/images/afraid.png']

  const imageSrc = allImages[currentImage].src; // Declare variable that is an array of all src-values from my object above
  console.log(imageSrc); // Output: Is an array with ['https://api.memegen.link/images/aag', 'https://api.memegen.link/images/ackbar', 'https://api.memegen.link/images/afraid']

  const chosenImage = allImages[currentImage].url; // Declare variable that is the URL from the currentImage that a user selected

  return (
    // Some Tailwind-thingy 🤷🏻‍♀️ I guess - I just copied that from a webpage. Will change it later and add it to my scss file
    <div className="p-5">
      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-4">
          {/* Take the value from the url key from my object above and display it */}
          <img
            role="presentation"
            src={allImages[0].url}
            alt="aag"
            style={{ width: 100, height: 100 }}
            // With the onClick user can click on it and it will displayed seperately in a bigger format
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

        {/* This is the image from the onClick */}
        <div>
          <img
            src={chosenImage}
            width={480}
            height={480}
            alt={chosenImage.alt}
          />
        </div>

        {/* This is the input field for the Top and Bottom Text - user can type letters and numbers in it.
        ❤️‍🩹 HOW-TO: Figure out how it should behave with special characters */}
        <div>
          <input
            placeholder="Top Text"
            value={textUp}
            onChange={(event) => setTextUp(event.currentTarget.value)}
          />
          <div>Only letters and numbers are allowed.</div>
        </div>

        <div>
          <input
            placeholder="Bottom Text"
            value={textDown}
            onChange={(event) => setTextDown(event.currentTarget.value)}
          />
          <div>Only letters and numbers are allowed.</div>
        </div>

        {/* This is the download button, that downloads the image the user selects with the input of the user.
        💚 HOW-TO: Figure out how it downloads the image if the top text is empty 💡SOLUTION: I tricked it with a underscore - maybe it is not the prettiest way   */}
        <form method="get" action={`${imageSrc}/${textUp}_/${textDown}.png`}>
          <button>Download</button>
        </form>

        {/* Need a 'Meme Template'.
        ❤️‍🩹 HOW-TO: Figure out what they want: "The meme template (background image) selector element needs to have a label element associated with it containing the text Meme template" */}
        <div className="search-top">
          <div className="search">
            <label htmlFor="site-search">Meme template</label>
            <input
              type="text"
              placeholder="Search Here..."
              name="memeTemplate"
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
