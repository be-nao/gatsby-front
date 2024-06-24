// src/pages/PokemonPage.tsx
import React from "react";
import { graphql, PageProps } from "gatsby";
import { PokemonDetailData } from "../types/pokemon-types";
import Type from "./Type";
import { Link } from "gatsby";

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
    <div className="flex flex-col gap-20 pt-10">
      {/* pokemon info */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center gap-2">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">{pokemon.name}</h2>
            <h2 className="text-xl font-bold ">{pokemon.number}</h2>
          </div>
          <ul className="flex flex-wrap mt-">
            {pokemon.types.map((type) => (
              <Type type={type} />
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-bold">Height</h3>
              <p>
                {pokemon.height.minimum} - {pokemon.height.maximum}
              </p>
            </div>
            <div>
              <h3 className="font-bold">Weight</h3>
              <p>
                {pokemon.weight.minimum} - {pokemon.weight.maximum}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Special Attacks</h3>
            <ul>
              {pokemon.attacks.special.map((attack, index) => (
                <li key={index}>{attack.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>

      {/* evolutions */}
      <div className="flex flex-col gap8 items-center">
        {pokemon.evolutions && pokemon.evolutions.length > 0 ? (
          <>
            <h2 className="text-xl font-bold">Evolutions</h2>
            <ul className="flex flex-wrap gap-4 justify-center">
              {pokemon.evolutions.map((evolution, index) => (
                <Link
                  to={`/pokemon/${evolution.name.toLowerCase()}`}
                  key={index}
                  className="flex justify-center items-center w-32 h-32"
                >
                  <img
                    src={evolution.image}
                    alt={evolution.name}
                    className="max-w-full max-h-full"
                  />
                </Link>
              ))}
            </ul>
          </>
        ) : null}
      </div>
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
        evolutions {
          name
          image
        }
      }
    }
  }
`;
