import React, { useState } from 'react'
import { storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL  } from 'firebase/storage';
import {addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import { auth } from '../firebase.config';

const AddRecipe = () => {
    const [title,setTitle]= useState("");
    const [ingredients,setIngredients]= useState("");
    const [instructions,setInstructions]= useState("");
    const [file,setFile]= useState(null);

    const handleImageUpload =(e)=>{
        setFile(e.target.files[0]); 
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const storageRef = ref(storage, file.name)
        const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on('state_changed',
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    switch (error.code) {
      case 'storage/unauthorized':
        break;
      case 'storage/canceled':
        break;
      case 'storage/unknown':
        break;
    }
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      console.log('File available at', downloadURL);

      const recipesCollection = collection(db,"recipes");
      const recipesSnapshot = await getDocs(recipesCollection);
      try{
      await addDoc(recipesCollection,{
        title: title,
        ingredients: ingredients,
        instructions: instructions,
        imageUrl: downloadURL,
        userId: auth.currentUser.uid
      })
    }

    catch (e){
      window.alert("Something Went Wrong!!",e)
    }
    setTitle("");
    setIngredients("");
    setInstructions("");
    setFile(null);
    });
  }
);
  window.alert("Submitted Succesfully")
}

  return (
    <div className="w-full flex items-center justify-center gap-10 mt-20">
      <div className="bg-white py-8 px-4 shadow ">
      <h2 className="text-center text-3xl font-extrabold text-gray-900">Add Recipe</h2>
      <form onSubmit={handleSubmit} className="w-full space-y-6 mt-5 ">

        <div className="mt-1">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>

        <div className="mt-1">
        <textarea  value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" rows={5}required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>
        
        <div className="mt-1">
        <textarea  value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions" rows={5}required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>

        <div className="mt-1">
        <input type="file" onChange={handleImageUpload}  required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>

        <div>
        <button className="w-full bg-[#ED2647] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-[#ED2647]-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:py-2 sm:px-4" type="submit">Submit</button>
        </div>

      </form>
    </div>
    </div>
  )
}

export default AddRecipe
