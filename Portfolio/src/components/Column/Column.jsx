import React from "react";

import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";



const Column = () => {
 

  return (
    <>
      <div className="bg-gray-200 screenw-full screenh-full   justify-center rounded-xl shadow-2xl shadow-slate-950">
        <About/>
        <Experience/>
        <Projects/>
          <div> {/* Div Contact*/}
            <h2 className="flex justify-center text-3xl">
              Get in touch
            </h2>

            <label htmlFor="">from <input type="text" /></label> 
            <br />
            <label htmlFor="">to <input type="text"  readOnly placeholder="maxiandrade62@gmail.com" className="w-52 cursor-not-allowed" /></label> 
            <br />
            <label htmlFor="">Subject <input type="text" /></label>
            <br />
            <label htmlFor="">Text <input type="text" /></label>
            <br />
            <button className="bg-gray-950 text-white">Send</button>
          </div>
      </div>
    </>
  );
};

export default Column;
