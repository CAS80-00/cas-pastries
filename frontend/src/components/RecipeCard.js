import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="recipe-card-image"
      />

      <div className="recipe-card-content">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>

        <Link to={`/recipes/${recipe.id}`} className="recipe-card-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
