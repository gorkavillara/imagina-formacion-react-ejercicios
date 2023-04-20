import React from "react";
import axios from "axios"

const AxiosPokemon = () => {
  const buscaPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/298')
      .then(res => console.log(res.data))
      .catch(e => console.error(e))
  }
  return <button onClick={buscaPokemon}>Busca Pokémon</button>;
};

export default AxiosPokemon;
