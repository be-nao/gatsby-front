import React, { useState } from "react";
import { Link, graphql, PageProps } from "gatsby";
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

  const handleSelectType = (type: string) => {
    if (selectedType === type) {
      setSelectedType("");
    } else {
      setSelectedType(type);
    }
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.types.includes(selectedType)
  );

  return (
    <main>
      <div className="flex justify-center">
        <TypeList onSelectType={handleSelectType} selectedType={selectedType} />
        {/* {selectedType && <div>Selected: {selectedType}</div>} */}
      </div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-3 gap-4 justify-center">
          {(selectedType ? filteredPokemons : pokemons).map(
            (pokemon, index) => (
              // <Link to={`/pokemon/${pokemon.name.toLowerCase()}`} key={index}>
              <PokemonCard pokemon={pokemon} />
              // </Link>
            )
          )}
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
