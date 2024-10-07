// import Search from "./Serach";
import PokemonTypeColor from "../constants/pokemonTypeColor";
import { PokemonContext } from "../App";
import { useContext } from "react";
import SearchByNumber from "./SearchByNumber";
import SearchInChinese from "./SearchInChinese";
import SearchByNumberChinese from "./SearchByNumberChinese";
import Search from "./Serach";

const SearchSection = () => {
  const { type, searchNumber, chineseVersion } = useContext(PokemonContext);
  const serachedType = type;
  const serachedTypeColor = PokemonTypeColor.find((t) => t[serachedType]);
  return (
    <div
      style={{ backgroundColor: serachedTypeColor[type] }}
      className={`pt-7 h-screen justify-center items-center lg:h-full lg:w-[700px] flex  `}
    >
      {chineseVersion ? (
        searchNumber ? (
          <SearchByNumberChinese />
        ) : (
          <SearchInChinese />
        )
      ) : searchNumber ? (
        <SearchByNumber />
      ) : (
        <Search />
      )}
    </div>
  );
};

export default SearchSection;
