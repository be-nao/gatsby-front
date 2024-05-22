// src/components/PokemonImage.tsx
import React from 'react';
import { Pokemon } from '../types/pokemon-types';  // ここでPokemon型をインポート

interface PokemonProps {
  pokemon: Pokemon;
}

const PokemonImage: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div>
      <h1>No.{pokemon.number}</h1>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
};

export default PokemonImage;
