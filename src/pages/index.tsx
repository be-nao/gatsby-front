// src/pages/index.tsx
import React from "react";
import { Link, graphql, PageProps } from 'gatsby';
import { PokemonsQueryData } from '../types/pokemon-types'; // 型をインポート

const IndexPage: React.FC<PageProps<PokemonsQueryData>> = ({ data }) => {
  const pokemonNames = data.pokemon.pokemons.map(p => p.name);

  return (
    <main>
      <h1>Welcome to My Gatsby Pokemon Site</h1>
      <ul>
        {pokemonNames.map((pokemonName) => (
          <li key={pokemonName}>
            <Link to={`/pokemon/${pokemonName.toLowerCase()}`}>{pokemonName}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

// ページクエリの定義は変更なし
export const query = graphql`
  query {
    pokemon {
      pokemons(first: 151) {
        name
      }
    }
  }
`;
