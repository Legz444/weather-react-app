
import React from 'react';
import Daily from './components/Daily';


function App() {

 
  return (
    <div className="app">
      <h1>The Very Beginning of our Weather App!</h1>
      <p>by Kellie and Allegra</p>
      <div className="main">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search City..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
        </div>
        {(typeof weather.main != 'undefined') ? (
            <div className="result">
              <div className="city">{weather.name}</div>
              <div className="temperature">{Math.round(weather.main.temp)}°f </div>
              <h3 className="description">{weather.weather[0].description}</h3>
            </div>
        ) : ('')}
      </main>
      </div>
    </div>
  );

}

export default App;
