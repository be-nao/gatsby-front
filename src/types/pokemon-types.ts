
  
  export type PokemonCardData = {
        number: number;
        name: string;
        image: string;
        types: string[];
  };

// src/types/pokemon-types.ts
export type SpecialAttack = {
  name: string;
};

export type Attacks = {
  special: SpecialAttack[];
};

export type Dimension = {
  minimum: string;
  maximum: string;
};

export type PokemonDetailData = {
  id: string;
  number: number;
  name: string;
  attacks: Attacks;
  image: string;
  types: string[];
  height: Dimension;
  weight: Dimension;
};
