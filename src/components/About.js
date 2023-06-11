import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-[#0a192f] h-screen w-full text-gray-300">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="max-w-[1000px] w-full flex flex-row gap-8">
          <div className="sm:text-right pb-8 pl-4 w-1/2">
            {/* If the width is greater than 640px then text should be align to right */}
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="max-w-[1000px] w-full flex flex-col sm:flex-row gap-8 px-4">
          <div className="sm:w-1/2 text-4xl font-bold sm:text-right">
             {/* If the width is greater than 640px then text should be align to right */}
            <p>Hi. I'm Srinivasu, nice to meet you. Please take a look around.</p>
          </div>
          <div className="sm:w-1/2 text-justify">
           <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
