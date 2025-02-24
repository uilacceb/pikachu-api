import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../App";
import Select from "react-select";
import { fetchAllPokemon } from "../allPokemon";
import { customStyles } from "../constants/selectStyle";

const Search = () => {
  const {
    setPokemonURL,
    setNotFound,
    setError,
    setType,
    setPokemonName,
    setSearchNumber,
    setIsLoading,
    loadPokemonList,
    setLoadPokemonList
  } = useContext(PokemonContext);

  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoadPokemonList(true);
      const allPokemon = await fetchAllPokemon();
      const pokemonOptions = allPokemon.map((pokemon) => ({
        value: pokemon,
        label: pokemon,
      }));
      setOptions(pokemonOptions);
      setLoadPokemonList(false);
    };
    fetchData();
  }, [setLoadPokemonList]);

  const fetchPokemon = async (name) => {
    setIsLoading(true);
    setPokemonURL("");
    setNotFound(false);
    setPokemonName("");
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
      setPokemonName(data.name);
      setType(data.types[0].type.name);
      setError("");
    } catch (error) {
      setError(error.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // const handleInputChange = (newValue, { action }) => {
  //   if (action === "input-change") {
  //     setInputValue(newValue);
  //     setSelectedOption(null);
  //   }
  // };

  const handleChange = (option) => {
    if (option) {
      setSelectedOption(option);
      setInputValue(option.label);
      fetchPokemon(option.value);
    } else {
      setSelectedOption();
      setInputValue("");
    }
  };

  return (
    <div>
      <p className="font-bold pb-2 text-center text-[20px]">
        Select Pokémon by name:
      </p>

      <Select
        styles={customStyles}
        options={options}
        // inputValue={inputValue}
        // onInputChange={handleInputChange}
        value={selectedOption}
        onChange={handleChange}
        placeholder="e.g Pikachu"
        isLoading={loadPokemonList}
        loadingMessage={() => "Loading Pokémon..."}
        noOptionsMessage={() => 
          loadPokemonList 
            ? "Loading Pokémon..." 
            : "No Pokémon found!"
        }
        isClearable={true}
      />
      <p className="font-bold pb-2 mt-10 text-center text-[20px]">or</p>
      <div className="text-center">
        <button
          onClick={() => setSearchNumber(true)}
          className="bg-[#676767] px-2 py-2 rounded-xl font-Inter font-semibold text-white"
        >
          Search By Number
        </button>
      </div>
    </div>
  );
};

export default Search;