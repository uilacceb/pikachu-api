import { createContext, useState } from "react";
import Home from "./components/home";

export const PokemonContext = createContext();

function App() {
  const [pokemonURL, setPokemonURL] = useState("");
  const [userInput, setUserInput] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState("");

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
      }}
    >
      <div className="w-screen h-screen">
        <Home />
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
