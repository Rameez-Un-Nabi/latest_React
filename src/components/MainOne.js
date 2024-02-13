// MainOne.js
import React from 'react';
import rest from '../rest.jpg';

const MainOne = () => (
  <main id="hero">
    <div id="Text Bloack in hero">
      <h1>Little Lemon</h1>
      <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
    </div>
    <img src={rest} alt="rest" />
  </main>
);

export default MainOne;

