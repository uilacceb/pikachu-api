import pokemon from "pokemon";
import { useState, useEffect, useContext } from "react";
import Select from "react-select";
import { customStyles } from "../constants/selectStyle";
import { PokemonContext } from "../App";

const SearchInChinese = () => {
  const { setSearchNumber, setPokemonURL, setType, setPokemonName } =
    useContext(PokemonContext);

  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState(""); // Store the input value
  const [selectedOption, setSelectedOption] = useState(null); // Store the selected option

  useEffect(() => {
    const nameInChinese = pokemon.all("zh-Hant");
    const formattedOptions = nameInChinese.map((p) => ({
      value: p,
      label: p,
    }));
    setOptions(formattedOptions);
  }, []);

  const fetchPokemonById = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setPokemonURL(data.sprites.other["official-artwork"].front_default);
    setType(data.types[0].type.name);
    setPokemonName(pokemon.getName(id, "zh-Hant"));
  };

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
      const id = pokemon.getId(option.value, "zh-Hant");
      setInputValue(option.label); // Update input value to selected option's label
      fetchPokemonById(id); // Fetch Pokémon based on selection
    } else {
      setSelectedOption(null);
      setInputValue(""); // Clear input value if the option is cleared
    }
  };

  return (
    <div>
      <p className="font-bold pb-2 text-center text-[20px]">
        選擇Pokemon的名字
      </p>

      <Select
        styles={customStyles}
        options={options}
        inputValue={inputValue} // Use inputValue directly
        onInputChange={handleInputChange} // Handle manual typing
        value={selectedOption}
        onChange={handleChange} // Handle option selection
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
