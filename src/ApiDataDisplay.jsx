import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiDataDisplay = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log('API Response:', response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>Posts</h2>
          <ul>
            {data.map((posts) => (
              <li key={posts.title}>{posts.body}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApiDataDisplay;