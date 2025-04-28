'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (query.trim() === '') return;

    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            query: query,
            number: 10,
            apiKey: '9d8cd71dff1949a5b6eb35a0f999776a',
          },
        }
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-12 px-4 bg-[var(--background)] text-[var(--text-color)]">
      {/* Main Title */}
      <h1 className="text-5xl font-extrabold mb-4 animate-fade-in text-[var(--primary)] text-center">
        Find Your Perfect Recipe
      </h1>

      {/* Subheading */}
      <p className="text-xl mb-6 text-center text-[var(--secondary)]">
        Search thousands of recipes and cook up something delicious!
      </p>

      {/* Motivational Quote */}
      <p className="italic text-md mb-12 text-center text-[var(--secondary)]">
        "Good food = Good mood."
      </p>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-md">
        <input
          type="text"
          placeholder="Search recipes (e.g., pasta, chicken)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-3 border border-[var(--secondary)] rounded-lg bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
        />
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--secondary)] transition disabled:opacity-50"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* Recipes Grid */}
      {recipes.length > 0 && (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-6xl animate-fade-in">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">{recipe.title}</h3>
                <a
                  href={`https://spoonacular.com/recipes/${recipe.title
                    .toLowerCase()
                    .replace(/ /g, '-')}-${recipe.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--secondary)] hover:underline"
                >
                  View Recipe
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {!isLoading && recipes.length === 0 && query.trim() !== '' && (
        <p className="mt-8 text-center text-[var(--secondary)]">
          No recipes found. Try another search!
        </p>
      )}
    </main>
  );
}
