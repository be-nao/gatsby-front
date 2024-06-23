import React from "react";
import Type from "./Type";

interface TypeListProps {
  onSelectType: (type: string) => void;
  selectedType: string | null;
}

const pokemonTypes = [
  "Normal",
  "Fire",
  "Water",
  "Electric",
  "Grass",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy",
];

const TypeList: React.FC<TypeListProps> = ({ onSelectType, selectedType }) => {
  return (
    <ul className="grid grid-cols-9 gap-1 p-2">
      {pokemonTypes.map((type) => (
        <Type
          key={type}
          type={type}
          isSelected={type === selectedType}
          onSelect={() => onSelectType(type)}
        />
      ))}
    </ul>
  );
};

export default TypeList;
