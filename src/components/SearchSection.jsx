import PokemonTypeColor from "../constants/pokemonTypeColor";
import { PokemonContext } from "../App";
import { useContext } from "react";
import SearchByNumber from "./SearchByNumber";
import SearchInChinese from "./SearchInChinese";
import SearchByNumberChinese from "./SearchByNumberChinese";
import Search from "./Serach";

const SearchSection = () => {
  const { type, searchNumber, chineseVersion, setChineseVersion } =
    useContext(PokemonContext);
  const serachedType = type;
  const serachedTypeColor = PokemonTypeColor.find((t) => t[serachedType]);

  return (
    <div className="relative">
      <span
        style={{ backgroundColor: serachedTypeColor[type] }}
        className="text-right flex justify-end items-center py-5 pr-5 
                  lg:absolute lg:top-5 lg:right-5"
      >
        <span
          className={`font-semibold cursor-pointer hover:text-white ${!chineseVersion ? "text-white font-bold" : ""
            }`}
          onClick={() => setChineseVersion(false)}
        >
          EN&nbsp;
        </span>{" "}
        |{" "}
        <span
          className={`font-semibold cursor-pointer hover:text-white ${chineseVersion ? "text-white font-bold" : ""
            }`}
          onClick={() => setChineseVersion(true)}
        >
          &nbsp;中文
        </span>
      </span>
      <div
        style={{ backgroundColor: serachedTypeColor[type] }}
        className="h-screen flex justify-center items-center lg:h-full lg:w-[700px]"
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
    </div>
  );
};

export default SearchSection;
