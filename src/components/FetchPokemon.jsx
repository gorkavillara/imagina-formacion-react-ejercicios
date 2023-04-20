import React from "react";

const FetchPokemon = () => {
  const buscaPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/298')
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(e => console.error(e))
  }
  return <button onClick={buscaPokemon}>Busca Pokémon</button>;
};

export default FetchPokemon;
