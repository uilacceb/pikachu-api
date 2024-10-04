import { useContext } from "react";
import Ball from "../assets/game.png";
import { PokemonContext } from "../App";

const Search = () => {
  const { setPokemonURL, setPokemonName } = useContext(PokemonContext);

  const fetchPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json();
    setPokemonURL(data.sprites.other["official-artwork"].front_default);
    setPokemonName("ditto");
  };
  return (
    <div className="flex justify-center items-center">
      <input
        className="h-10 rounded-md text-[20px] font-Inter font-semibold px-2 mr-4 focus:outline-none"
        type="text"
      />
      <button onClick={fetchPokemon}>
        <img src={Ball} className="h-10 w-10" />
      </button>
    </div>
  );
};

export default Search;
