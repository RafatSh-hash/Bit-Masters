import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Courses from "../Pages/Courses/Courses";

import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Services from "../Pages/Services/Services";
import UserDetails from "../Pages/UserDetails/UserDetails";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/courses",
        element: <Categories></Categories>,
      },

      {
        path: "/category/:CatID",
        element: <Courses></Courses>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.CatID}`);
        },
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/userDetails",
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/course/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/course/${params.id}`);
        },
        element: <CheckOut></CheckOut>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);
