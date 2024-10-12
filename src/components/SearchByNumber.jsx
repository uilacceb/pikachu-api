import { useContext } from "react";
import Ball from "../assets/game.png";
import { PokemonContext } from "../App";
import NotFound from "../assets/notFound.png"

const SearchByNumber = () => {
  const {
    setPokemonURL,
    userInput,
    setUserInput,
    setNotFound,
    setError,
    setType,
    setSearchNumber,
    setPokemonName,
    setIsLoading,
  } = useContext(PokemonContext);

  const fetchPokemon = async (name) => {
    setPokemonName("");
    setIsLoading(true);
    setPokemonURL("");
    setNotFound(false);
    try {
      if (!name) {
        setError("Please enter a Pokémon name.");
        setPokemonURL(NotFound)
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
      setPokemonName(data.name);
      setType(data.types[0].type.name);
      setError("");
    } catch (error) {
      setError(error.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <p className="font-bold pb-5 text-center text-[20px] w-[400px]">
          Search Pokémon by number or name:
        </p>
        <div className="flex justify-center items-center">
          <input
            className="h-[54px] rounded-md text-[20px] font-Inter font-semibold px-3  mr-4 focus:outline-none"
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
              setError("");
            }}
            placeholder="eg. 25"
            onKeyDown={(e) => {
              e.key === "Enter" && fetchPokemon(userInput);
            }}
          />
          <button onClick={() => fetchPokemon(userInput)}>
            <img src={Ball} className="h-10 w-10" />
          </button>
        </div>
        <p className="font-bold pb-2 mt-10 text-center text-[20px]">or</p>
        <div className="text-center pt-3">
          <button
            onClick={() => {
              setSearchNumber(false);
            }}
            className="bg-[#676767] px-2 py-2 rounded-xl font-Inter font-semibold text-white"
          >
            Select By Name
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchByNumber;
