// src/components/PokemonCard.tsx
import React from "react";
import { PokemonCardData } from "../types/pokemon-types";
import Type from "./Type";

interface PokemonCardProps {
  pokemon: PokemonCardData;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div
      style={{ width: "424px", height: "200px" }}
      className="border border-gray-200 rounded-lg shadow-lg p-4 m-2 flex justify-between"
    >
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-xl font-bold">{pokemon.name}</h2>
        <h2 className="text-x font-bold ">{pokemon.number}</h2>
        <ul className="flex flex-wrap mt-">
          {pokemon.types.map((type) => (
            <Type type={type} />
          ))}
        </ul>
      </div>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
};

export default PokemonCard;
