import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="container relative">
      <div className="blur-3xl animate-pulse">
        <div className="absolute w-52 h-48 md:top-[380px] md:w-96 md:h-20 md:left-32 rounded-full top-[300px] left-10 bg-amber-400"></div>
        <div className="absolute w-52 h-44 md:top-[380px] md:left-[520px] md:w-96 md:h-20 rounded-full top-[300px] left-56 bg-amber-500"></div>
        <div className="absolute md:top-[380px] md:left-[920px] md:w-[410px] md:h-20 rounded-full bg-amber-500"></div>
        <div className="absolute md:top-[380px] md:left-[860px] md:w-[100px] md:h-20 rounded-full bg-amber-700"></div>
        <div className="absolute md:top-[380px] md:left-[470px] md:w-[100px] md:h-20 rounded-full bg-amber-700"></div>
      </div>
      <div className="info absolute top-0 left-0 md:mx-32 md:my-20 mx-9 my-32">
        <h1 className="md:text-9xl text-6xl font-mono font-bold">
          Welcome to{" "}
          <span className="text-amber-500 font-serif text-7xl md:text-9xl">
            CracIndia
          </span>{" "}
        </h1>
        <p className="md:text-4xl md:py-10 font-mono text-2xl py-10">
          CracIndia is a platform that connects contractors, suppliers, and
          manufacturers to work together and grow together.
        </p>
        <Link to="/Home"><button class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-amber-500 rounded-md group">
          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-amber-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-amber-700 rounded group-hover:-ml-4 group-hover:-mb-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-amber-600 rounded-md group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-2xl font-mono text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Get Started
          </span>
        </button></Link>
      </div>
    </div>
  );
};

export default Info;
