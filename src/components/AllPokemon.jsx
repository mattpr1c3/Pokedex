import React, { useState } from "react";

function AllPokemon(props) {
  return (
    <ul>
      {props.pokemon.map((poke, index) => {
        return <li key={index}>{poke.name}</li>;
      })}
    </ul>
  );
}

export default AllPokemon;
