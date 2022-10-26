import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { FaUser } from "react-icons/fa";
import logo from "./logo.ico";
import Swal from "sweetalert2";
const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);

  const getOut = () => {
    logOut()
      .then(() => {
        Swal.fire("You Signed Out!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="">
          <img src={logo} alt="" />
          <span className=" mx-2 self-center whitespace-nowrap font-semibold text-2xl text-blue-500">
            <Link to="/">Bit Masters</Link>
          </span>
        </Navbar.Brand>

        <Navbar.Collapse>
          <Link to="/home" active={true}>
            Home
          </Link>

          <Link to="/courses">Courses</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">FAQ</Link>
        </Navbar.Collapse>
        {!user ? (
          <>
            <div className="flex ">
              <Link to={"/login"}>
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  Register
                </button>
              </Link>
              <div className="mt-3 px-2">
                <FaUser></FaUser>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex">
              <Link className="mr-3" to={""}>
                <button
                  onClick={getOut}
                  type="button"
                  class="text-white w-full mx-auto bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 "
                >
                  Log Out
                </button>
              </Link>
              <Link to="/userDetails">
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      data-tooltip-target="tooltip-default"
                      alt={<FaUser></FaUser>}
                      img={user?.photoURL}
                      title={user?.displayName}
                      rounded={true}
                    />
                  }
                ></Dropdown>
              </Link>
            </div>
          </>
        )}
        <Navbar.Toggle />
      </Navbar>
    </div>
  );
};

export default Navigation;
