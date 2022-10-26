import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Courses from "../Courses/Courses";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });

  return (
    <div className="flex w-11/12 mt-10 mx-auto">
      <div className="2/6">
        We provide courses of {categories.length} categories
        {categories.map((category) => (
          <div>
            <Link
              to={`/category/${category.CatID}`}
              className="text-blue-500 text-center"
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="w-4/6"></div>
    </div>
  );
};

export default Categories;
