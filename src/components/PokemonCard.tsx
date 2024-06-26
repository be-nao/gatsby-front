// src/components/PokemonCard.tsx
import React, { useEffect, useState } from "react";
import { PokemonCardData } from "../types/pokemon-types";
import Type from "./Type";
import { Link } from "gatsby";

interface PokemonCardProps {
  pokemon: PokemonCardData;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(pokemon.name));
  }, [pokemon.name]);

  const toggleFavorite = (event: React.MouseEvent) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.includes(pokemon.name)) {
      const newFavorites = favorites.filter(
        (name: string) => name !== pokemon.name
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, pokemon.name])
      );
      setIsFavorite(true);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Link
        to={`/pokemon/${pokemon.name.toLowerCase()}`}
        style={{ textDecoration: "none" }}
      >
        <div
          className="border border-gray-200 rounded-lg shadow-lg p-4 m-2 flex justify-between"
          style={{ cursor: "pointer" }}
        >
          <div className="flex flex-col justify-center gap-2">
            <h2 className="text-xl font-bold">{pokemon.name}</h2>
            <h2 className="text-lg font-bold">{pokemon.number}</h2>
            <ul className="flex flex-wrap mt-2">
              {pokemon.types.map((type) => (
                <Type key={type} type={type} />
              ))}
            </ul>
          </div>
          <img
            src={pokemon.image}
            alt={pokemon.name}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </Link>
      <div
        onClick={toggleFavorite}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          fontSize: "28px",
          cursor: "pointer",
          color: isFavorite ? "red" : "black",
        }}
      >
        ★
      </div>
    </div>
  );
};

export default PokemonCard;
