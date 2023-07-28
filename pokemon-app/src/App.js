import React from "react";
import "./index.css";

const pokedex = [
  {
    name: "Gengar",
    code: "#0094",
    mainType: "Ghost",
    picture: "./pokemon/Gengar.png",
    description:
      "Mega Evolution has made it possible for Gengar to access other dimensions. Its entire body is brimming with strange power.",
  },
  {
    name: "Bulbasaur",
    code: "#0001",
    mainType: "Grass",
    picture: "./pokemon/Bulbasaur.jpg",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  },
  {
    name: "Charmander",
    code: "#0004",
    mainType: "Fire",
    picture: "./pokemon/Charmander.jpg",
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
  },
  {
    name: "Squirtle",
    code: "#0007",
    mainType: "Water",
    picture: "./pokemon/Squirtle.png",
    description:
      "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
  },
  {
    name: "Eevee",
    code: "#0028",
    mainType: "#0131",
    picture: "./pokemon/Eevee.jpg",
    description:
      "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.",
  },
  {
    name: "Mew",
    code: "#0151",
    mainType: "Psychic",
    picture: "./pokemon/Mew.png",
    description:
      "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.",
  },
  {
    name: "Charizard",
    code: "#0006",
    mainType: "Fire",
    picture: "./pokemon/Charizard.png",
    description:
      "Its bond with its Trainer is the source of its power. It boasts speed and maneuverability greater than that of a jet fighter.",
  },
  {
    name: "Pikachu",
    code: "#0025",
    mainType: "Electric",
    picture: "./pokemon/Pikachu.png",
    description:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
  },
  {
    name: "Pokeball",
    picture: "./pokemon/Pokeball.png",
  },
  {
    name: "Sandslash",
    code: "#0028",
    mainType: "Ground",
    picture: "./pokemon/Sandslash.png",
    description:
      "A long, long time ago, it lived in the desert. With its sharp claws fully extended, it can climb right up an iceberg without slipping.",
  },
];

function App() {
  return (
    <div className="App">
      <CardList />
    </div>
  );
}

function CardList() {
  const pokemon = pokedex;

  return (
    <div class="container">
      <ul class="myList">
        {pokemon.map((pokemon) => (
          <Card pokemonObj={pokemon} />
        ))}
      </ul>
    </div>
  );
}

function Card(props) {
  return (
    <div class="card" style={{ width: "300px" }}>
      <div class="card-divider">
        <h4>{props.pokemonObj.name}</h4>
      </div>
      <img src={props.pokemonObj.picture} alt={props.pokemonObj.name} />
      <div class="card-section">
        {props.pokemonObj.mainType}
        <p>{props.pokemonObj.description}</p>
      </div>
    </div>
  );
}

export default App;
