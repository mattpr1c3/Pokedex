import React, { useState } from "react";

function AllPokemon(props) {
  return (
    <ul>
      {props.pokemon.map((poke) => {
        return <li>{poke.name}</li>;
      })}
    </ul>
  );
}

export default AllPokemon;
