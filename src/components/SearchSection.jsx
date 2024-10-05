import Search from "./Serach";
import PokemonTypeColor from "../constants/pokemonTypeColor";
import { PokemonContext } from "../App";
import { useContext } from "react";

const SearchSection = () => {
  const { type } = useContext(PokemonContext);
  const serachedType = type;
  const serachedTypeColor = PokemonTypeColor.find((t) => t[serachedType]);
  return (
    <div
      style={{ backgroundColor: serachedTypeColor[type] }}
      className={`h-full w-[700px] flex justify-center items-center`}
    >
      <Search />
    </div>
  );
};

export default SearchSection;
