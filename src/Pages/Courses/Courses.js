import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = ({ params }) => {
  const courses = useLoaderData(params);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });

  return (
    <div>
      <div className="flex lg:flex-row  sm:flex-col justify-evenly lg:w-11/12 mx-auto flex-row mt-10">
        {categories.map((category) => (
          <div>
            <Link
              className="inline w-full text-center text-lg text-blue-500"
              to={`/category/${category.CatID}`}
              key={category.CatID}
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex w-11/12 mx-auto mt-10 flex-row flex-wrap justify-evenly">
        {courses.map((course) => (
          <Course course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;