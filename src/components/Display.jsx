import { useContext } from "react";
import { PokemonContext } from "../App";
import NotFoundImg from "../assets/notFound.png";
import loading from "../assets/loading-gif.gif";
import { textStyle } from "../constants/textStyle";

const Display = () => {
  const { pokemonURL, notFound, error, pokemonName, isLoading } =
    useContext(PokemonContext);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* Show loading message */}
        {error ? (
          <p
            style={textStyle}
            className="text-white font-semibold text-center text-6xl"
          >
            {error}
          </p>
        ) : (
          <p
            className="text-white font-semibold text-center text-8xl tracking-wider opacity-0.5 font-Inter capitalize"
            style={textStyle}
          >
            {pokemonName}
          </p>
        )}
        {notFound ? (
          <img
            className="w-[500px] h-[500px]"
            src={NotFoundImg}
            alt="Not Found"
          />
        ) : isLoading ? (
          <div
            style={{
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={loading}
              alt="Loading..."
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ) : (
          <img
            className="w-[500px] h-[500px]"
            src={pokemonURL}
            alt={pokemonName}
          />
        )}
      </div>
    </>
  );
};

export default Display;
