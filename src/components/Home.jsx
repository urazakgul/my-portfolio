import React from "react";
import myProfile from "../assets/me.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-500 text-white text-2xl">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl">I'm a Full Stack Developer</h2>
          <p className="py-3 max-w-md">
            I'm seeking a position that will allow me to utilize both my
            frontend and backend skills to their fullest potential.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group w-fit px-6 py-3 my-2 flex items-center gap-3 bg-gradient-to-r from-blue-200 to-blue-900 cursor-pointer rounded-md">
                Portfolio <span className="group-hover:rotate-90 duration-500"><BsFillArrowRightCircleFill /></span>
            </Link>
          </div>
        </div>
        <div>
            <img src={myProfile} alt="my profile" className="rounded-full mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;