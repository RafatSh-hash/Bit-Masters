import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import home from "../../Assets/home.jpg";
import Typewriter from "typewriter-effect";
import ParticlesBg from "particles-bg";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col mt-10 w-9/12 mx-auto justify-evenly">
      <div className="lg:w-1/2 sm:w-full">
        <div className="mx-10 shadow-2xl">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={home}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Artificial Intelligence Crash Course
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link to={"/courses"}>
              <Button gradientDuoTone="purpleToBlue">
                Take A Tour
                <span className="px-2">
                  <FaArrowRight></FaArrowRight>
                </span>
              </Button>
            </Link>
          </Card>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-full py-12 text-4xl">
        <Typewriter
          options={{
            strings: [
              " “Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.”",

              "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
              "First, solve the problem. Then, write the code.",
              "Not all improvement ideas are good ones. Process and governance is needed to allow bad ideas to die and good ideas to flourish.",
              "If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.",
              "",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
};

export default Home;
