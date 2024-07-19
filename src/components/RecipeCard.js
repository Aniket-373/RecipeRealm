import React from 'react'

function RecipeCard({ props }) {
  return (
    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer object-cover hover:scale-90 duration-500 overflow-hidden">
        <img className="w-full h-60 rounded-t-lg " src={props.imageUrl} alt="recipeimg" />
    
    <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        <p className=" h-[30px] mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-y-auto"><span className="text-black font-bold">Ingredients: {props.ingredients}</span></p>
        <p className="h-[70px] mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-y-auto"><span className="text-black font-bold">Instructions: {props.instructions}</span></p>

    </div>
    </div>
  )
}

export default RecipeCard
