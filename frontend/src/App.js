import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import AddRecipePage from "./pages/AddRecipePage";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<RecipeListPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailPage />} />
          <Route path="/add" element={<AddRecipePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
