import React, { useContext } from "react";
import { FaFileDownload, FaRegBookmark } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div className="text-center w-9/12 mx-auto ">
      <div className="mt-9 shadow-xl shadow-gray-800 p-4 relative rounded-lg p-10">
        <div className="h-full rounded shadow-lg">
          <div className="flex w-full justify-between py-2 px-2">
            <button>
              <FaRegBookmark></FaRegBookmark>
            </button>
            <button>
              <FaFileDownload></FaFileDownload>
            </button>
          </div>
          <hr />
          <div className="w-10/12 h-72 mx-auto">
            <img
              className="w-full rounded-lg h-full"
              src={data.logo}
              alt={data.logo}
            />
          </div>
          <div className="h-3/6 px-6 py-4 ">
            <div className="font-bold text-4xl my-2 ">{data.name}</div>
            <p className="text-gray-700 text-base text-justify my-2">
              {data.details}
            </p>
          </div>
          <div className="flex justify-between h-14 p-4 w-full left-0 bottom-3 items-center my-3">
            <div className="px-6 pt-4 pb-2 text-green-600 font-bold">
              {" "}
              Course Duration: {data.duration}
            </div>
            <button className="bg-green-400 hover:bg-green-300 rounded-md p-4 my-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
