import { useState, useEffect, useContext } from "react";
import Select from "react-select";
import { customStyles } from "../constants/selectStyle";
import { PokemonContext } from "../App";
import pokemonData from "pokemon/data/zh-hant.json";

const SearchInChinese = () => {
  const { setSearchNumber, setPokemonURL, setType, setPokemonName } =
    useContext(PokemonContext);

  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const formattedOptions = Object.values(pokemonData).map((name, index) => ({
      value: index + 1, // Use `index + 1` to match Pokémon API IDs
      label: name,
    }));
    setOptions(formattedOptions);
  }, []);

  const fetchPokemonById = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemonURL(data.sprites.other["official-artwork"].front_default);
      setType(data.types[0].type.name);
      setPokemonName(pokemonData[id - 1]); // Access name correctly from `pokemonData`
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  const handleInputChange = (newValue, { action }) => {
    if (action === "input-change") {
      setInputValue(newValue);
      setSelectedOption(null);
    }
  };

  const handleChange = (option) => {
    if (option) {
      setSelectedOption(option);
      setInputValue(option.label);
      fetchPokemonById(option.value); // Use `option.value` directly
    } else {
      setSelectedOption(null);
      setInputValue("");
    }
  };

  return (
    <div>
      <p className="font-bold pb-2 text-center text-[20px]">選擇Pokemon的名字</p>

      <Select
        styles={customStyles}
        options={options}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        value={selectedOption}
        onChange={handleChange}
        placeholder="例如: 皮卡丘"
      />
      <p className="font-bold pb-2 mt-10 text-center text-[20px]">或者</p>
      <div className="text-center">
        <button
          onClick={() => setSearchNumber(true)}
          className="bg-[#676767] px-2 py-2 rounded-xl font-Inter font-semibold text-white"
        >
          用數字搜尋
        </button>
      </div>
    </div>
  );
};

export default SearchInChinese;
