import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AllPokemon from "./components/AllPokemon";
import SearchBar from "./components/SearchBar";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setPokemonList(
      allPokemon.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(newValue.toLowerCase());
      })
    );
  };

  useEffect(() => {
    const apiCall = () => {
      fetch(
        `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.pokemon);
          setAllPokemon(data.pokemon);
          setPokemonList(data.pokemon);
        })

        .catch((err) => console.error(err));
    };

    apiCall();
  }, []);

  return (
    <div>
      <SearchBar onChange={handleChange} />
      <AllPokemon pokemon={pokemonList} />
    </div>
  );
}

export default App;
