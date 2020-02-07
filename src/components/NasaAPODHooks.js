import React, { useState, useEffect } from 'react';

const NasaAPODHooks = props => {
  const [nasaData, setData] = useState({});
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${props.apiKey}`
    );
    const data = await response.json();
    setData(data);
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loaded) {
    return (
      <>
        <main>
          <h2 className="nasa-title">{nasaData.title} -- With Hooks</h2>
          <img
            className="nasa-image"
            src={nasaData.hdurl}
            alt={nasaData.title}
          />
          <div className="nasa-explanation">{nasaData.explanation}</div>
        </main>
        <footer>
          <h5 className="nasa-info">
            {nasaData.copyright} | {nasaData.date}
          </h5>
        </footer>
      </>
    );
  } else {
    return (
      <>
        <h1 className="loading">Loading...</h1>
      </>
    );
  }
};

export default NasaAPODHooks;
