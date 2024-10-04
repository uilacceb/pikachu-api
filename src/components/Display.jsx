import { useContext } from "react";
import { PokemonContext } from "../App";
import NotFoundImg from "../assets/notFound.png";

const Display = () => {
  const { pokemonURL, notFound } = useContext(PokemonContext);
  return (
    <div className=" h-full bg-[#191300] grow-[2] flex justify-center items-center">
      {notFound ? <img src={NotFoundImg} /> : <img src={pokemonURL} />}
    </div>
  );
};

export default Display;
