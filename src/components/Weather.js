import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Weather() {
  const [city, setCity] = useState('');
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState(null);
  const [des, setDes] = useState('');

  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=85d6588eaee5a0d134b1e5e179482061&units=metric`;

  useEffect(() => {
    if (city.trim() !== '') {
      axios
        .get(endpoint)
        .then((response) => {
          setData(response.data);
          setTemp(response.data.main.temp);
          setDes(response.data.weather[0].description);
          setCity(''); // Clear the input field
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [city]);

  return (
    <div>
      <input
        className="search"
        value={city}
        type="text"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <div className="weather">
        <h1>{city}</h1>
        <h2>{temp} F</h2>
        <h3>{des}</h3>
      </div>
    </div>
  );
}

export default Weather;
