import React, { useReducer, useState, useRef, useEffect } from 'react';

const NasaMarsRover = () => {
  const ref = useRef();
  const [imageURL, setImageURL] = useState(null);
  const [camera, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'FHAC':
        setImageURL(
          'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG'
        );
        return { ...state, camera: action.type };
      case 'RHAZ':
        setImageURL(
          'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RLB_486615482EDR_F0481570RHAZ00323M_.JPG'
        );
        return { ...state, camera: action.type };
      default:
        return state;
    }
  });

  useEffect(() => {
    dispatch({ type: 'FHAC' });
  }, []);

  return (
    <>
      <h2 className="nasa-title">Images from the NASA Mars rover Curiosity</h2>
      <select ref={ref} onChange={() => dispatch({ type: ref.current.value })}>
        <option value="FHAC">Front Hazard Avoidance Camera</option>
        <option value="RHAZ">Rear Hazard Avoidance Camera</option>
      </select>
      {imageURL ? (
        <img
          className="nasa-image"
          src={imageURL}
          alt={`View from the Mars rover, Curiosity's ${camera} camera`}
        />
      ) : null}
    </>
  );
};

export default NasaMarsRover;
