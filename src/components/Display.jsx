import { useContext } from "react";
import { PokemonContext } from "../App";
import NotFoundImg from "../assets/notFound.png";

const Display = () => {
  const { pokemonURL, notFound, error, pokemonName } =
    useContext(PokemonContext);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {error ? (
          <p className="text-white font-semibold text-center text-2xl">
            {error}
          </p>
        ) : (
          <p
            className="text-white font-semibold text-center text-8xl tracking-wider opacity-0.5 font-Inter capitalize"
            style={{
              color: "#e0dfdc",
              letterSpacing: ".1em",
              textShadow: `
              0 -1px 0 #fff, 
              0 1px 0 #2e2e2e, 
              0 2px 0 #2c2c2c, 
              0 3px 0 #2a2a2a, 
              0 4px 0 #282828, 
              0 5px 0 #262626, 
              0 6px 0 #242424, 
              0 7px 0 #222, 
              0 8px 0 #202020, 
              0 9px 0 #1e1e1e, 
              0 10px 0 #1c1c1c, 
              0 11px 0 #1a1a1a, 
              0 12px 0 #181818, 
              0 13px 0 #161616, 
              0 14px 0 #141414, 
              0 15px 0 #121212, 
              0 22px 30px rgba(0, 0, 0, 0.9)`,
            }}
          >
            {pokemonName}
          </p>
        )}
        {notFound ? (
          <img src={NotFoundImg} />
        ) : (
          <img className="w-[500px] h-[500px]" src={pokemonURL} />
        )}
      </div>
    </>
  );
};

export default Display;
