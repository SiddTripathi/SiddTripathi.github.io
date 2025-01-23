import React from "react";
import HoroscopeForm from "./HoroscopeForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Circular Text */}
      <svg className="circular-text" viewBox="0 0 600 600">
  <defs>
    <path
      id="circlePath"
      d="
        M 300, 300
        m -280, 0
        a 280,280 0 1,1 560,0
        a 280,280 0 1,1 -560,0
      "
    />
  </defs>
  <text fill="gold" fontSize="40" fontWeight="bold" fontFamily="Cinzel">
    <textPath xlinkHref="#circlePath" startOffset="50%" textAnchor="middle">
      Horoscope App
    </textPath>
  </text>
</svg>

      {/* Horoscope Form */}
      <HoroscopeForm />
    </div>
  );
}

export default App;


