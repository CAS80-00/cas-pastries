import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api/recipes";

function AddRecipePage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    await axios.post(API_URL, {
      title,
      imageUrl,
      description,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    });

    navigate("/");
  };

  return (
    <form className="form" onSubmit={submit}>
      <h2>Add Recipe</h2>

      <input
        className="form-input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="form-input"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <textarea
        className="form-textarea"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <textarea
        className="form-textarea"
        placeholder="Ingredients (one per line)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <textarea
        className="form-textarea"
        placeholder="Steps (one per line)"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />

      <button className="primary-button">Save</button>
    </form>
  );
}

export default AddRecipePage;
