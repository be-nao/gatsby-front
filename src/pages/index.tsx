// src/pages/index.tsx
import React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { PokemonCardData } from "../types/pokemon-types";
import PokemonCard from "../components/PokemonCard";

interface PokemonsQueryData {
  pokemon: {
    pokemons: PokemonCardData[];
  };
}

const IndexPage: React.FC<PageProps<PokemonsQueryData>> = ({ data }) => {
  const pokemons = data.pokemon.pokemons;

  return (
    <main>
      <div className="flex justify-center ">
        <div className="grid grid-cols-3 ">
          {pokemons.map((pokemon, index) => (
            <Link to={`/pokemon/${pokemon.name.toLowerCase()}`} key={index}>
              <PokemonCard pokemon={pokemon} />
            </Link>
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
