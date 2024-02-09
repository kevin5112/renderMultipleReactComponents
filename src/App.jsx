import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function ListAnimal(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animalList.map((animal) => {
        return <ListAnimal key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function App() {
  const animals = ['cat', 'dog', 'fish', 'bird'];

  return (
    <>
      <div>
        <h1>Animals</h1>
        <List animalList={animals} />
      </div>
    </>
  );
}

export default App;
