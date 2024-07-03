import React, { useState, useEffect } from "react";
import { graphql, PageProps } from "gatsby";
import { PokemonCardData } from "../types/pokemon-types";
import PokemonCard from "../components/PokemonCard";
import TypeList from "../components/TypeList";

interface PokemonsQueryData {
  pokemon: {
    pokemons: PokemonCardData[];
  };
}

const IndexPage: React.FC<PageProps<PokemonsQueryData>> = ({ data }) => {
  const pokemons = data.pokemon.pokemons;
  const [selectedType, setSelectedType] = useState<string>("");
  const [favoritesOnly, setFavoritesOnly] = useState<boolean>(false);
  const [favoritePokemons, setFavoritePokemons] = useState<string[]>([]);

  const handleSelectType = (type: string) => {
    setSelectedType(type === selectedType ? "" : type);
  };

  const toggleFavoritesFilter = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    console.log(favorites);
    setFavoritePokemons(favorites);
    setFavoritesOnly(!favoritesOnly);
  };

  const filteredPokemons = pokemons.filter(
    (pokemon) =>
      (selectedType ? pokemon.types.includes(selectedType) : true) &&
      (!favoritesOnly || favoritePokemons.includes(pokemon.name))
  );

  return (
    <main>
      <div className="flex justify-center">
        <TypeList onSelectType={handleSelectType} selectedType={selectedType} />
        <button
          style={{ minWidth: "250px" }}
          onClick={toggleFavoritesFilter}
          className="ml-4 p-2 border rounded bg-blue-500 text-white"
        >
          {favoritesOnly ? "Show All" : "Show Favorites Only"}
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    pokemon {
      pokemons(first: 151) {
        number
        name
        image
        types
      }
    }
  }
`;
