// src/pages/PokemonPage.tsx
import React from "react";
import { graphql, PageProps } from "gatsby";
import { PokemonDetailData } from "../types/pokemon-types";

interface PokemonPageProps extends PageProps {
  data: {
    pokemon: {
      pokemon: PokemonDetailData;
    };
  };
}

export default function PokemonPage({ data }: PokemonPageProps) {
  const { pokemon } = data.pokemon;
  return (
    <div>
      <h1>No.{pokemon.number}</h1>
      <h1>{pokemon.name}</h1>
      <h2>タイプ:{pokemon.types.join(", ")}</h2>{" "}
      <h2>
        技:{pokemon.attacks.special.map((attack) => attack.name).join(", ")}
      </h2>
      <h2>
        身長:{pokemon.height.minimum} - {pokemon.height.maximum}
      </h2>
      <h2>
        体重:{pokemon.weight.minimum} - {pokemon.weight.maximum}
      </h2>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
}

export const query = graphql`
  query PokemonQuery($name: String!) {
    pokemon {
      pokemon(name: $name) {
        id
        number
        name
        attacks {
          special {
            name
          }
        }
        image
        types
        height {
          minimum
          maximum
        }
        weight {
          minimum
          maximum
        }
      }
    }
  }
`;
