// src/pages/index.js
import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  const pokemons = ["Bulbasaur", "Ivysaur", "Venusaur"];

  return (
    <main>
      <h1>Welcome to My Gatsby Pokemon Site</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon}>
            <Link to={`/pokemon/${pokemon.toLowerCase()}`}>{pokemon}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
