// export const fetchAllPokemon = async () => {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//   const data = await response.json();
//   const pokemonNames = data.map((d) => {
//     return d.results.name;
//   });
//   console.log(pokemonNames);
// };


export const fetchAllPokemon = async () => {
  let allPokemon = [];
  let url = "https://pokeapi.co/api/v2/pokemon";
  
  while (url) {
    const response = await fetch(url);
    const data = await response.json();
    allPokemon = allPokemon.concat(data.results);
    url = data.next; // Move to the next page
  }
  
  const pokemonNames = allPokemon.map((pokemon) => pokemon.name);

  console.log(pokemonNames);
  return pokemonNames;
};