import React, { useContext } from "react";
import Lottie from "lottie-react";
import registration from "../../Assets/registration.json";
import ParticlesBg from "particles-bg";
import { AuthContext } from "../../Context/UserContext";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Registration = () => {
  AOS.init({ duration : 500});
  const { createEmailUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(email, password, name, photoURL);
    createEmailUser(email, password, )
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col w-11/12 mt-8 mx-auto h-auto items-center justify-evenly">
        <div className="lg:w-1/4 md:w-1/4 sm:w-full">
          <form
            data-aos="zoom-in-up"
            className="bg-white shadow-lg shadow-gray-400 rounded-2xl py-5 px-5"
            onSubmit={handleSignUp}
          >
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                required=""
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@email.com"
                required=""
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Photo
              </label>
              <input
                name="photoURL"
                type=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Fuser%2F150670&psig=AOvVaw2AKFrqHaUaFegOq2B3Jnd8&ust=1666729588991000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKCTsNrZ-foCFQAAAAAdAAAAABAE"
                required=""
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                placeholder="********"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
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
              Register
            </button>
          </form>
        </div>
        <div className="lg:w-1/3 md:w-1/3 sm:w-full p-8">
          <Lottie animationData={registration} loop={true} />
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
};

export default Registration;
