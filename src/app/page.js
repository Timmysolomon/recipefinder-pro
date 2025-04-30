'use client';

import { useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard'; // ✅ correct path

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
    <main className="min-h-screen flex flex-col items-center justify-start py-12 px-4 bg-[#0f0]()
