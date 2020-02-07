import React, { useEffect, useState } from 'react';

const NasaEpic = props => {
  const [nasaData, setData] = useState({});
  const [imageURL, setImageURL] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      // `https://api.nasa.gov/EPIC/api/natural/date/2019-06-01?api_key=YFVlhLeos70ya4Yzwqa0IrzhAlEna0BpldxvZVuk`
      `https://api.nasa.gov/EPIC/api/natural/date/2019-06-01?api_key=${props.apiKey}`
    );
    const data = await response.json();
    setData(data);
    const fields = data[0].date.split('-');
    const year = fields[0];
    const month = fields[1];
    const day = fields[2].substr(0, 2);
    setImageURL(
      `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${data[0].image}.png`
    );
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loaded) {
    return (
      <>
        <h2 className="nasa-title">{nasaData[0].caption}</h2>
        <img className="nasa-image" src={imageURL} alt={nasaData[0].caption} />
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

export default NasaEpic;
