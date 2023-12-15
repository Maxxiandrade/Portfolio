import React from "react";
import Maxi from "../../assets/Maxi.jpeg";
import download from "../../assets/download.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

const Column = () => {
  return (
    <>
      <div className="bg-gray-200 screenw-full h-screen   justify-center rounded-xl shadow-2xl shadow-slate-950">
        <br />
        <img
          src={Maxi}
          alt=""
          className="rounded-full h-60 w-60 shadow-2xl object-cover ml-9 "
        />
        <h1 className="font-thin text-4xl"> Maximiliano Andrade.</h1>
        <h2 className="underline text-4xl">
          Fullstack <span className="text-blue-900">developer.</span>
        </h2>
        <br />
        <a href="https://www.linkedin.com/in/maximiliano-andrade-8ab0b6213/"  target="_blank">
        <button className='rounded-md text-stone-950 text-sm px-2 inline-flex items-center font  hover:scale-110 transition-transform py-1'  >
          <img src={linkedin} alt="" className="h-7 mr-2 " />
        </button>
        </a>
        <button className='rounded-md text-stone-950 text-sm px-2 mr-2 inline-flex items-center font border border-stone-950 hover:border-stone-950 hover:scale-110 transition-transform py-1'>
          <img src={download} alt="" className="h-6 mr-2" />
          <span>Resume</span>
        </button>
        <a href="https://github.com/Maxxiandrade" target="_blank">
        <button className='rounded-md text-stone-950 text-sm px-2 inline-flex items-center font  hover:scale-110 transition-transform py-1'>
          <img src={github} alt="" className="h-7 mr-2" />
        </button>
        </a>
        <h3 className="text-start text-xl">I'm a web developer who loves constantly learning new things.</h3>
      </div>
    </>
  );
};

export default Column;
