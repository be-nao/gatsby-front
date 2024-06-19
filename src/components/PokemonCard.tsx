// src/components/PokemonCard.tsx
import React from "react";
import { PokemonCardData } from "../types/pokemon-types";

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
          {pokemon.types.map((type, index) => (
            <li
              key={index}
              className="bg-blue-200 text-blue-800 text-sm font-semibold mr-1 mb-1 px-2 py-1 rounded"
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
};

export default PokemonCard;
