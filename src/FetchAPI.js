import { useEffect, useState } from 'react';

// Function: fetch Data from my URL
export default function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map((item) => (
          <li key="item-item.id">{item.blank}</li>
        ))}
      </ul>
    </div>
  );
}
