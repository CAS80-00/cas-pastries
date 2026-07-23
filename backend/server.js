const express = require("express");
const cors = require("cors");
const { recipes } = require("./data/recipes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data (mutable)
let recipeData = [...recipes];

// GET all recipes (with optional search)
app.get("/api/recipes", (req, res) => {
  const search = (req.query.search || "").toLowerCase();

  if (search) {
    const filtered = recipeData.filter((r) =>
      r.title.toLowerCase().includes(search),
    );
    return res.json(filtered);
  }

  res.json(recipeData);
});

// GET single recipe by id
app.get("/api/recipes/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const recipe = recipeData.find((r) => r.id === id);

  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  res.json(recipe);
});

// POST add new recipe
app.post("/api/recipes", (req, res) => {
  const { title, imageUrl, description, ingredients, steps } = req.body;

  if (!title || !imageUrl) {
    return res
      .status(400)
      .json({ message: "Title and imageUrl are required." });
  }

  const newId =
    recipeData.length > 0 ? Math.max(...recipeData.map((r) => r.id)) + 1 : 1;

  const newRecipe = {
    id: newId,
    title,
    imageUrl,
    description: description || "",
    ingredients: ingredients || [],
    steps: steps || [],
  };

  recipeData.push(newRecipe);
  res.status(201).json(newRecipe);
});

app.listen(PORT, () => {
  console.log(`CAS Pastries backend running on http://localhost:${PORT}`);
});
