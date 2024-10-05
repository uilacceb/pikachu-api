import { useContext, useEffect, useState } from "react";
import Ball from "../assets/game.png";
import { PokemonContext } from "../App";
import Select from "react-select";
import { fetchAllPokemon } from "../allPokemon";
import { customStyles } from "../constants/selectStyle";
const Search = () => {
  const {
    setPokemonURL,
    userInput,
    setUserInput,
    setNotFound,
    setError,
    setType,
  } = useContext(PokemonContext);

  // State to store options for react-select
  const [options, setOptions] = useState([]);
  // Fetch all Pokémon on component mount
  useEffect(() => {
    const fetchData = async () => {
      const allPokemon = await fetchAllPokemon();
      const pokemonOptions = allPokemon.map((pokemon) => ({
        value: pokemon,
        label: pokemon,
      }));
      setOptions(pokemonOptions); // Set options for the select component
    };
    fetchData();
  }, []);
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
        <p className="font-bold pb-2">
          Search or type Pokémon by name or number:
        </p>
        <div className="flex justify-center items-center">
          {/* <input
            className="rounded-md text-[20px] font-Inter font-semibold px-2 h-[50px] mr-4 focus:outline-none"
            type="search"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
              setError("");
            }}
            placeholder="eg. pikachu"
            onKeyDown={(e) => {
              e.key === "Enter" && fetchPokemon(userInput);
            }}
          /> */}
          {/* <button onClick={() => fetchPokemon(userInput)}>
            <img src={Ball} className="h-10 w-10" />
          </button> */}
        </div>
        {/* Select dropdown for choosing Pokémon */}
        <Select
          styles={customStyles}
          options={options}
          onChange={(selectedOption) => fetchPokemon(selectedOption.value)}
          placeholder="e.g Pikachu"
          noOptionsMessage={() => "No Pokemon found!"}
          loadingMessage={() => "Loading Pokémon..."}
          isClearable={true}
        />
      </div>
    </>
  );
};
export default Search;
