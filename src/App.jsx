import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AllPokemon from "./components/AllPokemon";
import SearchBar from "./components/SearchBar";
import { filterPokemon } from "../helpers/helper";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchWeakness, setSearchWeakness] = useState("");
  const [limit, setLimit] = useState(5);

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

  let displayList = filterPokemon(
    pokemonList, searchName, searchType, searchWeakness, limit
  )

  return (
    <div>
      {/* create more search fields for the display list variable */}
      {/* add to search bar? or new search? */}
      {/* handlechange could be replaced by setsearchname */}
      <SearchBar onChange={handleChange} />
      <AllPokemon pokemon={pokemonList} />
    </div>
  );
}

export default App;
