import { Card } from "flowbite-react";
import React from "react";
import {
  FaDownload,
  FaFileDownload,
  FaRegBookmark,
  FaShareAlt,
} from "react-icons/fa";

const Course = (props) => {
  const { logo, name, details, price, duration } = props.course;
  return (
    <div className="mt-9 w-80 h-[32rem] shadow-xl shadow-gray-800 p-4 relative rounded-lg">
      <div className="h-full max-w-sm rounded overflow-hidden shadow-lg">
        <div className="flex w-full justify-between py-2 px-2">
          <button>
            <FaRegBookmark></FaRegBookmark>
          </button>
          <button>
            <FaFileDownload></FaFileDownload>
          </button>
        </div>
        <hr />
        <img className="w-full rounded-lg h-2/6" src={logo} alt={logo} />
        <div className="h-3/6 px-6 py-4 ">
          <div className="font-bold text-xl mb-2 ">{name}</div>
          <p className="text-gray-700 text-base">
            <small>
              {details?.length > 200 ? details?.slice(0, 200) : { details }}
            </small>
          </p>
        </div>
        <div className="flex justify-between h-14 p-4 absolute w-full left-0 bottom-3 items-center">
          <div className="px-6 pt-4 pb-2"> {duration}</div>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Get Access : {price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
