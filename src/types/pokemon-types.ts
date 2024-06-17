// src/types/pokemon-types.ts
export type Pokemon = {
    id: string;
    number: number;
    name: string;
    types: string[];
    attacks: {
      special: Array<{
        name: string;
      }>;
    };
    image: string;
    height: {
      minimum: string;
      maximum: string;
    };
    weight: {
      minimum: string;
      maximum: string;
    };
  };
  
  export type PokemonQueryData = {
    pokemon: {
      pokemon: Pokemon;
    };
  };
  
  export type PokemonsQueryData = {
    pokemon: {
      pokemons: {
        name: string;
      }[];
    };
  };