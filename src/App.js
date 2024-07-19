
import './App.css';
import AddRecipe from './components/AddRecipe';
import Footer from './components/Footer';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import Signin from './components/Signin';
import Signup from './components/Signup';
import SearchRecipes from './components/SearchRecipes';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';


const Layout = () =>{
  return (
    <div className="App">
        <Header/>
        <ScrollRestoration/>
        <Outlet/>
        <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path:"/", element: <Layout/>,
    children:[
      {
        path:"/",
        element:<RecipeList/>
      },
      {
        path:"/Signup",
        element:<Signup/>
      },

      {
        path:"/Signin",
        element:<Signin/>
      },
      {
        path:"/AddRecipe",
        element:<AddRecipe/>
      },
      {
        path:"/SearchRecipes",
        element:<SearchRecipes/>
      },
    ]
  }
])

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
