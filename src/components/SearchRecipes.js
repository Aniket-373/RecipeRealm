import React, { useState } from 'react';
import { collection,getDocs } from 'firebase/firestore';

const SearchRecipes = () => {
  const [category, setCategory] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
        const recipesCollection = collection("recipes")

        

      const recipesSnapshot = await getDocs(recipesCollection);
      const results = recipesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSearchResults(results);
      console.log(results)
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  return (
    <div className= "py-10 container">
    <div className="flex flex-col items-center gap-4"> 
      <h2 className= "text-3xl text-[#ED2647] font-bold py-2 w-80 text-center"> Your Searched Recipes</h2>
      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map(recipe => (
              <li key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>Category: {recipe.category}</p>
                <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                <p>Instructions: {recipe.instructions}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default SearchRecipes;
