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
          return fetch(
            `https://node-server-xi.vercel.app/category/${params.CatID}`
          );
        },
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/userDetails",
        element: (
          <PrivateRoute>
            <UserDetails></UserDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/course/:id",
        loader: async ({ params }) => {
          return fetch(`https://node-server-xi.vercel.app/course/${params.id}`);
        },
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);
