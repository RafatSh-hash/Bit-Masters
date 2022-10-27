import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = ({ params }) => {
  //gettinh the loaderData as courses
  const courses = useLoaderData(params);

  const [categories, setCategories] = useState([]);

  //using useEffect for retrieving data
  useEffect(() => {
    fetch("https://node-server-xi.vercel.app/catagories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });

  return (
    <div className="bg-gradient-to-t from-sky-300 via-cyan-100 to-neutral-100 ">
      <div className="flex lg:flex-row  sm:flex-col justify-evenly lg:w-11/12 mx-auto flex-row mt-10">
        {categories.map((category) => (
          <div>
            <Button
              outline={true}
              gradientDuoTone="purpleToBlue"
              className="hover:text-white"
            >
              <Link
                className="inline w-full text-center text-lg hover:text-white text-blue-500"
                to={`/category/${category.CatID}`}
                key={category.CatID}
              >
                {category.name}
              </Link>
            </Button>
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
