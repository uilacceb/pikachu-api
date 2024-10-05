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
  } = useContext(PokemonContext);

  // State to store options for react-select
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState(""); // Store the input value
  const [selectedOption, setSelectedOption] = useState(null); // Store the selected option

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

  // Handle input change (what the user types)
  const handleInputChange = (newValue, { action }) => {
    if (action === "input-change") {
      setInputValue(newValue); // Update input value with what the user types
      setSelectedOption(null); // Clear selected option when user types
    }
  };

  // Handle selection from dropdown
  const handleChange = (option) => {
    if (option) {
      setSelectedOption(option); // Store selected option
      setInputValue(option.label); // Update input value to selected option's label
      fetchPokemon(option.value); // Fetch Pokémon based on selection
    } else {
      setSelectedOption(null);
      setInputValue(""); // Clear input value if the option is cleared
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
        inputValue={inputValue} // Use inputValue directly
        onInputChange={handleInputChange} // Handle manual typing
        value={selectedOption}
        onChange={handleChange} // Handle option selection
        placeholder="e.g Pikachu"
        noOptionsMessage={() => "No Pokémon found!"}
        loadingMessage={() => "Loading Pokémon..."}
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
