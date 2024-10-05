import { createContext, useState } from "react";
import Home from "./components/home";

export const PokemonContext = createContext();

function App() {
  const [pokemonURL, setPokemonURL] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg`
  );
  const [userInput, setUserInput] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [type, setType] = useState("electric");
  const [error, setError] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [searchNumber, setSearchNumber] = useState(false);

  return (
    <PokemonContext.Provider
      value={{
        pokemonURL,
        setPokemonURL,
        userInput,
        setUserInput,
        notFound,
        setNotFound,
        error,
        setError,
        type,
        setType,
        pokemonName,
        setPokemonName,
        searchNumber,
        setSearchNumber,
      }}
    >
      <div className="w-screen h-screen">
        <Home />
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
