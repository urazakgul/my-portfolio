import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      title: "home",
    },
    {
      id: 2,
      title: "about",
    },
    {
      id: 3,
      title: "portfolio",
    },
    {
      id: 4,
      title: "experience",
    },
  ];

  return (
    <div className="bg-black text-white flex justify-between items-center w-full h-24 px-5 fixed">
      <div>
        <h1 className="text-4xl font-signature ml-3 cursor-pointer">
          <Link to="home" smooth duration={500}>Uraz</Link>
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, title }) => (
          <li
            key={id}
            className="px-5 cursor-pointer hover:scale-105 duration-500 capitalize"
          >
            <Link to={title} smooth duration={500}>{title}</Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-3 z-10 md:hidden">
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-100">
          {links.map(({ id, title }) => (
            <li
              key={id}
              className="py-2 text-4xl cursor-pointer hover:scale-105 duration-500 capitalize"
            >
              <Link onClick={() => setNav(!nav)} to={title} smooth duration={500}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;