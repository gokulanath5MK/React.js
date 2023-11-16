import React from "react";
import "./App.css";
import {  } from "./main.jsx";

function App({ priceCard }) {
  console.log(priceCard);

  const feat = priceCard.map(feat=>
    <li key={feat.id}>{feat.features[0]}</li>)
console.log(feat);

  const prices = priceCard.map(card=>
    <li key={card.id}>{card.features}</li>)

  return (
    <div>
      <h1>React Price Card Task</h1>
      
    <ul className="card">{prices}</ul>
    </div>
  );
}

export default App;