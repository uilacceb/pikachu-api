import { createContext, useState } from "react";
import Home from "./components/home";

export const PokemonContext = createContext();

function App() {
  const [pokemonURL, setPokemonURL] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  return (
    <PokemonContext.Provider
      value={{ pokemonURL, setPokemonURL, pokemonName, setPokemonName }}
    >
      <div className="w-screen h-screen">
        <Home />
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
