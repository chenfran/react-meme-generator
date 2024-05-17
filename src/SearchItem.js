import { useState } from 'react';

export default function SearchItem({ meme }) {
  return (
    <span>
      <img
        alt={meme.name}
        src={meme.blank}
        style={{ height: '100px', width: '100px' }}
      />
    </span>
  );
}
