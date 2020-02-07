import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const Header = () => {
  const { picks, pick, setPick, setUseHooks } = useContext(AppContext);

  return (
    <>
      <header>
        {pick === '1' ? (
          <select
            className="select-left"
            onChange={event => {
              if (event.target.value === 'false') setUseHooks(false);
              else setUseHooks(true);
            }}
          >
            <option value="true">With Hooks</option>
            <option value="false">Without Hooks</option>
          </select>
        ) : null}
        <h1>ReactJS Hooks Demo</h1>
        <select
          className="right-select"
          onChange={event => {
            setPick(event.target.value);
          }}
        >
          <option defaultValue hidden>
            Pick something to render
          </option>
          {picks.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </header>
    </>
  );
};

export default Header;
