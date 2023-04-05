import React, { useState } from "react";

function AllPokemon(props) {
    <div>
        {props.pokemon.map((poke) => {
            return (
                <li>
                    {poke.name}
                </li>
            )
        })}
    </div>
}

export default AllPokemon;
