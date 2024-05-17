import { FaDownload } from 'react-icons/fa';

export default function DownloadButton({ meme }) {
  return (
    <form method="get" action={`${meme.source}/${topText}_/${bottomText}.png`}>
      <button>
        <span>
          <FaDownload />
        </span>
        <span>&nbsp;&nbsp;Download your meme</span>
      </button>
    </form>
  );
}
