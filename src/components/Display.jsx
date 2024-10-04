import { useContext } from "react";
import { PokemonContext } from "../App";
import NotFoundImg from "../assets/notFound.png";

const Display = () => {
  const { pokemonURL, notFound, error } = useContext(PokemonContext);
  return (
    <>
      <div>
        {error && (
          <p className="text-white font-semibold text-center text-2xl">
            {error}
          </p>
        )}
        {notFound ? <img src={NotFoundImg} /> : <img src={pokemonURL} />}
      </div>
    </>
  );
};

export default Display;
