import React from "react";
import { BsGithub, BsLinkedin, BsFillPersonLinesFill, BsMedium } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <BsLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/uraz-akg%C3%BCl-439b36239/?originalSubdomain=tr",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <BsGithub size={30} />
        </>
      ),
      href: "https://github.com/urazakgul",
    },
    {
      id: 3,
      child: (
        <>
          Medium <BsMedium size={30} />
        </>
      ),
      href: "https://medium.com/@urazakgul",
    },
    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:urazdev@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-white ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500" +
              " " +
              style
            }
          >
            <a href={href} className="flex justify-between items-center w-full" download={download} target="_blank" rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;