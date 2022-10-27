import { Button } from "flowbite-react";
import React, { useRef } from "react";
import { FaFileDownload, FaRegBookmark } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
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
    <div>
      <div ref={componentRef} className="text-center w-9/12 mx-auto ">
        {data ? (
          <>
            <div className="mt-7 shadow-xl shadow-gray-800 relative rounded-lg p-10">
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
    </div>
  );
};

export default CheckOut;
