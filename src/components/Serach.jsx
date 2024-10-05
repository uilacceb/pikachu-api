import { useContext } from "react";
import Ball from "../assets/game.png";
import { PokemonContext } from "../App";

const Search = () => {
  const {
    setPokemonURL,
    userInput,
    setUserInput,
    setNotFound,
    setError,
    setType,
  } = useContext(PokemonContext);

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
      setType(data.types[0].type.name);
      setError("");
    } catch (error) {
      setError(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div>
        <p className="font-bold pb-2">Search Pokemon by name or number:</p>
        <div className="flex justify-center items-center">
          <input
            className=" rounded-md text-[20px] font-Inter font-semibold px-2 h-[50px] mr-4 focus:outline-none"
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
              setError("");
            }}
            placeholder="eg. pikachu"
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
