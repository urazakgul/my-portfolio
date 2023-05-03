import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-500 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4">About</p>
        </div>
        <p className="text-xl mt-4">
          Hello there! My name is Uraz Akgül and I have been coding using R
          and Python programming languages for many years. As someone who is
          deeply passionate about software, I have decided to pursue a career in
          the software industry.
        </p>

        <br />

        <p className="text-xl">
          I strongly believe that coding is about freedom, as it allows us to
          create new things and push the boundaries of what is possible. I take
          great pleasure in exploring new technologies and tools to find better
          and more efficient ways of solving problems. As someone who has taught
          themselves to code, I am constantly striving to learn and grow in this
          ever-changing field. My ultimate goal is to hold a prominent position
          in the industry, where I can use my skills to make a meaningful impact
          and contribute to the advancement of technology.
        </p>
      </div>
    </div>
  );
};

export default About;