import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  Flowbite,
  Navbar,
} from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { FaUser } from "react-icons/fa";
import logo from "./logo.ico";
import Swal from "sweetalert2";
const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDark, setIsDark] = useState(() => false);
  const [navbar, setNavbar] = useState(false);
  let activeStyle = {
    color: "red",
    font: "18px",
  };

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
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/home"
            active={true}
          >
            Home
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/courses"
          >
            Courses
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/about"
          >
            FAQ
          </NavLink>
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
              <div className="mx-3">
                <Flowbite>
                  <DarkThemeToggle
                    onChange={setIsDark}
                    checked={isDark}
                    size={27}
                  ></DarkThemeToggle>
                </Flowbite>
              </div>
            </div>
          </>
        )}

        <Navbar.Toggle />
      </Navbar>
    </div>
  );
};

export default Navigation;
