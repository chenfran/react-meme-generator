export default function SimpleSollution() {
  return (
    <>
      <input />
      <input />
      <input />
      <button>Generate Meme</button>
      <div>
        <img src='https://api.memegen.link/{memeInput}/{topText}/{bottomText}'>
      </div>
      <button>Download</button>
    </>
  );
}
