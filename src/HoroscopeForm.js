import React, { useState } from "react";
import "./horoscope-components/HoroscopeForm.css";
import astroLogo from "./assets/astro-logo.svg";
import axios from 'axios';

function HoroscopeForm() {
  const [name, setName] = useState("");
  const [sign, setSign] = useState("");
  const [horoscope, setHoroscope] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: 'GET',
        url: 'https://horoscope-astrology.p.rapidapi.com/horoscope',
        params: { day: 'today',
                  sunsign: sign.toLowerCase() 
                },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com',
        },
        
      };

      const response = await axios.request(options);
      console.log(response);
      setHoroscope(response.data.horoscope);
      
      
    } catch (error) {
      console.error('Error fetching horoscope:', error);
      setHoroscope('Failed to fetch horoscope.');
    }
  };

  return (
    <div className="form-container">
      <img src={astroLogo} alt="Astrology Logo" className="form-logo" />
      <h2 className="form-title">Get Your Daily Horoscope</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>Horoscope Sign:</label>
          <input
            type="text"
            value={sign}
            onChange={(e) => setSign(e.target.value)}
            placeholder="e.g. Aries, Taurus"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Get Horoscope
        </button>
      </form>

      {/* Display the fetched horoscope */}
      {horoscope && (
        <div style={{ marginTop: "20px" }}>
          <h3>Hi {name}, your horoscope for today:</h3>
          <p>{horoscope}</p>
        </div>
      )}
    </div>
  );
}

export default HoroscopeForm;