import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

const API_URL = "http://localhost:5000/api/recipes";

function RecipeListPage() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const fetchRecipes = async () => {
    const response = await axios.get(API_URL, {
      params: search ? { search } : {},
    });
    setRecipes(response.data);
  };

  useEffect(() => {
    fetchRecipes();
  }, [search]);

  return (
    <div>
      <h2>All Recipes</h2>
      <SearchBar value={search} onChange={setSearch} />

      <div className="recipe-grid">
        {recipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}

export default RecipeListPage;
