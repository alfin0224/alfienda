import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-t from-cyan-500 to-cyan-900 to-gray-900 pt-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-7 py-6 md:flex-row lg:text-2xl">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-200 py-4 max-w-md">
          I have 6 years of experience in building and designing software. Currently, I love working on web applications using technologies like React JS, Typescript, Material UI, Tailwind CSS, Bootstrap CSS, Node JS, Express JS, Nest JS, Laravel, CodeIgniter, PostgreSQL, MySQL, and MongoDB.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-1000 to-cyan-400 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full lg:w-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
