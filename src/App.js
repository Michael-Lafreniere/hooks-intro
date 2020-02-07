import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NasaAPOD from './components/NasaAPOD';
import NasaAPODHooks from './components/NasaAPODHooks';
import NasaEPIC from './components/NasaEpic';
import NasaMarsRover from './components/NasaMarsRover';

import { AppContext } from './AppContext';

import './App.css';

const picks = [
  { id: '1', name: 'Astronomy Picture of the Day' },
  { id: '2', name: 'Earth Polychromatic Imaging Camera' },
  { id: '3', name: 'Mars Rover Photos' }
];

function App() {
  const apiKey = 'DEMO_KEY';
  const [useHooks, setUseHooks] = useState(true);
  const [pick, setPick] = useState(picks[0].id);
  const [render, setRender] = useState(null);

  useEffect(() => {
    switch (pick) {
      case '1':
        if (useHooks) setRender(<NasaAPODHooks apiKey={apiKey} />);
        else setRender(<NasaAPOD apiKey={apiKey} />);
        break;
      case '2':
        setRender(<NasaEPIC apiKey={apiKey} />);
        break;
      case '3':
        setRender(<NasaMarsRover />);
        break;
      default:
        setRender(
          <>
            <h1>Coming Soon</h1>
          </>
        );
    }
  }, [pick, useHooks]);

  return (
    <AppContext.Provider value={{ picks, pick, setPick, setUseHooks }}>
      <div className="App">
        <Header />
        {render}
      </div>
    </AppContext.Provider>
  );
}

export default App;
