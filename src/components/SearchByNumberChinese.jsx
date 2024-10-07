import { useContext } from "react";
import Ball from "../assets/game.png";
import { PokemonContext } from "../App";
import pokemonData from "pokemon/data/zh-hant.json";

const SearchByNumberChinese = () => {
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

  const fetchPokemonChinese = async (id) => {
    setPokemonName("");
    setIsLoading(true);
    setPokemonURL("");
    setNotFound(false);
    try {
      const numericId = Number(id); // Convert id to a number
      if (!numericId) {
        setError("請輸入pokemon的編號");
        return;
      }

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numericId}`);
      if (!response.ok) {
        setNotFound(true);
        throw new Error("找不到這個Pokemon");
      }

      const data = await response.json();
      setPokemonURL(data.sprites.other["official-artwork"].front_default);
      setPokemonName(pokemonData[numericId - 1]); // Access name correctly with `id - 1`
      setType(data.types[0].type.name);
      setError("");
    } catch (error) {
      setError(error.message || "發生錯誤，請稍後再試！");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <p className="font-bold pb-5 text-center text-[20px] w-[400px]">
          請輸入Pokemon的編號
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
            placeholder="例如： 25"
            onKeyDown={(e) => {
              e.key === "Enter" && fetchPokemonChinese(userInput);
            }}
          />
          <button onClick={() => fetchPokemonChinese(userInput)}>
            <img src={Ball} className="h-10 w-10" />
          </button>
        </div>
        <p className="font-bold pb-2 mt-10 text-center text-[20px]">或</p>
        <div className="text-center pt-3">
          <button
            onClick={() => {
              setSearchNumber(false);
            }}
            className="bg-[#676767] px-2 py-2 rounded-xl font-Inter font-semibold text-white"
          >
            通過名字查詢
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchByNumberChinese;
