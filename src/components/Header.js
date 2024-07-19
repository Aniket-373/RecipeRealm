import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import userlogo from '../assets/userlogo.png'
import { signOut } from "firebase/auth";
import { auth } from '../firebase.config';
import { useNavigate } from "react-router-dom";

const Header =  () => {
  const navigate = useNavigate();
  const handleSignout = async (e) => {
    e.preventDefault();
  signOut(auth).then(() => {
    window.alert("Successfully Logged Out");
    navigate("/");
  }).catch((error) => {
    const errorMessage = error.message;
    window.alert(errorMessage);
  });
};

  return (
    <div className="  bg-[#ED2647] text-white p-4 sticky top-0 z-50 box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1) w-full">
        <div className="max-w-screen-xl h-full mx-auto flex justify-between items-center">
        <Link to="/">
        <div>
          <img className="w-30 h-10" src={logo} alt="logo" />
        </div>
        </Link>
        <div  className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
          <Link to="/"><li className="text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li></Link>
          <Link to="/AddRecipe"><li className="text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Add Recipe</li></Link>
          <li className="text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
        </ul>
        <div class="relative">
        <input 
            placeholder="Search..."
            class="input text-black shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
            name="search"
            type="search"
        />
        <Link to="/Searchrecipes"><svg
            class="size-6 absolute top-3 right-3 text-gray-500 cursor-pointer"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            stroke-linejoin="round"
            stroke-linecap="round"
         ></path>
        </svg></Link>
        </div>

        <div className="flex  gap-5 ">
        <Link to="/Signup">
        <img className="w-7 h-7 flex-end" src={userlogo} alt="userlogo" />
        </Link>
        </div>
        <div flex  gap-5>
        <button onClick={handleSignout} className="w-full bg-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:py-2 sm:px-4" type="submit">Sign Out</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header
