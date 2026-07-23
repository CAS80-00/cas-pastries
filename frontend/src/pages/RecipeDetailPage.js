import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const API_URL = "http://localhost:5000/api/recipes";

function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/${id}`).then((res) => setRecipe(res.data));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-detail">
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="recipe-detail-image"
      />

      <div>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>

        <h3>Steps</h3>
        <ol>
          {recipe.steps.map((s, idx) => (
            <li key={idx}>{s}</li>
          ))}
        </ol>

        <Link to="/">← Back</Link>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
