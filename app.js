import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = 'Click an animal for a fun fact';
const showBackground = true;
const background = (
  <img 
    className='background'
    alt='ocean'
    src='/images/ocean.jpg' />
);

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}
const animalFacts = (
  <div>
    <h1>{title}</h1>
     {showBackground && background}
    <div className="animals"> 
         {images} 
    </div>
    <p id='fact'></p>
  </div>
  
);
root.render(animalFacts);

function displayFact(e) {
  const animalName = e.target.alt;
  const selectedAnimal = animals[animalName];
  const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  const funFact = selectedAnimal.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;


}
  