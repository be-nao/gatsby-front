import React from "react";

interface TypeProps {
  type: string;
  onSelect?: () => void;
  isSelected?: boolean;
}

const typeColors: Record<string, { background: string; text: string }> = {
  Normal: { background: "bg-gray-400", text: "text-white" },
  Fire: { background: "bg-red-500", text: "text-white" },
  Water: { background: "bg-blue-500", text: "text-white" },
  Electric: { background: "bg-yellow-400", text: "text-black" },
  Grass: { background: "bg-green-500", text: "text-white" },
  Ice: { background: "bg-blue-300", text: "text-black" },
  Fighting: { background: "bg-red-700", text: "text-white" },
  Poison: { background: "bg-purple-500", text: "text-white" },
  Ground: { background: "bg-yellow-600", text: "text-white" },
  Flying: { background: "bg-indigo-400", text: "text-white" },
  Psychic: { background: "bg-pink-500", text: "text-white" },
  Bug: { background: "bg-green-700", text: "text-white" },
  Rock: { background: "bg-yellow-700", text: "text-white" },
  Ghost: { background: "bg-purple-900", text: "text-white" },
  Dragon: { background: "bg-indigo-700", text: "text-white" },
  Dark: { background: "bg-gray-800", text: "text-white" },
  Steel: { background: "bg-gray-500", text: "text-white" },
  Fairy: { background: "bg-pink-300", text: "text-black" },
};

const Type: React.FC<TypeProps> = ({ type, onSelect, isSelected = true }) => {
  const typeStyle = typeColors[type] || {
    background: "bg-gray-200",
    text: "text-black",
  };

  const selectedClass = isSelected ? "opacity-100" : "opacity-20";
  return (
    <div
      className={`${typeStyle.background} ${typeStyle.text} ${selectedClass} text-sm font-semibold m-1 px-3 py-1 rounded cursor-pointer flex justify-center items-center`}
      onClick={onSelect}
    >
      {type}
    </div>
  );
};

export default Type;
