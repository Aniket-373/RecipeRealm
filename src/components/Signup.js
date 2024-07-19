import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config';
import { Link } from 'react-router-dom';
import Signin from './Signin';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      window.alert("Successfully Signed up")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      window.alert(errorMessage)
    });
  }

  
      return (
    <div className="w-full flex items-center justify-center gap-10 mt-20">
      <div className="bg-white py-8 px-4 shadow ">
      <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
      <form onSubmit={handleSignUp} className="space-y-6 mt-5 ">
        <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address
        </label>
        <div className="mt-1">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>
        </div>

        <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>
        </div>

        <div className="flex items-center justify-between gap-4">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
        <div>
        <button  className="w-full bg-[#ED2647] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-[#ED2647]-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Sign Up</button>
        </div>
      </form>
      <div className='my-3 text-center font-medium text-indigo-600 hover:text-indigo-500'>
        <Link to="/Signin"><span> Existing user? Please Sign in</span></Link>
      </div>
    </div>
    </div>
  );
}

export default Signup
