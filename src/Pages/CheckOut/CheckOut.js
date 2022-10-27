import { Button, Card, Dropdown } from "flowbite-react";
import React, { useRef } from "react";
import { FaFileDownload, FaRegBookmark } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
const CheckOut = () => {
  //recieving the data by useLoaderdata after sending the data from the route
  const data = useLoaderData();

  // Creating function for PDF download
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Course Details",
    onAfterPrint: () => alert("Print Success!"),
  });

  return (
    <div className="flex lg:flex-row sm:flex-col w-11/12 mx-auto mt-16 justify-evenly">
      <div ref={componentRef} className="text-center w-9/12 mx-auto ">
        {data ? (
          <>
            <div className="mt-7 shadow-xl shadow-gray-800 rounded-lg p-10">
              <div className="h-full rounded shadow-lg">
                <div className="flex w-full justify-between py-2 px-2">
                  <button>
                    <FaRegBookmark></FaRegBookmark>
                  </button>
                  <button onClick={handlePrint}>
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
                  <div className="w-60">
                    <Button gradientMonochrome="success">Buy Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <p className="text-red-500 text-4xl text-center">
                Sorry! Something must've went Wrong!
              </p>
            </div>
          </>
        )}
      </div>
      <div>
        <Card>
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Selected Items :
            </h5>

            <div className="mt-4 flex space-x-3 lg:mt-6">
              <Link
                to="#"
                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Check Out
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CheckOut;
