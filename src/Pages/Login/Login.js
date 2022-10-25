import React, { useContext } from "react";
import Lottie from "lottie-react";
import login from "../../Assets/login.json";
import ParticlesBg from "particles-bg";
import { AuthContext } from "../../Context/UserContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  AOS.init({ duration: 500 });
  const {
    createGoogleUser,
    createGitUser,

    signIn,
    setUser,
  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
        setUser(currentUser);
        Swal.fire("Successfully Logged In With Email & Password!");
        navigate(from, { replace: true });

        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleLogin = () => {
    createGoogleUser()
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
        Swal.fire("Successfully Logged In With GitHub! ");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const gitSignIn = () => {
    createGitUser()
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
        Swal.fire("Successfully Logged In With GitHub!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col w-11/12 mt-20 mx-auto h-auto items-center justify-evenly">
        <div className="lg:w-1/3 sm:w-full md:w-1/3 p-8">
          <Lottie animationData={login} loop={true} />
        </div>
        <div data-aos="zoom-in-up" className="lg:w-1/4 sm:w-full md:w-1/4">
          <form
            className="bg-white rounded-2xl py-5 px-5"
            onSubmit={handleLogin}
          >
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your passcode
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="text-white w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Login
            </button>
            <div className="flex justify-between">
              <button
                onClick={googleLogin}
                type="button"
                className="text-white w-1/2 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <svg
                  className="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                <span className="ml-3 text-center"> Google</span>
              </button>
              <button
                onClick={gitSignIn}
                type="button"
                className=" w-1/2 bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center shadow-lg shadow-gray-500/50 dark:shadow-lg  text-white mr-2 mb-2"
              >
                <FaGithub></FaGithub>
                <span className="ml-3 text-center"> GitHub</span>
              </button>
            </div>
            <p className="text-center">
              <small>
                New Here?
                <span className="text-blue-500 ">
                  <Link to={"/register"}> Please Register</Link>
                </span>
              </small>
            </p>
          </form>
        </div>
      </div>
      <ParticlesBg type="lines" bg={true} />
    </div>
  );
};

export default Login;
