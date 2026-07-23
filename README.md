# CAS Pastries

INSTRUCTIONS TO COPILOT:
I need to do a project for my class. I need to build the code for a pastry recipe app.

we will be using react, JavaScript, Sql if needed and express. The app will utilize mock sample data or generated content to populate the recipes. Key features include a list page to display all recipes, a detail page for individual recipes, and the implementation of search functionalities for enhanced user experience.

All pages must be linked into each other.

all pages must consistent in design, please utilize a navy green color and white letters. The app name is CAS Pastries. The design must be modern with a white logo of a cookie with the word CAS.

The app must comply with: the creation of sample data of at least 10 different recipies. Here must be a capability of adding more recipes, all will show up in a card format. It must also have a search bar. All cards must have the recipes with a title and a picture.
Provide me all the code and the architecture from scratch, ready to copy and paste.

## Finally, whatever the plan I choose create a REad me doc inside explaining how the app was created. I will be using GitHub, so tell me all the steps to create a repository and continue working in VS code app.

CAS Pastries is a modern pastry recipe web application built with React and Express.  
It displays a collection of pastry recipes, allows users to view detailed recipe information, and provides a form to add new recipes.  
All recipes appear in card format with a title and image, and the app includes a search bar to filter recipes by title.

The design uses a navy‑green theme with white text and a custom white cookie logo labeled “CAS”.  
The header displays the logo and the CAS Pastries name side‑by‑side, with navigation links that remain white at all times.

---

## 🚀 Tech Stack

### Frontend

- React (Create‑React‑App)
- React Router
- Axios
- Modern CSS styling

### Backend

- Node.js
- Express
- In‑memory mock data (10+ recipes)

---

## 📁 Project Structure

cas-pastries/
backend/
package.json
server.js
data/
recipes.js

frontend/
package.json
public/
index.html
src/
index.js
App.js
App.css
assets/
logo.svg
components/
Header.js
RecipeCard.js
SearchBar.js
pages/
RecipeListPage.js
RecipeDetailPage.js
AddRecipePage.js

README.md

---

## 🍰 Features

### ✔ Recipe List Page

- Displays all recipes in card format
- Each card includes:
  - Title
  - Image
  - Short description
- Search bar filters recipes by title
- Navigation links always remain white

### ✔ Recipe Detail Page

- Full recipe information:
  - Image
  - Description
  - Ingredients
  - Steps
- Back link to return to the list

### ✔ Add Recipe Page

- Form to add new recipes
- Supports:
  - Title
  - Image URL
  - Description
  - Ingredients (one per line)
  - Steps (one per line)
- New recipes appear immediately in the list

### ✔ Modern UI

- Navy‑green background
- White text
- White cookie logo with “CAS”
- Responsive layout
- Clean card and form design

---

---

## 🧩 How the App Was Built

### Backend (Express)

1. Created an Express server with CORS and JSON middleware.
2. Added mock recipe data (10+ recipes) in `data/recipes.js`.
3. Implemented REST API endpoints:
   - `GET /api/recipes` — list all recipes or filter by `?search=`
   - `GET /api/recipes/:id` — get a single recipe
   - `POST /api/recipes` — add a new recipe
4. Stored recipes in memory for simplicity.

### Frontend (React)

1. Created the frontend using Create‑React‑App.
2. Installed React Router and Axios.
3. Built pages:
   - RecipeListPage
   - RecipeDetailPage
   - AddRecipePage
4. Built components:
   - Header (logo + name side‑by‑side, white links)
   - RecipeCard
   - SearchBar
5. Applied a modern navy‑green theme using `App.css`.
6. Connected frontend to backend using Axios.

---

---
