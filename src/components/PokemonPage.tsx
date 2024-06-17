// src/pages/PokemonPage.tsx
import React from 'react';
import { graphql } from 'gatsby';
import PokemonImage from '../components/PokemonImage';
import { PokemonQueryData } from '../types/pokemon-types';

export default function PokemonPage({ data }: { data: PokemonQueryData }) {
  const pokemon = data.pokemon.pokemon;
  return <PokemonImage pokemon={pokemon} />;
}

export const query = graphql`
  query($name: String!) {
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
