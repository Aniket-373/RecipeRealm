import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import { collection,getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';

const RecipeList = () => {
  const [recipesList,setRecipesList]= useState([]);

  useEffect(()=>{
    const getRecipesList = async () =>{
      const recipesCollection = collection(db,"recipes")
      const recipesSnapshot = await getDocs(recipesCollection);
      const recipes = recipesSnapshot.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id
      }));
      setRecipesList(recipes);
    }
    getRecipesList();
  }, [])

  return (
    <div className="py-10 container">
      <div className="flex flex-col items-center gap-4"> 
        <h1 className="text-4xl font-bold  text-[#ED2647] py-2 w-80 text-center">Recipes</h1>
        <span className="w-20 h-[3px] bg-[#ED2647]"></span>
      </div>
      <div className="d-flex flex-wrap max-w-screen-xl mx-auto py-10 mt-auto grid grid-cols-3  gap-10">
        {recipesList.map(item =>{
          return item.imageUrl ? <RecipeCard props={item} ></RecipeCard> : null;
        })}
        {/* recipecard hav eto be added*/}
      </div>
      </div>    
  )
}

export default RecipeList
