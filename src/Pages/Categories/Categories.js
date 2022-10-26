import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Courses from "../Courses/Courses";
import { FaArrowRight } from "react-icons/fa";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });

  return (
    <div className=" w-11/12 mt-10 mx-auto">
      <p className="text-center text-4xl my-10">
        We provide courses of {categories.length} categories
      </p>
      <div className="flex flex-wrap justify-evenly gap-x-10 gap-y-14">
        {categories.map((category) => (
          <div className="max-w-sm bg-white rounded-lg border h-[26rem] w-[30rem] border-gray-200 relative shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              className="w-full rounded-lg h-1/2"
              src={category.image}
              alt="No Image Found"
            />

            <div className="p-5">
              <Link to={`/category/${category.CatID}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 text-center dark:text-white">
                  {category.name}
                </h5>
              </Link>
              <p className="text-center text-lg text-red-400">
                Admission going on with {category.discount} off!
              </p>
              <p className="text-center mt-5 text-lg text-black">
                Currently enroled by {category.currentStudent} and growing!
              </p>

              <Link
                to={`/category/${category.CatID}`}
                className="inline-flex mt-5 items-center absolute bottom-2 w-11/12 left-0 right-0 mx-3 py-3 px-3 text-lg font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <div className="flex justify-center w-auto mx-auto">
                  <span className="text-center">Our Courses</span>
                  <span className="mx-3">
                    <FaArrowRight></FaArrowRight>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

// <Link to={`/category/${category.CatID}`} className="text-blue-500 text-center">
//   {category.name}
// </Link>;
