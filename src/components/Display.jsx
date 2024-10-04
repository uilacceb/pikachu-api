import { useContext } from "react";
import { PokemonContext } from "../App";

const Display = () => {
  const { pokemonURL } = useContext(PokemonContext);
  return (
    <div className=" h-full bg-[#191300] grow-[2] flex justify-center items-center">
      <img src={pokemonURL} />
    </div>
  );
};

export default Display;
