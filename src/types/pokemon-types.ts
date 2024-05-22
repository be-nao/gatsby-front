// src/types/pokemon-types.ts
export type Pokemon = {
    id: string;
    number: number;
    name: string;
    attacks: {
      special: Array<{
        name: string;
      }>;
    };
    image: string;
  };
  
  export type PokemonQueryData = {
    pokemon: {
      pokemon: Pokemon;
    };
  };
  