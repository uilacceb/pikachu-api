import { useContext } from "react";
import Ball from "../assets/game.png";
import { PokemonContext } from "../App";

const Search = () => {
  const { setPokemonURL, userInput, setUserInput } = useContext(PokemonContext);

  const fetchPokemon = async (name) => {
    try {
      if (!name) {
        console.log("please enter a Pokemon name");
        return;
      }
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (response.ok) {
        const data = await response.json();
        setPokemonURL(data.sprites.other["official-artwork"].front_default);
      } else {
        throw new Error("Pokemon not found");
      }
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <input
        className="h-10 rounded-md text-[20px] font-Inter font-semibold px-2 mr-4 focus:outline-none"
        type="text"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button onClick={() => fetchPokemon(userInput)}>
        <img src={Ball} className="h-10 w-10" />
      </button>
    </div>
  );
};

export default Search;
