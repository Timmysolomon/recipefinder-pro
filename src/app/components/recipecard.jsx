'use client';

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-[#111111] rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition duration-300 animate-fade-in">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{recipe.title}</h3>
        <a
          href={`https://spoonacular.com/recipes/${recipe.title
            .toLowerCase()
            .replace(/ /g, '-')}-${recipe.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded hover:scale-105 transition"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
}
