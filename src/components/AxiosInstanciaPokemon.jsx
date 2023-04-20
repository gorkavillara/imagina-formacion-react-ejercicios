import React from "react";
import axios from "axios"

const pokeAxios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

const AxiosInstanciaPokemon = () => {
  const buscaPokemon = () => {
    pokeAxios.get('298')
      .then(res => console.log(res.data))
      .catch(e => console.error(e))
  }
  return <button onClick={buscaPokemon}>Busca Pokémon</button>;
};

export default AxiosInstanciaPokemon;
