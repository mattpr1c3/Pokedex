import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AllPokemon from "./components/AllPokemon";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  function apiCall() {
    fetch(
      `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.pokemon);
        setPokemonList(data.pokemon);
      })

      .catch((err) => console.error(err));
  }
  apiCall();

  return (
    <div>
      <AllPokemon />
    </div>
  );
}

export default App;
