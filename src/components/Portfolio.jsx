import React from "react";
import UrazCamping from "../assets/portfolio/uraz-camping.png";

const Portfolio = () => {
  // status: in progress, in testing, completed

  const portfolios = [
    {
      id: 1,
      src: UrazCamping,
      demo: "",
      code: "https://github.com/urazakgul/uraz-camping",
      status: "In progress",
      desc: "The web application has been developed to facilitate the reservation and management of campsites, delivering a seamless user experience."
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-t from-gray-500 to-black text-white w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4">Portfolio</p>
          <p className="py-9">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, status, desc }) => (
            <div key={id} className="shadow-md shadow-white rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-500"
              />
              <div className="text-center mt-2">
                <span className="inline border-b">Status: {status}</span>
              </div>
              <div className="text-center mt-2">
                <span>{desc}</span>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-500 hover:scale-105">
                  <a href={demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-500 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;