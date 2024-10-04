import { useContext } from "react";
import Ball from "../assets/game.png";
import { PokemonContext } from "../App";

const Search = () => {
  const { setPokemonURL, userInput, setUserInput, setNotFound, setError } =
    useContext(PokemonContext);

  const fetchPokemon = async (name) => {
    setPokemonURL("");
    setNotFound(false);
    try {
      if (!name) {
        setError("Please enter a Pokémon name.");
        return;
      }
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      if (!response.ok) {
        setNotFound(true);
        throw new Error("Pokémon not found");
      }
      const data = await response.json();
      setPokemonURL(data.sprites.other["official-artwork"].front_default);
      setError("");
    } catch (error) {
      setError(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <input
            className="h-10 rounded-md text-[20px] font-Inter font-semibold px-2 mr-4 focus:outline-none"
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
              setError("");
              console.log(e.target.value);
            }}
            onKeyDown={(e) => {
              e.key === "Enter" && fetchPokemon(userInput);
            }}
          />
          <button onClick={() => fetchPokemon(userInput)}>
            <img src={Ball} className="h-10 w-10" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
