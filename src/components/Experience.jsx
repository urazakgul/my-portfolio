import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import r from "../assets/r.png";
import python_django from "../assets/python_django.png";
import github from "../assets/github.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-600",
    },
    {
      id: 4,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-600",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-600",
    },
    {
      id: 7,
      src: r,
      title: "R",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: python_django,
      title: "Python and Django",
      style: "shadow-green-600",
    },
    {
        id: 9,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400",
      },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-500 to-black w-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;