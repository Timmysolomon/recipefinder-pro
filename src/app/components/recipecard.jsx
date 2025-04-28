'use client';

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-[#111111] rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition duration-300 animate-fade-in">
      <img
        src={recipe.image}
        alt={recipe.label}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{recipe.label}</h3>
        <p className="text-gray-400 text-sm mb-4">{recipe.source}</p>
        <a
          href={recipe.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded hover:scale-105 transition"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
}
