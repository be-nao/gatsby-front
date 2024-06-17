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
      <h2>タイプ:{pokemon.types}</h2>
      <h2>技:{pokemon.attacks.special.map((attack) => attack.name).join(', ')}</h2>
        <h2>身長:{pokemon.height.minimum} - {pokemon.height.maximum}</h2>
        <h2>体重:{pokemon.weight.minimum} - {pokemon.weight.maximum}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
};

export default PokemonImage;
