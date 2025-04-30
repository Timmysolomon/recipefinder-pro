'use client';

import { useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard'; // ✅ CASE-SENSITIVE fix

export default function Home() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (query.trim() === '') return;

    setIsLoading(true);
    try {
      const response = await axios.get(
        'https://api.spoonacular.com/recipes/complexSearch',
        {
          params: {
            query: query,
            number: 12,
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
    <main className="min-h-screen flex flex-col items-center justify-start py-12 px-4 bg-[#0f0f0f] text-white">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-[#b08968]">
        Find Your Perfect Recipe
      </h1>
      <p className="text-lg mb-6 text-center text-gray-400">
        Search thousands of recipes and cook up something delicious!
      </p>
      <p className="italic text-sm mb-10 text-center text-gray-500">
        &quot;Good food = Good mood.&quot;
      </p>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-md">
        <input
          type="text"
          placeholder="Search recipes (e.g., pasta, chicken)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-3 border border-gray-600 rounded-lg bg-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#b08968]"
        />
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="px-6 py-3 bg-[#b08968] text-black rounded-lg hover:bg-[#a17857] transition disabled:opacity-50"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* Recipes Grid */}
      {recipes.length > 0 && (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-6xl">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}

      {/* No Results Message */}
      {recipes.length === 0 && !isLoading && (
        <p className="text-gray-500 text-sm mt-10 text-center">
          Try searching for something like &quot;pasta&quot; or &quot;salad&quot;!
        </p>
      )}
    </main>
  );
}
